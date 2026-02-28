import React from 'react';
import { Github, Activity, Cpu } from 'lucide-react';

export const heroData = {
    badge: "AI CHATBOT",
    title: (
        <>
            Paper <br />
            <span style={{ color: 'var(--accent-gold)' }}>Chat</span>
        </>
    ),
    description: "A full-stack AI chatbot platform with robust tooling integration.",
    metric: (
        <>
            <Activity size={32} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                <strong>Features a RAG pipeline</strong> utilizing LangChain, GPT, and external web searches via MCP to produce context-aware responses.
            </p>
        </>
    ),
    links: [
        {
            url: "https://github.com/leo-Zhizhu/PaperChat",
            icon: <Github size={24} />,
            label: "View Code",
            primary: true
        }
    ]
};

export const galleryData = {
    titlePrefix: "Interface",
    titleHighlight: "Gallery",
    description: "Visuals of the PaperChat interface.",
    images: [] // placeholders
};

export const treeData = [
    {
        name: 'src/', type: 'folder', description: 'Agent Core',
        children: []
    }
];

export const workflowsData = [];

export const architectureData = {
    title: "Core Infrastructure Patterns",
    patterns: [
        {
            id: 'rag',
            title: 'RAG Pipeline',
            icon: <Cpu size={28} color="var(--accent-gold)" />,
            content: 'Detailed explanations will be added later.'
        }
    ]
};

export const qaData = [];
