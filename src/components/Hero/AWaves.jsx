import React, { useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';

const AWaves = () => {
    const containerRef = useRef(null);
    const svgRef = useRef(null);
    const reqRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !svgRef.current) return;

        const svg = svgRef.current;
        const container = containerRef.current;
        // We create a noise instance
        const noise2D = createNoise2D();

        const mouse = {
            x: -10, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false,
        };

        let bounding = container.getBoundingClientRect();
        let lines = [];
        let paths = [];

        const setSize = () => {
            bounding = container.getBoundingClientRect();
            svg.style.width = `${bounding.width}px`;
            svg.style.height = `${bounding.height}px`;
        };

        const setLines = () => {
            const width = bounding.width;
            const height = bounding.height;

            lines = [];
            paths.forEach(p => p.remove());
            paths = [];

            const xGap = 32;
            const yGap = 32;

            const oWidth = width + 200;
            const oHeight = height + 30;

            const totalLines = Math.ceil(oWidth / xGap);
            const totalPoints = Math.ceil(oHeight / yGap);

            const xStart = (width - xGap * totalLines) / 2;
            const yStart = (height - yGap * totalPoints) / 2;

            for (let i = 0; i <= totalLines; i++) {
                const points = [];
                for (let j = 0; j <= totalPoints; j++) {
                    points.push({
                        x: xStart + xGap * i,
                        y: yStart + yGap * j,
                        wave: { x: 0, y: 0 },
                        cursor: { x: 0, y: 0, vx: 0, vy: 0 },
                    });
                }
                lines.push(points);
            }

            // Create paths for both vertical columns and horizontal rows to form a 3D mesh
            const totalPaths = lines.length + lines[0].length;
            for (let k = 0; k < totalPaths; k++) {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', '#c5a059');
                // Increased line thickness for better visibility as requested
                path.setAttribute('stroke-width', '2');
                path.style.opacity = '0.2'; // Slightly higher base opacity inside the mask

                svg.appendChild(path);
                paths.push(path);
            }
        };

        const updateMousePosition = (x, y) => {
            mouse.x = x - bounding.left;
            mouse.y = y - bounding.top + window.scrollY; // Adjust if scrolled

            if (!mouse.set) {
                mouse.sx = mouse.x;
                mouse.sy = mouse.y;
                mouse.lx = mouse.x;
                mouse.ly = mouse.y;
                mouse.set = true;
            }
        };

        const onResize = () => {
            setSize();
            setLines();
        };

        const onMouseMove = (e) => updateMousePosition(e.pageX, e.pageY);
        const onTouchMove = (e) => {
            const touch = e.touches[0];
            updateMousePosition(touch.clientX, touch.clientY);
        };

        // Attach events
        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', onMouseMove);
        container.addEventListener('touchmove', onTouchMove, { passive: false });

        // Initial setup
        setSize();
        setLines();

        const movePoints = (time) => {
            lines.forEach((points) => {
                points.forEach((p) => {
                    // Slow, flowing cohesive noise creates a rolling terrain
                    const depth = noise2D(
                        p.x * 0.001 - time * 0.00008, // Adjusted time and spatial frequencies for dramatic rolling
                        p.y * 0.001 - time * 0.00008
                    );

                    // 3D perspective displacement: dramatically increased vertical simulation (z) for deeper waves
                    const z = depth * 140;
                    p.wave.x = z * 0.3;
                    p.wave.y = -z;

                    // Mouse effect
                    const dx = p.x - mouse.sx;
                    const dy = p.y - mouse.sy;
                    const d = Math.hypot(dx, dy);
                    const l = Math.max(175, mouse.vs);

                    if (d < l) {
                        const s = 1 - d / l;
                        const f = Math.cos(d * 0.001) * s;
                        p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065;
                        p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065;
                    }

                    p.cursor.vx += (0 - p.cursor.x) * 0.005;
                    p.cursor.vy += (0 - p.cursor.y) * 0.005;
                    p.cursor.vx *= 0.925;
                    p.cursor.vy *= 0.925;
                    p.cursor.x += p.cursor.vx * 2;
                    p.cursor.y += p.cursor.vy * 2;
                    p.cursor.x = Math.min(100, Math.max(-100, p.cursor.x));
                    p.cursor.y = Math.min(100, Math.max(-100, p.cursor.y));
                });
            });
        };

        const moved = (point, withCursorForce = true) => {
            const x = point.x + point.wave.x + (withCursorForce ? point.cursor.x : 0);
            const y = point.y + point.wave.y + (withCursorForce ? point.cursor.y : 0);
            return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
        };

        const drawLines = () => {
            let pathIdx = 0;

            // Draw vertical curves
            lines.forEach((points) => {
                let startP = moved(points[0], false);
                let d = `M ${startP.x} ${startP.y} `;

                points.forEach((pt, pIndex) => {
                    const isLast = pIndex === points.length - 1;
                    const p1 = moved(pt, !isLast);
                    const p2 = moved(
                        points[pIndex + 1] || points[points.length - 1],
                        !isLast
                    );
                    d += `Q ${p1.x} ${p1.y} ${(p1.x + p2.x) / 2} ${(p1.y + p2.y) / 2} `;
                });
                paths[pathIdx++].setAttribute('d', d);
            });

            // Draw horizontal curves to create a cohesive 3D mesh
            const numRows = lines[0].length;
            for (let j = 0; j < numRows; j++) {
                let startP = moved(lines[0][j], false);
                let d = `M ${startP.x} ${startP.y} `;

                for (let i = 0; i < lines.length; i++) {
                    const isLast = i === lines.length - 1;
                    const p1 = moved(lines[i][j], !isLast);
                    const p2 = moved(
                        lines[i + 1]?.[j] || lines[lines.length - 1][j],
                        !isLast
                    );
                    d += `Q ${p1.x} ${p1.y} ${(p1.x + p2.x) / 2} ${(p1.y + p2.y) / 2} `;
                }
                paths[pathIdx++].setAttribute('d', d);
            }
        };

        const tick = (time) => {
            // Smooth mouse tracking
            mouse.sx += (mouse.x - mouse.sx) * 0.1;
            mouse.sy += (mouse.y - mouse.sy) * 0.1;

            const dx = mouse.x - mouse.lx;
            const dy = mouse.y - mouse.ly;
            const d = Math.hypot(dx, dy);

            mouse.v = d;
            mouse.vs += (d - mouse.vs) * 0.1;
            mouse.vs = Math.min(100, mouse.vs);

            mouse.lx = mouse.x;
            mouse.ly = mouse.y;
            mouse.a = Math.atan2(dy, dx);

            // Update CSS custom properties for the floating dot
            container.style.setProperty('--x', `${mouse.sx}px`);
            container.style.setProperty('--y', `${mouse.sy}px`);

            movePoints(time);
            drawLines();

            reqRef.current = requestAnimationFrame(tick);
        };

        // Start animation loop
        reqRef.current = requestAnimationFrame(tick);

        // Cleanup
        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('touchmove', onTouchMove);
            cancelAnimationFrame(reqRef.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
                zIndex: 0,
                WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
                maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
                '--x': '-0.5rem',
                '--y': '50%'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '6px',
                    background: 'var(--text-main)',
                    borderRadius: '50%',
                    transform: 'translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)',
                    willChange: 'transform',
                    pointerEvents: 'none',
                    zIndex: 2
                }}
            />
            <svg ref={svgRef} style={{ display: 'block', width: '100%', height: '100%', pointerEvents: 'none' }}></svg>
        </div>
    );
};

export default AWaves;
