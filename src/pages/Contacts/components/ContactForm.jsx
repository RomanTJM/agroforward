import React from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = ({ isSubmitted, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div id="feedback" className="contact-card" style={{ scrollMarginTop: '100px' }}>
            <div className="text-center mb-4">
                <h3>Форма обратной связи</h3>
                <p className="text-muted">Заполните поля ниже, и мы свяжемся с вами в течение рабочего дня.</p>
            </div>

            <AnimatePresence mode="wait">
                {isSubmitted ? (
                    <motion.div
                        className="success-message text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                    >
                        <CheckCircle size={64} className="text-primary" />
                        <h4 style={{ fontSize: '1.5rem' }}>Сообщение отправлено!</h4>
                        <p className="text-muted">Спасибо за обращение. Мы скоро ответим вам.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        className="feedback-form"
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="form-group">
                            <label className="detail-label" htmlFor="name">Ваше имя *</label>
                            <input
                                id="name"
                                type="text"
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                placeholder="Имя Фамилия"
                                {...register("name", { required: "Поле обязательно для заполнения" })}
                            />
                            {errors.name && <span className="error-message">{errors.name.message}</span>}
                        </div>

                        <div className="form-group">
                            <label className="detail-label" htmlFor="email">E-mail *</label>
                            <input
                                id="email"
                                type="email"
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                placeholder="mail@example.com"
                                {...register("email", {
                                    required: "Поле обязательно для заполнения",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Пожалуйста, введите корректный email"
                                    }
                                })}
                            />
                            {errors.email && <span className="error-message">{errors.email.message}</span>}
                        </div>

                        <div className="form-group form-group-full">
                            <label className="detail-label" htmlFor="message">Сообщение *</label>
                            <textarea
                                id="message"
                                rows={5}
                                className={`form-input ${errors.message ? 'error' : ''}`}
                                placeholder="Чем мы можем вам помочь?"
                                {...register("message", {
                                    required: "Пожалуйста, введите текст сообщения",
                                    minLength: { value: 10, message: "Сообщение должно быть минимум 10 символов" }
                                })}
                            />
                            {errors.message && <span className="error-message">{errors.message.message}</span>}
                        </div>

                        <button className="btn btn-primary submit-btn" type="submit">
                            <Send size={18} /> Отправить сообщение
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
