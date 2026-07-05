"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animation-variants";

const socials = [
    { label: "GITHUB", href: "https://github.com/Goutham0110", internal: false },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/goutham0110/", internal: false },
    { label: "ARTICLES", href: "/articles", internal: true },
];

export default function LandingSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

    return (
        <section ref={ref} id="home" className="min-h-dvh flex flex-col py-6 sm:py-10 px-4 sm:px-6 bg-beige text-background rounded-b-4xl">
            <motion.div
                className="flex justify-end pt-2 sm:pt-6"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex flex-wrap justify-end gap-2 sm:gap-3 m-2 sm:m-4">
                    {socials.map((social) => {
                        const className =
                            "group flex items-center gap-2 sm:gap-4 rounded-full border border-background/30 px-4 py-1.5 sm:px-8 sm:py-2 transition-colors hover:bg-background hover:text-beige";
                        const inner = (
                            <>
                                <span className="font-mono text-sm sm:text-xl">{social.label}</span>
                                <span className="text-xl sm:text-3xl font-black transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
                                    ↗
                                </span>
                            </>
                        );
                        return social.internal ? (
                            <Link key={social.label} href={social.href} className={className}>
                                {inner}
                            </Link>
                        ) : (
                            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={className}>
                                {inner}
                            </a>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col gap-4 sm:gap-8 mt-16 sm:mt-24 lg:mt-32 pl-1 sm:pl-10 lg:pl-18"
                style={{ y: heroY, opacity: heroOpacity }}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.p variants={fadeUp} className="font-mono text-xs sm:text-sm font-medium tracking-[0.3em] text-background/70">
                    FULL-STACK ENGINEER · CHENNAI, INDIA
                </motion.p>
                <motion.h1 variants={fadeUp} className="font-mono font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                    GOUTHAM /
                </motion.h1>
                <motion.p variants={fadeUp} className="font-mono text-xl sm:text-2xl lg:text-3xl w-full md:w-3/5 lg:w-1/2 mt-4 sm:mt-8">
                    Harmonizing digital experiences to bring systems and applications to life like a symphony{" "}
                    <motion.span
                        className="inline-block"
                        aria-hidden="true"
                        animate={{ x: [0, 6, 0], y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                    >↘</motion.span>
                </motion.p>
            </motion.div>
        </section>
    );
}
