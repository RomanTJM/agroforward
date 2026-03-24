import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

const GAP    = 24;
const EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';

const Carousel = ({ items, renderCard, cardClass, activeClass, hint }) => {
    const n        = items.length;
    const extended = [...items, ...items, ...items];

    const [cardWidth, setCardWidth] = useState(0);
    const [realIdx,   setRealIdx]   = useState(0);

    const viewportRef  = useRef(null);
    const trackRef     = useRef(null);
    const cardsRef     = useRef([]);
    const cardWidthRef = useRef(0);
    const visibleRef   = useRef(3);
    const peekRef      = useRef(52);
    const posRef       = useRef(n);
    // Mouse drag state (pointer events, desktop only)
    const dragRef      = useRef({ active: false, cancelled: false, startX: 0, startY: 0, lastX: 0, lastT: 0, velocity: 0, pointerId: -1 });

    const updateActiveClasses = useCallback((p) => {
        cardsRef.current.forEach((card, idx) => {
            if (!card) return;
            card.classList.toggle(activeClass, idx >= p && idx < p + visibleRef.current);
        });
    }, [activeClass]);

    const applyTransform = useCallback((px, transitionDur = null) => {
        if (!trackRef.current) return;
        trackRef.current.style.transition = transitionDur
            ? `transform ${transitionDur}s ${EASING}`
            : 'none';
        trackRef.current.style.transform = `translateX(${px}px)`;
    }, []);

    const getX = useCallback((p) =>
        -(p * (cardWidthRef.current + GAP)) + peekRef.current,
    []);

    const handleTransitionEnd = useCallback(() => {
        const p = posRef.current;
        let jumped = false;
        if (p < n)      { posRef.current = p + n; jumped = true; }
        if (p >= 2 * n) { posRef.current = p - n; jumped = true; }
        if (jumped) {
            applyTransform(getX(posRef.current));
            updateActiveClasses(posRef.current);
        }
        setRealIdx(((posRef.current % n) + n) % n);
    }, [n, applyTransform, getX, updateActiveClasses]);

    const snapTo = useCallback((newPos, dur = 0.48) => {
        posRef.current = newPos;
        applyTransform(getX(newPos), dur);
        updateActiveClasses(newPos);
        setRealIdx(((newPos % n) + n) % n);
    }, [applyTransform, getX, updateActiveClasses, n]);

    const go = useCallback((delta, dur = 0.48) => {
        snapTo(posRef.current + delta, dur);
    }, [snapTo]);

    const measure = useCallback(() => {
        if (!viewportRef.current) return;
        const vw = viewportRef.current.offsetWidth;
        visibleRef.current = vw < 640 ? 1 : 3;
        peekRef.current    = vw < 640 ? 16 : 52;
        const cw = (vw - (visibleRef.current - 1) * GAP - 2 * peekRef.current) / visibleRef.current;
        cardWidthRef.current = cw;
        setCardWidth(cw);
        applyTransform(getX(posRef.current));
        updateActiveClasses(posRef.current);
    }, [applyTransform, getX, updateActiveClasses]);

    useEffect(() => {
        measure();
        const ro = new ResizeObserver(measure);
        if (viewportRef.current) ro.observe(viewportRef.current);
        return () => ro.disconnect();
    }, [measure]);

    // ── Native touch events (mobile) ──────────────────────────────────────
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let startX = 0, startY = 0, lastX = 0, lastT = 0, vel = 0, active = false, locked = false;

        const onTouchStart = (e) => {
            if (e.target.closest('button')) return;
            const t = e.touches[0];
            startX = t.clientX; startY = t.clientY;
            lastX = startX; lastT = performance.now();
            vel = 0; active = false; locked = false;
        };

        const onTouchMove = (e) => {
            if (locked) return;                          // vertical — let page scroll
            const t  = e.touches[0];
            const dx = t.clientX - startX;
            const dy = t.clientY - startY;

            if (!active) {
                if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;  // wait for clear intent
                if (Math.abs(dx) >= Math.abs(dy)) {
                    active = true;                       // horizontal — take over
                    applyTransform(getX(posRef.current));
                } else {
                    locked = true;                       // vertical — ignore the rest
                    return;
                }
            }

            e.preventDefault();                          // stop page scroll while dragging
            const now = performance.now();
            const dt  = now - lastT;
            if (dt > 0) vel = (t.clientX - lastX) / dt;
            lastX = t.clientX; lastT = now;
            applyTransform(getX(posRef.current) + dx);
        };

        const onTouchEnd = (e) => {
            if (!active) return;
            active = false;
            const dx = e.changedTouches[0].clientX - startX;
            if (Math.abs(dx) < 5 && Math.abs(vel) < 0.1) { snapTo(posRef.current, 0.35); return; }

            const step = cardWidthRef.current + GAP;
            let slides = Math.round(-(dx + vel * 200) / step);
            const threshold = Math.min(Math.max(step * 0.25, 50), 120); // короткий свайп до 25% ширины
            if (slides === 0) {
                if (Math.abs(dx) > threshold) slides = dx < 0 ? 1 : -1;
                else if (Math.abs(vel) > 0.35) slides = vel < 0 ? 1 : -1;
            }

            const speed = Math.abs(vel);
            const dur = speed > 2 ? 0.28 : speed > 0.8 ? 0.38 : 0.48;
            snapTo(posRef.current + slides, dur);
        };

        track.addEventListener('touchstart', onTouchStart, { passive: true });
        track.addEventListener('touchmove',  onTouchMove,  { passive: false }); // passive:false needed for preventDefault
        track.addEventListener('touchend',   onTouchEnd,   { passive: true });

        return () => {
            track.removeEventListener('touchstart', onTouchStart);
            track.removeEventListener('touchmove',  onTouchMove);
            track.removeEventListener('touchend',   onTouchEnd);
        };
    }, [applyTransform, getX, snapTo]);

    // ── Pointer events (mouse / desktop only) ─────────────────────────────
    const onPointerDown = (e) => {
        if (e.pointerType === 'touch') return;           // touch handled above
        if (e.target.closest('button')) return;
        dragRef.current = {
            active: false, cancelled: false,
            startX: e.clientX, startY: e.clientY,
            lastX: e.clientX, lastT: performance.now(),
            velocity: 0, pointerId: e.pointerId,
        };
        if (viewportRef.current) viewportRef.current.style.cursor = 'grabbing';
    };

    const onPointerMove = (e) => {
        if (e.pointerType === 'touch') return;
        const d = dragRef.current;
        if (d.cancelled || d.pointerId < 0) return;

        const dx = e.clientX - d.startX;
        const dy = e.clientY - d.startY;

        if (!d.active) {
            if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
            if (Math.abs(dx) >= Math.abs(dy)) {
                d.active = true;
                trackRef.current?.setPointerCapture(d.pointerId);
                applyTransform(getX(posRef.current));
            } else {
                d.cancelled = true;
                if (viewportRef.current) viewportRef.current.style.cursor = 'grab';
                return;
            }
        }

        const now = performance.now();
        const dt  = now - d.lastT;
        if (dt > 0) d.velocity = (e.clientX - d.lastX) / dt;
        d.lastX = e.clientX;
        d.lastT = now;
        applyTransform(getX(posRef.current) + dx);
    };

    const onPointerUp = (e) => {
        if (e.pointerType === 'touch') return;
        const d = dragRef.current;
        if (viewportRef.current) viewportRef.current.style.cursor = 'grab';
        dragRef.current = { active: false, cancelled: false, startX: 0, startY: 0, lastX: 0, lastT: 0, velocity: 0, pointerId: -1 };

        if (!d.active) return;

        const dx = e.clientX - d.startX;
        const v  = d.velocity;

        if (Math.abs(dx) < 5 && Math.abs(v) < 0.1) { snapTo(posRef.current, 0.35); return; }

        const step = cardWidthRef.current + GAP;
        let slides = Math.round(-(dx + v * 200) / step);
        const threshold = Math.min(Math.max(step * 0.25, 50), 120);
        if (slides === 0) {
            if (Math.abs(dx) > threshold) slides = dx < 0 ? 1 : -1;
            else if (Math.abs(v) > 0.35) slides = v < 0 ? 1 : -1;
        }

        const speed = Math.abs(v);
        const dur = speed > 2 ? 0.28 : speed > 0.8 ? 0.38 : 0.48;
        snapTo(posRef.current + slides, dur);
    };

    return (
        <div className="csl-carousel">
            {hint && (
                <div className="csl-hint"><span>{hint}</span></div>
            )}

            <div className="csl-viewport" ref={viewportRef} style={{ cursor: 'grab' }}>
                <div
                    ref={trackRef}
                    className="csl-track"
                    style={{ gap: `${GAP}px` }}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerLeave={onPointerUp}
                    onPointerCancel={onPointerUp}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extended.map((item, idx) => (
                        <div
                            key={idx}
                            ref={el => { cardsRef.current[idx] = el; }}
                            className={cardClass}
                            style={{ flex: `0 0 ${cardWidth}px`, minWidth: `${cardWidth}px` }}
                        >
                            {renderCard(item, idx % n)}
                        </div>
                    ))}
                </div>
            </div>

            <div className="csl-controls">
                <button className="csl-nav-btn" onClick={() => go(-1)} aria-label="Предыдущий">
                    <ChevronLeft size={20} />
                </button>

                <div className="csl-dots">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            className={`csl-dot${realIdx === i ? ' csl-dot--active' : ''}`}
                            onClick={() => { const d = i - realIdx; if (d !== 0) go(d); }}
                            aria-label={`Слайд ${i + 1}`}
                        />
                    ))}
                </div>

                <button className="csl-nav-btn" onClick={() => go(1)} aria-label="Следующий">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
