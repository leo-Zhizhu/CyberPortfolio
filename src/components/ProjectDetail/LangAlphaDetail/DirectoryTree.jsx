import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FolderOpen, FileCode, ChevronRight } from 'lucide-react';

const treeData = [
    {
        name: 'src/', type: 'folder', description: 'Core Python Backend & Agent Engines',
        children: [
            {
                name: 'ptc_agent/', type: 'folder', description: 'The multi-agent cognitive layer',
                children: [
                    { name: 'agent/', type: 'folder', description: 'LangGraph logic (backends, middleware, subagents)' },
                    { name: 'utils/', type: 'folder', description: 'Data formatting and token management' }
                ]
            },
            {
                name: 'server/', type: 'folder', description: 'FastAPI Router & Websocket Backend',
                children: [
                    { name: 'app/', type: 'folder', description: 'API routing (workspaces, threads, chat)' },
                    { name: 'database/', type: 'folder', description: 'PostgreSQL logic' },
                    { name: 'services/', type: 'folder', description: 'SSE streaming & background tasks' },
                ]
            },
            {
                name: 'tools/', type: 'folder', description: 'Specialized financial/utility prompt tools'
            },
            { name: 'llms/', type: 'folder', description: 'Model specific formatting logic' },
            { name: 'data_sources/', type: 'folder', description: 'Client abstractions for external providers' }
        ]
    },
    {
        name: 'mcp_servers/', type: 'folder', description: 'Bulk Data Ingestion Sandbox Servers',
        children: [
            { name: 'yfinance_mcp_server.py', type: 'file', description: 'Options chains, ESG context' },
            { name: 'price_data_mcp_server.py', type: 'file', description: 'Fast historical OHLCV chart plotting' },
            { name: 'fundamentals_mcp_server.py', type: 'file', description: 'Multi-year accounting data retrieval' },
            { name: 'tickertick_mcp_server.py', type: 'file', description: 'Focused ticker news aggregation' }
        ]
    },
    {
        name: 'web/', type: 'folder', description: 'Frontend Workspace UI (React / Vite)',
        children: [
            { name: 'src/pages/', type: 'folder', description: 'ChatAgent, TradingCenter, Dashboard' },
            { name: 'src/components/', type: 'folder', description: 'Reusable UI features' }
        ]
    },
    {
        name: 'libs/', type: 'folder', description: 'Packaged Libraries and Command Line',
        children: [
            { name: 'ptc-agent/', type: 'folder', description: 'Re-packaged iteration of the agent core' },
            { name: 'ptc-cli/', type: 'folder', description: 'Developer terminal access' }
        ]
    },
    {
        name: 'skills/', type: 'folder', description: 'Dynamic Extensibility Plugins',
        children: [
            { name: 'automation/', type: 'folder', description: 'External process integrations' },
            { name: 'creating-financial-models/', type: 'folder', description: 'Deep reasoning paths' },
            { name: 'parsers/', type: 'folder', description: 'docx, pdf, pptx, xlsx intercept protocols' },
            { name: 'user-profile/', type: 'folder', description: 'Long-term preference ingestion' }
        ]
    }
];

const TreeNode = ({ node, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div style={{ marginLeft: level === 0 ? '0' : '24px', marginTop: '8px' }}>
            <motion.div
                onClick={() => hasChildren && setIsOpen(!isOpen)}
                whileHover={{ x: 5, background: 'rgba(255,255,255,0.03)' }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: hasChildren ? 'pointer' : 'default',
                    borderLeft: level > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                }}
            >
                {/* Expand/Collapse Icon */}
                <div style={{ width: '20px', display: 'flex', justifyContent: 'center' }}>
                    {hasChildren ? (
                        <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                            <ChevronRight size={16} color="var(--text-muted)" />
                        </motion.div>
                    ) : (
                        <div style={{ width: '16px' }} /> // Spacer
                    )}
                </div>

                {/* File/Folder Icon */}
                {node.type === 'folder' ? (
                    isOpen ? <FolderOpen size={20} color="var(--accent-gold)" /> : <Folder size={20} color="var(--accent-gold)" />
                ) : (
                    <FileCode size={20} color="#60A5FA" />
                )}

                {/* Text Content */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span style={{
                        fontFamily: 'monospace',
                        fontSize: '1.05rem',
                        color: node.type === 'folder' ? 'var(--text-main)' : '#93C5FD',
                        fontWeight: node.type === 'folder' ? 600 : 400
                    }}>
                        {node.name}
                    </span>
                </div>

                {/* Description (Hidden on mobile, visible on larger screens) */}
                <div style={{ display: 'none', '@media(min-width: 768px)': { display: 'block' }, color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }} className="tree-desc">
                    // {node.description}
                </div>
            </motion.div>

            {/* Children Animation */}
            <AnimatePresence>
                {hasChildren && isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        {node.children.map((child, idx) => (
                            <TreeNode key={idx} node={child} level={level + 1} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const DirectoryTree = () => {
    return (
        <section style={{ padding: '60px 0', width: '100%' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'center' }}>
                Codebase <span style={{ color: 'var(--accent-gold)' }}>Directory</span> Structure
            </h3>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
                A highly modular repository structure with clear hierarchy designed to achieve high readability, long-term maintainability and strong scaling-up potential.
            </p>

            <div className="minimal-panel" style={{
                padding: '30px',
                background: 'var(--bg-alt)',
                overflowX: 'auto',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
            }}>
                {/* CSS injection for responsive desc */}
                <style>{`
                    @media (min-width: 768px) {
                        .tree-desc { display: block !important; }
                    }
                `}</style>

                <div style={{ minWidth: '600px' }}>
                    {treeData.map((node, idx) => (
                        <TreeNode key={idx} node={node} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DirectoryTree;
