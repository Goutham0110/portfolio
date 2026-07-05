"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin scroll-linked progress bar pinned to the top of article pages. */
export default function ReadingProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.001 });

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-darkbeige to-beige"
            style={{ scaleX }}
        />
    );
}
