"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const links = [
    { href: "#what-i-do", label: "SERVICES" },
    { href: "#what-i-learned", label: "SKILLS" },
    { href: "#what-i-did", label: "EXPERIENCE" },
    { href: "#what-i-built", label: "PROJECTS" },
    { href: "#contact", label: "CONTACT" },
];

const sectionIds = links.map((link) => link.href.slice(1));

export default function Navbar() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);

    useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 400));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                }
            },
            // Narrow horizontal band around the viewport's upper middle;
            // the section crossing it is the "active" one.
            { rootMargin: "-40% 0px -55% 0px" }
        );
        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.header
                    initial={{ y: -64, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -64, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-0 inset-x-0 z-50 border-b border-beige/10 bg-background/80 backdrop-blur-md"
                >
                    <nav aria-label="Section navigation" className="flex items-center justify-between px-3 sm:px-8 py-3">
                        <a href="#home" className="hidden sm:block font-mono font-bold text-beige text-lg tracking-wide whitespace-nowrap">G /</a>
                        <div className="flex flex-1 sm:flex-initial items-center justify-between sm:justify-end gap-2 sm:gap-6">
                            {links.map((link) => {
                                const isActive = activeId === link.href.slice(1);
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className={`relative font-mono text-[10px] sm:text-xs tracking-wider sm:tracking-widest whitespace-nowrap transition-colors hover:text-beige after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-darkbeige after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? "text-beige" : "text-darkbeige"}`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-active"
                                                className="absolute left-0 right-0 -bottom-1 h-px bg-beige"
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            />
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                    </nav>
                </motion.header>
            )}
        </AnimatePresence>
    );
}
