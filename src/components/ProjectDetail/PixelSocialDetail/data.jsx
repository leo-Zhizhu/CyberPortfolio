import React from 'react';
import { Github, Activity, Cpu } from 'lucide-react';

export const heroData = {
    badge: "AI-POWERED SOCIAL APP",
    title: (
        <>
            Pixel <br />
            <span style={{ color: 'var(--accent-gold)' }}>Social</span>
        </>
    ),
    description: "An AI-powered social platform for creating and sharing AI-generated artwork.",
    metric: (
        <>
            <Activity size={32} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                <strong>Integrated DALL·E 3</strong> for content generation and built a distributed search infrastructure with ElasticSearch.
            </p>
        </>
    ),
    links: [
        {
            url: "https://github.com/leo-Zhizhu/Pixel-Social",
            icon: <Github size={24} />,
            label: "View Code",
            primary: true
        }
    ]
};

export const galleryData = {
    titlePrefix: "Interface",
    titleHighlight: "Gallery",
    description: "Visuals of the Pixel Social app interface.",
    images: [] // placeholders
};

export const treeData = [
    {
        name: 'backend/', type: 'folder', description: 'Golang API context',
        children: []
    }
];

export const workflowsData = [];

export const architectureData = {
    title: "Core Infrastructure Patterns",
    patterns: [
        {
            id: 'search',
            title: 'ElasticSearch integration',
            icon: <Cpu size={28} color="var(--accent-gold)" />,
            content: 'Detailed explanations will be added later.'
        }
    ]
};

export const qaData = [];
