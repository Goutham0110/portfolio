"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animation-variants";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

const socials = [
    { label: "GITHUB", href: "https://github.com/Goutham0110" },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/goutham0110/" },
    { label: "ARTICLES", href: "https://www.linkedin.com/in/goutham0110/recent-activity/articles/" },
];

export default function ContactSection() {
    return (
        <section id="contact" className="flex flex-col pt-16 px-4 sm:px-6">
            <HeaderText title="Let's Talk" className="font-mono" />

            <motion.div
                className="flex flex-col gap-8 px-1 sm:px-12 mt-8 sm:mt-16 pb-16 sm:pb-24"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <motion.p variants={fadeUp} className="text-darkbeige text-lg sm:text-2xl w-full md:w-3/5 lg:w-1/2">
                    Have a role, a product, or a gnarly distributed system that needs building?
                    I&apos;m always up for a good conversation.
                </motion.p>
                <motion.div variants={fadeUp}>
                    <a
                        href="https://www.linkedin.com/in/goutham0110/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 sm:gap-4 overflow-hidden rounded-full border border-beige/30 px-6 sm:px-10 py-3 sm:py-4 font-mono text-lg sm:text-3xl font-bold text-beige"
                    >
                        <span className="absolute inset-0 translate-y-full bg-beige transition-transform duration-300 ease-out group-hover:translate-y-0" aria-hidden="true"></span>
                        <span className="relative transition-colors duration-300 group-hover:text-background">MESSAGE ME ON LINKEDIN</span>
                        <span className="relative transition-all duration-300 group-hover:text-background group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
                    </a>
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-x-8 gap-y-2 mt-4">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-sm tracking-widest text-darkbeige transition-colors hover:text-beige"
                        >
                            {social.label} ↗
                        </a>
                    ))}
                </motion.div>
            </motion.div>

            <Divider section={false} />

            <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-8 px-1 sm:px-6 font-mono text-xs sm:text-sm text-neutral-400">
                <p>© {new Date().getFullYear()} GOUTHAM S</p>
                <a href="#home" className="transition-colors hover:text-beige">BACK TO TOP ↑</a>
            </footer>
        </section>
    );
}
