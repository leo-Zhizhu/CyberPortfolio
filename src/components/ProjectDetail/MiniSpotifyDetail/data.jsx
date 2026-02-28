import React from 'react';
import { Github, Activity, Cpu } from 'lucide-react';

export const heroData = {
    badge: "MOBILE APPLICATION",
    title: (
        <>
            Mini <br />
            <span style={{ color: 'var(--accent-gold)' }}>Spotify</span>
        </>
    ),
    description: "A lightweight Android music streaming application built natively.",
    metric: (
        <>
            <Activity size={32} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                <strong>Engineered a robust MVVM state machine</strong> with Jetpack Compose for declarative UI, alongside Hilt Dependency Injection.
            </p>
        </>
    ),
    links: [
        {
            url: "https://github.com/leo-Zhizhu/MiniSpotify",
            icon: <Github size={24} />,
            label: "View Code",
            primary: true
        }
    ]
};

export const galleryData = {
    titlePrefix: "App",
    titleHighlight: "Gallery",
    description: "Visuals of the MiniSpotify android app.",
    images: [] // placeholders
};

export const treeData = [
    {
        name: 'app/src/main/java/', type: 'folder', description: 'Kotlin Native Core',
        children: []
    }
];

export const workflowsData = [];

export const architectureData = {
    title: "Core Infrastructure Patterns",
    patterns: [
        {
            id: 'mvvm',
            title: 'MVVM Arch',
            icon: <Cpu size={28} color="var(--accent-gold)" />,
            content: 'Detailed explanations will be added later.'
        }
    ]
};

export const qaData = [];
