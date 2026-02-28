import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import HeroSection from '../Shared/HeroSection';
import ImageGallery from '../Shared/ImageGallery';
import DirectoryTree from '../Shared/DirectoryTree';
import WorkflowDiagrams from '../Shared/WorkflowDiagrams';
import ArchitectureSection from '../Shared/ArchitectureSection';
import QASection from '../Shared/QASection';

import {
    heroData,
    galleryData,
    treeData,
    workflowsData,
    architectureData,
    qaData
} from './data';

const PixelSocialDetail = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            padding: '30px 20px',
            backgroundColor: 'rgb(245, 242, 233)',
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            color: 'var(--text-main)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ width: '100%', maxWidth: '1200px' }}>
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => navigate('/zhuzhi#projects')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--accent-gold)',
                        color: 'var(--accent-gold)',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    ← Go Back
                </motion.button>

                <HeroSection
                    badge={heroData.badge}
                    title={heroData.title}
                    description={heroData.description}
                    metric={heroData.metric}
                    links={heroData.links}
                />
                <ImageGallery
                    titlePrefix={galleryData.titlePrefix}
                    titleHighlight={galleryData.titleHighlight}
                    description={galleryData.description}
                    images={galleryData.images}
                />
                <DirectoryTree
                    treeData={treeData}
                />
                <WorkflowDiagrams
                    workflows={workflowsData}
                />
                <ArchitectureSection
                    title={architectureData.title}
                    patterns={architectureData.patterns}
                />
                <QASection
                    qaData={qaData}
                />
            </div>
        </div>
    );
};

export default PixelSocialDetail;
