import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DocCard = ({ img, title, description, onPreview, onDownload, delay = 0, subtitle }) => (
    <motion.div
        className="doc-card-rich"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
    >
        <div className="doc-preview" onClick={() => onPreview({ src: img, title })}>
            <img src={img} alt={title} />
        </div>
        <div className="doc-content">
            <h4>{title}</h4>
            {subtitle && <p className="text-xs text-primary font-bold mb-1">{subtitle}</p>}
            <p className="text-sm text-muted mb-3">{description}</p>
            <button
                className="btn btn-outline btn-sm w-full"
                onClick={onDownload}
            >
                <Download size={16} /> Скачать PDF
            </button>
        </div>
    </motion.div>
);

export default DocCard;
