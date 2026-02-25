import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Maximize2, ExternalLink, Linkedin, Instagram } from 'lucide-react';

const ProjectCard = ({ project, onHover, onLeave }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseEnter={() => {
                setIsHovered(true);
                if (onHover) onHover(project.id);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                if (onLeave) onLeave();
            }}
            className="minimal-panel project-card-fx"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{
                gridColumn: project.size === 'large' ? 'span 2' : 'span 1',
                gridRow: project.size === 'large' ? 'span 2' : 'span 1',
                padding: project.size === 'large' ? '25px' : '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                zIndex: 10,
                background: 'var(--bg-color)', // Important to block the brick wall
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {project.logo && (
                <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    style={{
                        position: 'absolute',
                        top: project.size === 'large' ? '-10%' : '-15%',
                        left: project.size === 'large' ? '-5%' : '-10%',
                        width: project.size === 'large' ? '60%' : '70%',
                        height: project.size === 'large' ? '80%' : '90%',
                        objectFit: 'contain',
                        zIndex: 0,
                        pointerEvents: 'none',
                        opacity: 0.1,
                        filter: 'drop-shadow(0 0 20px rgba(252, 211, 77, 0.2))'
                    }}
                />
            )}

            <div style={{ marginBottom: project.size === 'large' ? '30px' : '15px', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <h3 style={{
                            fontSize: project.size === 'large' ? '1.8rem' : '1.1rem',
                            lineHeight: 1.2,
                            fontWeight: 600
                        }}>
                            {project.title}
                        </h3>
                    </div>
                    <motion.button
                        onClick={() => console.log(`Open detailed page for ${project.title}`)}
                        whileHover={{ scale: 1.1, color: 'var(--accent-gold)' }}
                        style={{
                            color: 'var(--text-main)',
                            flexShrink: 0,
                            marginLeft: '10px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        }}
                    >
                        <Maximize2 strokeWidth={1.5} size={project.size === 'large' ? 24 : 20} />
                    </motion.button>
                </div>
                {(project.role || project.duration || project.location) && (
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', flexWrap: 'wrap' }}>
                        {project.role && <span style={{ fontFamily: 'Montserrat', fontSize: '0.85rem', color: 'var(--accent-gold)' }}>{project.role}</span>}
                        {project.duration && <span style={{ fontFamily: 'Montserrat', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.duration}</span>}
                        {project.location && <span style={{ fontFamily: 'Montserrat', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{project.location}</span>}
                    </div>
                )}
                {project.size === 'large' && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                        {project.description}
                    </p>
                )}
                {project.size === 'small' && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.4 }}>
                        {project.description}
                    </p>
                )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto', position: 'relative', zIndex: 2 }}>
                <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
                    {project.tech.map((t, i) => (
                        <li key={i} style={{
                            fontFamily: 'Montserrat',
                            fontSize: '0.7rem',
                            color: 'var(--accent-gold)',
                            textTransform: 'uppercase',
                            borderBottom: '1px solid var(--accent-gold)'
                        }}>
                            {t}
                        </li>
                    ))}
                </ul>
                <div style={{ display: 'flex', gap: '15px' }}>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} title="GitHub" onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                            <Github size={18} strokeWidth={1.5} />
                        </a>
                    )}
                    {project.linkedin && (
                        <a href={project.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} title="LinkedIn" onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                            <Linkedin size={18} strokeWidth={1.5} />
                        </a>
                    )}
                    {project.instagram && (
                        <a href={project.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} title="Instagram" onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                            <Instagram size={18} strokeWidth={1.5} />
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', transition: 'color 0.3s' }} title="Live Site" onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                            <ExternalLink size={18} strokeWidth={1.5} />
                        </a>
                    )}
                </div>
            </div>

        </motion.div>
    );
};

export default ProjectCard;
