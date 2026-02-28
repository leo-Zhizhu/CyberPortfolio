import React from 'react';
import { PlayCircle, Github, ExternalLink, Activity, Folder, FileCode, Cpu, Database } from 'lucide-react';

export const heroData = {
    badge: "FULL-STACK CLOUD SERVICE",
    title: (
        <>
            Grocery <br />
            <span style={{ color: 'var(--accent-gold)' }}>Manager</span>
        </>
    ),
    description: "A cloud-native online grocery list management platform.",
    metric: (
        <>
            <Activity size={32} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                <strong>Deployed on AWS App Runner</strong> featuring a Spring Boot RESTful API with PostgreSQL and session-based authentication.
            </p>
        </>
    ),
    links: [
        {
            url: "https://jfmvpckfgd.us-east-2.awsapprunner.com/",
            icon: <ExternalLink size={24} />,
            label: "Public Website",
            primary: true
        },
        {
            url: "https://github.com/leo-Zhizhu/GroceryManager",
            icon: <Github size={24} />,
            label: "View Code",
            primary: false
        }
    ]
};

export const galleryData = {
    titlePrefix: "Interface",
    titleHighlight: "Gallery",
    description: "Visuals of the Grocery Manager web interface.",
    images: [] // placeholders
};

export const treeData = [
    {
        name: 'src/main/java/', type: 'folder', description: 'Spring Boot Application Core',
        children: []
    }
];

export const workflowsData = [];

export const architectureData = {
    title: "Core Infrastructure Patterns",
    patterns: [
        {
            id: 'spring',
            title: 'Spring Boot architecture',
            icon: <Cpu size={28} color="var(--accent-gold)" />,
            content: 'Detailed explanations will be added later.'
        }
    ]
};

export const qaData = [];
