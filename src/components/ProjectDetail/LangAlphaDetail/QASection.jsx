import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const qaData = [
    {
        question: "Complex financial analysis requires processing massive datasets, like multi-year SEC filings or raw tick data, which quickly exceeds LLM context windows and explodes costs. How did you architect the system to solve this?",
        answer: (
            <>
                <p>Instead of the traditional approach where the agent pulls raw data directly into its context window, Langalpha uses a <strong>Programmatic Tool Calling (PTC)</strong> architecture. When the agent needs to analyze heavy datasets, it actually writes and executes Python code inside a secure and independent cloud sandbox (powered by Daytona). The code processes the massive datasets locally within the sandbox and only returns the final synthesized insights or generated charts back to the LLM.</p>
                <p style={{ marginTop: '10px' }}>This is quite different from the conventional agent paradigm. Instead of bringing the data to the LLM, we bring the LLM's reasoning to the data. This not only bypassed token limits and drastically reduced API costs but also allowed the agent to perform deterministic, highly accurate data crunching that LLMs historically struggle with.</p>
            </>
        )
    },
    {
        question: "AI agents can take minutes to complete complex, multi-step tasks. In a web environment, users frequently refresh pages or drop connections. How did you ensure they don't lose their in-flight agent responses?",
        answer: (
            <>
                <p>This was a major UX challenge. You can't have a user wait 3 minutes for an agent to finish, drop a websocket connection, and lose everything. To solve this, a robust streaming infrastructure using <strong>Server-Sent Events (SSE)</strong> backed by <strong>Redis</strong> and <strong>PostgreSQL</strong> is implemented.</p>
                <p style={{ marginTop: '10px' }}>When the agent streams text chunks, tool calls, or status updates, they aren't just sent to the client. They are fundamentally decoupled. The LangGraph agent checkpoints its state to PostgreSQL, while Redis acts as an event buffer. If the client experiences a network drop or a browser refresh, the frontend automatically reconnects, and the middleware replays the buffered events from Redis seamlessly. The user comes back to the exact state they left, seeing the agent's thought process still streaming in real-time. It makes the system feel incredibly smooth. The frontend also tracks the key information(such as event id) in the SSE stream while parsing events asynchronously so the race conditions won’t cause any trouble.</p>
            </>
        )
    },
    {
        question: "How do you prevent long, complex chains of reasoning from confusing the primary agent or polluting its context?",
        answer: (
            <>
                <p>Single-agent setups tend to suffer from "context drift" when they try to do too many things sequentially. To resolve this, LangAlpha implemented an <strong>Agent Swarm</strong> pattern using LangGraph. The main orchestrator agent has a <code>Task()</code> tool, which allows it to spawn asynchronous, parallel subagents.</p>
                <p style={{ marginTop: '10px' }}>Each subagent gets its own isolated context window and a specific micro-objective. Meanwhile, the main orchestrator doesn't block—it can continue processing other user inputs or wait for the results to synthesize. Because the subagents execute concurrently and are isolated, they stay focused on their tasks without polluting the orchestrator's working memory. It's essentially the microservices pattern applied directly to LLM cognition.</p>
            </>
        )
    },
    {
        question: "With both quick financial lookups and deep data processing required, how did you design the tool ecosystem to balance latency and depth?",
        answer: (
            <>
                <p>It’s all about choosing the right tool for the job. LangAlpha implements <strong>dual-layer tool ecosystem</strong>.</p>
                <p style={{ marginTop: '10px' }}>For frequent, lightweight lookups such as pulling a real-time stock quote or checking market indices, the agent calls built-in <strong>Native Tools</strong>. These perform direct API calls and inject a concise summary straight into the prompt because it’s fast and fits easily in context. They also emit UI artifacts so the user gets immediate visual feedback.</p>
                <p style={{ marginTop: '10px' }}>However, for complex questions such as evaluating moving averages across 5 years of daily OHLCV data, the system uses <strong>MCP (Model Context Protocol) servers</strong> accessed strictly through the PTC sandbox. The agent instinctively learns to use the native layer for speed and conversational flow, and the MCP/sandbox layer for deep quantitative analysis, perfectly balancing latency, cost, and analytical depth.</p>
            </>
        )
    },
    {
        question: "As the agent gains more capabilities, the default prompt and tool descriptions get bloated, slowing the model down and confusing it. How did you maintain a lean system?",
        answer: (
            <>
                <p>I tackled this by introducing a <strong>Middleware Stack</strong> with <strong>Dynamic Skill Loading</strong>. I didn't want a monolithic "god prompt" with 50 different tools.</p>
                <p style={{ marginTop: '10px' }}>Instead, the agent operates with a minimal base set of tools and a meta-tool called <code>LoadSkill</code>. When the agent interprets a user request that requires specialized capabilities (e.g., deep options chain analysis), it dynamically discovers and injects that specific skill toolset into its runtime context on the fly. This keeps the baseline inference incredibly fast and accurate, while allowing the platform to scale out to hundreds of tools indefinitely. It's very similar to lazy loading modules in frontend development or dynamically linking libraries in OS design.</p>
            </>
        )
    }
];

const QAItem = ({ q, index, isOpen, toggleOpen }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
                marginBottom: '15px',
                background: 'var(--bg-alt)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: `1px solid ${isOpen ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)'}`,
                transition: 'border-color 0.3s ease'
            }}
        >
            <button
                onClick={toggleOpen}
                style={{
                    width: '100%',
                    padding: '20px 25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--accent-gold)' : 'var(--text-main)',
                    textAlign: 'left',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    lineHeight: '1.5'
                }}
            >
                <span style={{ paddingRight: '20px' }}>{q.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ flexShrink: 0, color: isOpen ? 'var(--accent-gold)' : 'var(--text-muted)' }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div style={{
                            padding: '0 25px 25px 25px',
                            color: 'var(--text-muted)',
                            fontSize: '0.95rem',
                            lineHeight: '1.6'
                        }}>
                            <div style={{
                                paddingTop: '15px',
                                borderTop: '1px solid rgba(255,255,255,0.05)',
                            }}>
                                {q.answer}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const QASection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section style={{ padding: '60px 0', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                    Engineering <span style={{ color: 'var(--accent-gold)' }}>Q&A</span>
                </h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Deep dive into the technical challenges and architectural decisions behind LangAlpha.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {qaData.map((q, index) => (
                    <QAItem
                        key={index}
                        q={q}
                        index={index}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleOpen(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default QASection;
