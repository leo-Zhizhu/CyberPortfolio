import React from 'react';
import { PlayCircle, Github, ExternalLink, Activity, Folder, FileCode, Cpu, Database } from 'lucide-react';

export const heroData = {
    badge: "ROBOTICS \u0026 MACHINE LEARNING",
    title: (
        <>
            Cornell Autonomous <br />
            <span style={{ color: 'var(--accent-gold)' }}>Underwater Vehicle</span>
        </>
    ),
    description: "Enhance vehicle performance through the intersection of machine learning and robotics control.",
    metric: (
        <>
            <Activity size={32} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                <strong>Designed and implemented</strong> an automated data pipeline to collect and preprocess real-world pool test data for machine learning.
            </p>
        </>
    ),
    links: [
        {
            url: "https://cuauv.org",
            icon: <ExternalLink size={24} />,
            label: "Public Website",
            primary: true
        }
    ]
};

export const galleryData = {
    titlePrefix: "Vehicle",
    titleHighlight: "Gallery",
    description: "Images showcasing CUAUV's advanced autonomous underwater vehicles.",
    images: [
        // placeholder image imports or urls can be placed here
    ]
};

export const treeData = [
    // placeholder data
    {
        name: 'src/', type: 'folder', description: 'Core Python Scripts',
        children: []
    }
];

export const workflowsData = [
    // placeholder workflow
];

export const architectureData = {
    title: "Core Infrastructure Patterns",
    patterns: [
        // placeholder structure
        {
            id: 'control',
            title: 'Control Architecture',
            icon: <Cpu size={28} color="var(--accent-gold)" />,
            content: 'Detailed explanations will be added later.'
        }
    ]
};

export const qaData = [
    // placeholder QA
];
