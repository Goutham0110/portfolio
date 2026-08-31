"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainerFast, staggerContainerSlow } from "@/lib/animation-variants";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

const skillGroups = [
    {
        number: "(01)",
        title: "Languages",
        items: ["Javascript", "Typescript", "Python", "Go Lang", "C", "C++"],
    },
    {
        number: "(02)",
        title: "Frameworks / Libraries / Runtimes",
        items: ["NodeJS", "ExpressJS", "React", "NextJS", "FastAPI", "Flask"],
    },
    {
        number: "(03)",
        title: "Real-Time Systems",
        items: ["WebSockets", "Rest API", "gRPC", "GraphQL", "Web RTC"],
    },
    {
        number: "(04)",
        title: "Databases / Queues",
        items: ["Postgres", "MySQL", "MongoDB", "ElasticSearch", "Redis", "Kafka", "BullMQ"],
    },
    {
        number: "(05)",
        title: "DevOps",
        items: ["AWS", "Docker", "NGINX", "Git", "GitHub Actions"],
    },
    {
        number: "(06)",
        title: "AI / LLM",
        items: ["Custom Agents/Plugins", "Weaviate", "QWEN 3.5", "OpenAI API", "Anthropic API"],
    },
];

const certifications = [
    {
        number: "(01)",
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.AI",
        url: "https://learn.deeplearning.ai/certificates/e5eccc3b-228f-43fb-9ef7-27808400eb55",
    },
    {
        number: "(02)",
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        url: "https://learn.deeplearning.ai/certificates/5a7078bd-0a7e-4ea7-8f29-8b7dfdb9bed5",
    },
];

export default function WhatILearnedSection() {
    return (
        <section id="what-i-learned" className="flex flex-col py-16 px-4 sm:px-6">
            <div className="flex flex-col px-1 sm:px-6">
                <HeaderText title="What I Learned" className="font-mono" />

                <motion.div
                    className="flex flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-16 text-beige"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillGroups.map((group) => (
                        <motion.div
                            key={group.title}
                            variants={fadeUp}
                            className="flex flex-col gap-5 basis-full md:basis-[calc(50%-0.75rem)] grow bg-[#111110] border border-beige/20 rounded-2xl p-5 sm:p-8 transition-colors duration-300 hover:bg-[#1a1a18]"
                        >
                            <div className="flex items-baseline gap-3 sm:gap-4">
                                <p className="text-neutral-400 text-sm sm:text-base">{group.number}</p>
                                <h3 className="font-mono font-bold text-lg sm:text-xl">{group.title}</h3>
                            </div>
                            <motion.div
                                className="flex flex-wrap gap-2 sm:gap-2.5"
                                variants={staggerContainerSlow}
                            >
                                {group.items.map((item) => (
                                    <motion.span
                                        key={item}
                                        variants={fadeUp}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="cursor-default border border-beige/20 rounded-full px-3.5 py-1.5 text-sm sm:text-base text-darkbeige transition-colors duration-200 hover:bg-beige hover:text-[#111110] hover:border-beige"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-col mt-12 sm:mt-16 text-beige"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h3
                        variants={fadeUp}
                        className="font-mono font-bold text-sm sm:text-base tracking-widest text-neutral-400 uppercase"
                    >
                        Certifications
                    </motion.h3>

                    <div className="flex flex-wrap gap-4 sm:gap-6 mt-5 sm:mt-6">
                        {certifications.map((cert) => (
                            <motion.a
                                key={cert.title}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group flex flex-col gap-4 basis-full md:basis-[calc(50%-0.75rem)] grow bg-[#111110] border border-beige/20 rounded-2xl p-5 sm:p-8 transition-colors duration-300 hover:bg-[#1a1a18] hover:border-beige/40"
                            >
                                <div className="flex items-baseline gap-3 sm:gap-4">
                                    <p className="text-neutral-400 text-sm sm:text-base">{cert.number}</p>
                                    <h4 className="font-mono font-bold text-lg sm:text-xl">{cert.title}</h4>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <p className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase">
                                        {cert.issuer}
                                    </p>
                                    <span className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-widest text-darkbeige transition-colors duration-200 group-hover:text-beige">
                                        Open
                                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                                        </svg>
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
            <Divider />
        </section>
    );
}
