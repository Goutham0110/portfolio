"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animation-variants";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

const projects = [
    {
        number: "(01)",
        title: "Ball Tracking with YOLOv5",
        context: "Robocon 2022 · Team project",
        description: "Automatic ball-tracking bot with aim-and-shoot capability, running on a Raspberry Pi. It detects the white ball in frame and aligns itself to keep the target in shooting range. Built and integrated into the robot we demonstrated at Robocon 2022.",
        tags: ["YOLOv5", "PyTorch", "Raspberry Pi", "Computer Vision"],
        links: [
            { label: "ARTICLE", href: "https://medium.com/@gouthamsaravananr/object-detection-using-yolov5-52d949f7654a" },
        ],
    },
    {
        number: "(02)",
        title: "Semantic Find",
        context: "Personal project",
        description: "Semantic search engine with a Next.js/TypeScript web client backed by a Python inference server.",
        tags: ["Next.js", "TypeScript", "Python"],
        links: [
            { label: "WEB", href: "https://github.com/Goutham0110/semantic-find-web" },
            { label: "SERVER", href: "https://github.com/Goutham0110/semantic-find-server" },
        ],
    },
    {
        number: "(03)",
        title: "Dent and Scratch Detection",
        context: "IIT Madras Student's Hackathon 2022 · Team project",
        description: "Object detection model built on YOLOv7 that detects and classifies dents and cracks in images of cars, returning the count of dents and scratches along with their sizes.",
        tags: ["YOLOv7", "PyTorch", "Object Detection", "Computer Vision"],
        links: [],
    },
    {
        number: "(04)",
        title: "Minesweeper",
        context: "Personal project",
        description: "Classic Minesweeper clone built with React: uncover tiles, dodge mines, clear the board.",
        tags: ["React", "JavaScript"],
        links: [
            { label: "PLAY", href: "https://minesweeper-alo7.onrender.com/" },
            { label: "CODE", href: "https://github.com/Goutham0110/Minesweeper" },
        ],
    },
];

export default function WhatIBuiltSection() {
    return (
        <section id="what-i-built" className="flex flex-col py-16 px-4 sm:px-6">
            <HeaderText title="What I Built" className="font-mono" />

            <motion.div
                className="flex flex-wrap gap-6 px-1 sm:px-6 mt-12 sm:mt-16 pb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {projects.map((project) => (
                    <motion.article
                        key={project.number}
                        className="flex flex-col gap-4 w-full md:w-[calc(50%-0.75rem)] border border-beige/20 rounded-2xl p-6 sm:p-8 text-beige transition-colors duration-200 hover:border-beige/40"
                        variants={fadeUp}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                        <div className="flex items-baseline justify-between gap-4">
                            <p className="text-2xl sm:text-3xl font-black">{project.number}</p>
                            <p className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase text-right">{project.context}</p>
                        </div>
                        <h3 className="font-mono font-bold text-2xl sm:text-3xl">{project.title}</h3>
                        <p className="text-base sm:text-lg text-darkbeige">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto pt-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="font-mono text-xs border border-beige/15 rounded-full px-3 py-1 text-darkbeige">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        {project.links.length > 0 && (
                            <div className="flex gap-6 pt-2">
                                {project.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group font-mono text-sm font-bold tracking-widest text-beige transition-colors hover:text-darkbeige"
                                    >
                                        {link.label} <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </motion.article>
                ))}
            </motion.div>
            <Divider />
        </section>
    );
}
