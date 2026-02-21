import React from 'react';

const BrickBlock = ({ id, word, isHighlighted, style = {} }) => {
    return (
        <div
            id={`brick-${id}`}
            style={{
                width: '130px',
                height: '40px',
                flexShrink: 0,
                border: isHighlighted ? '2px solid var(--accent-yellow)' : (word ? '1px solid var(--accent-gold)' : '2px solid var(--text-main)'),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isHighlighted ? 'rgba(252, 211, 77, 0.1)' : 'transparent',
                opacity: isHighlighted ? 1 : (word ? 0.8 : 0.2), // increased opacity of words
                transform: isHighlighted ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s ease',
                zIndex: isHighlighted ? 10 : 1,
                boxShadow: isHighlighted ? '0 0 15px rgba(252, 211, 77, 0.4)' : 'none',
                ...style
            }}
        >
            {word ? (
                <span style={{
                    fontFamily: 'Montserrat',
                    fontWeight: isHighlighted ? 800 : 600,
                    fontSize: isHighlighted ? '0.85rem' : '0.8rem',
                    color: isHighlighted ? 'var(--accent-yellow)' : 'var(--accent-gold)',
                    letterSpacing: '0.05em',
                    transition: 'all 0.3s ease'
                }}>
                    {word}
                </span>
            ) : null}
        </div>
    );
};

export default BrickBlock;
