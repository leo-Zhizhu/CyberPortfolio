import React, { useState } from 'react';
import BrickBlock from './BrickBlock';

const keywordMap = {
    'r2-c1': 'PostgreSQL',
    'r5-c2': 'Redis',
    'r3-c4': 'LangGraph',
    'r2-c7': 'CI/CD',
    'r4-c9': 'LiteLLM',
    'r8-c9': 'React.js',
    'r10-c9': 'FastAPI',
    'r11-c10': 'MCP',
    'r16-c2': 'Agent workflow',
    'r20-c1': 'Data pipeline',
    'r21-c6': 'PID control',
    'r20-c9': 'Non-linear optimization',
    'r14-c1': 'RESTful API',
    'r12-c1': 'Spring Boot',
    'r18-c10': 'AWS',
    'r11-c1': 'Docker',
    'r21-c1': 'JWT middleware',
    'r3-c3': 'ElasticSearch',
    'r5-c4': 'Google App Engine',
    'r5-c9': 'Golang',
    'r8-c1': 'Kotlin',
    'r6-c1': 'MVVM',
    'r14-c9': 'Dependency Injection',
    'r16-c10': 'Node.js',
    'r7-c2': 'Express.js',
    'r2-c10': 'Ant Design',
    'r8-c2': 'LangChain',
    'r18-c1': 'RAG',
    'r6-c6': 'Python',
    'r2-c5': 'Java',
    'r22-c8': 'C++',
    'r7-c1': 'Javascript',
    'r9-c2': 'HTML/CSS',
    'r12-c10': 'Git',
    'r3-c10': 'Cloud Deployment'
};

const projectOneKeywords = [
    'r2-c1', 'r5-c2', 'r3-c4', 'r2-c7', 'r4-c9', 'r8-c9', 'r10-c9',
    'r11-c10', 'r16-c2', 'r20-c1', 'r7-c1', 'r9-c2', 'r12-c10',
    'r14-c1', 'r18-c1', 'r11-c1', 'r3-c10'
];

const projectSixKeywords = [
    'r20-c1', 'r21-c6', 'r20-c9', 'r11-c1', 'r6-c6', 'r12-c10'
];

const BrickWall = ({ hoveredProjectId }) => {
    const rows = 45;
    const cols = 60;

    // Use state so we can mutate specific blocks by ID later if needed.
    const [blocks, setBlocks] = useState(() => {
        const initialBlocks = {};
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const id = `r${r}-c${c}`;
                initialBlocks[id] = { id, row: r, col: c, word: keywordMap[id] || null };
            }
        }
        return initialBlocks;
    });

    return (
        <div style={{
            position: 'absolute',
            top: '-5%',
            left: '-5%',
            right: '-5%',
            bottom: '-5%',
            zIndex: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            overflow: 'hidden',
            pointerEvents: 'none',
        }}>
            {Array.from({ length: rows }).map((_, r) => (
                <div key={r} style={{
                    display: 'flex',
                    gap: '12px',
                    transform: r % 2 !== 0 ? 'translateX(-60px)' : 'none',
                    width: '200%'
                }}>
                    {Array.from({ length: cols }).map((_, c) => {
                        const id = `r${r}-c${c}`;
                        const blockData = blocks[id];
                        const isHighlighted =
                            (hoveredProjectId === 1 && projectOneKeywords.includes(id)) ||
                            (hoveredProjectId === 6 && projectSixKeywords.includes(id));

                        return <BrickBlock key={id} id={blockData.id} word={blockData.word} isHighlighted={isHighlighted} />;
                    })}
                </div>
            ))}
        </div>
    );
};

export default BrickWall;
