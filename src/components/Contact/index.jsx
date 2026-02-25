import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section" id="contact" style={{ paddingBottom: '3rem', backgroundColor: 'var(--bg-alt)' }}>
            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ padding: '5rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                        Get In <span style={{ color: 'var(--accent-gold)', fontStyle: 'normal' }}>Touch</span>
                    </h2>
                    <div style={{ width: '40px', height: '2px', background: 'var(--text-main)', margin: '0 auto 2rem auto' }} />

                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 4rem auto', lineHeight: 1.8 }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
                        <input
                            type="text"
                            placeholder="YOUR NAME"
                            style={{ width: '100%', padding: '15px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.9rem', fontFamily: 'Montserrat', letterSpacing: '0.1em', outline: 'none', transition: 'border-color 0.3s' }}
                            onFocus={(e) => e.target.style.borderBottomColor = 'var(--text-main)'}
                            onBlur={(e) => e.target.style.borderBottomColor = 'var(--border-color)'}
                        />
                        <input
                            type="email"
                            placeholder="YOUR EMAIL"
                            style={{ width: '100%', padding: '15px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.9rem', fontFamily: 'Montserrat', letterSpacing: '0.1em', outline: 'none', transition: 'border-color 0.3s' }}
                            onFocus={(e) => e.target.style.borderBottomColor = 'var(--text-main)'}
                            onBlur={(e) => e.target.style.borderBottomColor = 'var(--border-color)'}
                        />
                        <textarea
                            placeholder="MESSAGE"
                            rows={4}
                            style={{ width: '100%', padding: '15px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.9rem', fontFamily: 'Montserrat', letterSpacing: '0.1em', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }}
                            onFocus={(e) => e.target.style.borderBottomColor = 'var(--text-main)'}
                            onBlur={(e) => e.target.style.borderBottomColor = 'var(--border-color)'}
                        />
                        <button type="button" className="btn" style={{ marginTop: '20px', alignSelf: 'center' }}>
                            Send Message
                        </button>
                    </form>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                            <Mail color="var(--accent-gold)" size={20} /> <span style={{ fontFamily: 'Montserrat', fontSize: '0.9rem' }}>hello@example.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                            <MapPin color="var(--accent-gold)" size={20} /> <span style={{ fontFamily: 'Montserrat', fontSize: '0.9rem' }}>San Francisco, CA</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                            <Phone color="var(--accent-gold)" size={20} /> <span style={{ fontFamily: 'Montserrat', fontSize: '0.9rem' }}>+1 (555) 123-4567</span>
                        </div>
                    </div>
                </motion.div>

                <footer style={{ marginTop: '4rem', paddingBottom: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'Montserrat' }}>
                    <p>© {new Date().getFullYear()} Your Name. Minimalist Design.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
