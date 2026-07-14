"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeOutSoft, fadeUp, staggerContainer } from "@/lib/animation-variants";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

const jobs = [
    {
        id: 1,
        number: "(01)",
        title: "Software Development Engineer I",
        company: "Rapid Acceleration Partners, Chennai",
        summary:
            "I lead two enterprise products here. Along the way I built an entity-matching platform that untangles 40M+ records in real time, the RBAC and workflow layer everything else sits on, and the AI tooling the rest of the engineering division now works with.",
        points: [
            "I lead two enterprise products, from architecture through to what actually ships. Somewhere in there I got tired of everyone using Claude Code differently, so I built a shared toolkit for it: custom agents, a vetted skill library, hooks, rules, multi-agent setups. Better code, a much smaller token bill, and the rest of the engineering division picked it up.",
            "Entity matching was the hard one. Someone uploads a 25K-record file and we have to work out which of our 40M+ records each row already is. Kafka moves the work, custom OpenSearch analyzers do the fuzzy part, the matching strategies are configurable, and merges happen on their own. It lands at 98% precision, in real time.",
            "Rather than rebuild the boring parts for every product, I turned them into a platform layer: hierarchical RBAC, async job orchestration, notifications that reach people in-app and over email. Now a new product gets authorization and long-running workflows for free.",
            "I built a quiz pipeline on Grok 4.3 that reads a movie transcript and comes back with 1,000 to 2,500 questions that are actually about the movie. Transcript processing, prompt orchestration, validation, structured output, all one automated run. It has to hold up across 100K+ media assets, so nothing manual survives.",
            "I also built an enterprise MCP server so AI agents can reach our internal business capabilities directly, without anyone hand-rolling a risky integration between the LLM side and the systems that matter.",
            "And a real-time messaging platform: Kafka for events between microservices, WebSockets so messages land instantly. Media sharing, moderation tools for admins, and an architecture that holds up at 100K users.",
        ],
    },
    {
        id: 2,
        number: "(02)",
        title: "Full Stack Engineer",
        company: "VisAI Labs, Chennai",
        summary:
            "I started as an intern here and stayed. Webhooks that survive a bad day, a 4K transcoding pipeline, OIDC across two apps, and a lot of time spent making the infrastructure bill and the database stop hurting.",
        roles: [
            {
                title: "Full Stack Engineer Intern",
                points: [
                    "My first real system: user management with role-based access control and OAuth2.0, plus automated emails so onboarding someone stopped being a manual chore.",
                    "Built a draggable virtual keyboard, kept the state honest with Redux Toolkit, and got load time down by half.",
                    "Locked the data down end to end, encrypted in transit, secure key exchange, decryption on the client, so nothing sensitive sat anywhere it shouldn't.",
                ],
            },
            {
                title: "Full Stack Engineer",
                points: [
                    "Customer endpoints go down. So I built webhook delivery on Lambda, SQS, and S3 with retries baked in, and their outage stopped being our data loss.",
                    "4K video is unkind to a single machine. FFmpeg, BullMQ on Redis, and ECS tasks spread transcoding across many, and a failure mid-job no longer meant starting over.",
                    "Built a dynamic form builder for a QC-auditing platform: versioned templates, media uploads straight to Cloudflare R2, and workflows that work on a phone, because inspections happen in the field, not at a desk.",
                    "Stood up a central identity provider and moved two production apps onto OIDC, so one person meant one identity instead of two accounts and a spreadsheet.",
                    "Made the platform auditable enough for enterprise: field-level change tracking, Redis rate limiting, password history, and SIEM integration, so every change had a trail behind it.",
                    "Swapped RDS Proxy for SQS-based queuing. Infra cost dropped 30% and the database finally scaled with us instead of against us, about 40% better under load.",
                    "Chased down the queries that were quietly eating the database, added the indexes they were missing, and took IOPS from 1100 to 400. Everything got faster.",
                    "Wired up Mixpanel so we could see what people actually used, and let that decide what we fixed next instead of guessing.",
                ],
            },
        ],
        points: [
            "My first real system: user management with role-based access control and OAuth2.0, plus automated emails so onboarding someone stopped being a manual chore.",
            "Built a draggable virtual keyboard, kept the state honest with Redux Toolkit, and got load time down by half.",
            "Locked the data down end to end, encrypted in transit, secure key exchange, decryption on the client, so nothing sensitive sat anywhere it shouldn't.",
            "Customer endpoints go down. So I built webhook delivery on Lambda, SQS, and S3 with retries baked in, and their outage stopped being our data loss.",
            "4K video is unkind to a single machine. FFmpeg, BullMQ on Redis, and ECS tasks spread transcoding across many, and a failure mid-job no longer meant starting over.",
            "Built a dynamic form builder for a QC-auditing platform: versioned templates, media uploads straight to Cloudflare R2, and workflows that work on a phone, because inspections happen in the field, not at a desk.",
            "Stood up a central identity provider and moved two production apps onto OIDC, so one person meant one identity instead of two accounts and a spreadsheet.",
            "Made the platform auditable enough for enterprise: field-level change tracking, Redis rate limiting, password history, and SIEM integration, so every change had a trail behind it.",
            "Swapped RDS Proxy for SQS-based queuing. Infra cost dropped 30% and the database finally scaled with us instead of against us, about 40% better under load.",
            "Chased down the queries that were quietly eating the database, added the indexes they were missing, and took IOPS from 1100 to 400. Everything got faster.",
            "Wired up Mixpanel so we could see what people actually used, and let that decide what we fixed next instead of guessing.",
        ],
    },
    {
        id: 3,
        number: "(03)",
        title: "Artificial Intelligence Intern",
        company: "EduTech India, Chennai",
        summary:
            "Where it started. I ran AI algorithms on real robots, built the demos that proved they worked, and learned that a product only tells you its limits once you push it past them.",
        points: [
            "Got AI algorithms running on robots in real time, where the model has to keep up with the world instead of waiting for it.",
            "Spent a lot of time experimenting with the software and the hardware, mostly to find out where each product quietly stopped working. That's the useful part.",
            "Wrote the programs behind our proof-of-concept demos, the ones you build to show an idea is real before anyone commits to it.",
            "Also did the writing: creative briefs and technical presentations, translating what the robots did into something a room full of people could follow.",
            "Pitsco Education sent us a special note of appreciation for the work we did with their TETRIX Robotics kit.",
        ],
    },
];

export default function WhatIDidSection() {
    const [activeId, setActiveId] = useState<number | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const activeJob = jobs.find((job) => job.id === activeId);

    useEffect(() => {
        if (activeId === null) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setActiveId(null);
        };
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [activeId]);

    return (
        <section id="what-i-did" className="flex flex-col min-h-svh py-16 px-4 sm:px-6">
            <HeaderText title="What I Did" className="font-mono" />

            <motion.div
                className="flex flex-1 items-stretch gap-5 sm:gap-6 mt-10 sm:mt-12 pt-2 pb-8 -mx-4 px-5 sm:-mx-6 sm:px-12 overflow-x-auto snap-x snap-mandatory scroll-pl-5 sm:scroll-pl-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {jobs.map((job) => (
                    <motion.article
                        key={job.id}
                        layoutId={`job-card-${job.id}`}
                        style={{ borderRadius: 16 }}
                        className="relative flex flex-col gap-4 sm:gap-5 shrink-0 snap-start w-[82vw] sm:w-[480px] lg:w-[560px] xl:w-[620px] border border-beige/15 bg-beige/[0.04] p-6 sm:p-10 text-beige cursor-pointer transition-colors duration-200 hover:border-beige/40 hover:bg-beige/[0.07]"
                        variants={fadeUp}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                        <div className="flex items-baseline justify-between gap-4">
                            <p className="text-2xl sm:text-3xl font-black">{job.number}</p>
                            <p className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase text-right">{job.company}</p>
                        </div>
                        <h3 className="font-mono font-bold text-2xl sm:text-3xl lg:text-4xl">
                            {/* Stretched to cover the card so the whole card opens the dialog. */}
                            <button
                                type="button"
                                onClick={() => setActiveId(job.id)}
                                aria-haspopup="dialog"
                                className="text-left cursor-pointer after:content-[''] after:absolute after:inset-0 after:rounded-2xl"
                            >
                                {job.title}
                            </button>
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl text-darkbeige">{job.summary}</p>
                        <div className="flex items-center justify-between gap-4 mt-auto pt-2">
                            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest">
                                READ MORE <span aria-hidden="true">+</span>
                            </span>
                            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase">
                                {job.points.length} highlights
                            </span>
                        </div>
                    </motion.article>
                ))}
            </motion.div>

            <Divider />

            <AnimatePresence>
                {activeJob && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setActiveId(null)}
                    >
                        <motion.div
                            layoutId={`job-card-${activeJob.id}`}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="what-i-did-dialog-title"
                            className="flex flex-col w-full max-w-5xl max-h-[88vh] overflow-hidden border border-beige/20 bg-background text-beige"
                            style={{ borderRadius: 16 }}
                            transition={{ duration: 0.45, ease: easeOutSoft }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <motion.div
                                className="flex flex-col min-h-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.25 } }}
                                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                            >
                                <div className="shrink-0 px-6 sm:px-12 lg:px-14 pt-6 sm:pt-10 pb-5 sm:pb-6 border-b border-beige/15">
                                    <div className="flex items-start justify-between gap-4">
                                        <p className="text-2xl sm:text-3xl font-black">{activeJob.number}</p>
                                        <button
                                            ref={closeButtonRef}
                                            type="button"
                                            onClick={() => setActiveId(null)}
                                            aria-label="Close details"
                                            className="cursor-pointer rounded-full border border-beige/20 p-2 text-darkbeige transition-colors hover:border-beige/50 hover:text-beige"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h3 id="what-i-did-dialog-title" className="font-mono font-bold text-2xl sm:text-4xl mt-2">{activeJob.title}</h3>
                                    <p className="font-mono text-xs sm:text-sm tracking-widest text-neutral-400 uppercase mt-3">{activeJob.company}</p>
                                </div>
                                <div className="overflow-y-auto overscroll-contain [scrollbar-width:thin] px-6 sm:px-12 lg:px-14 py-6 sm:py-8">
                                    <div className="flex flex-col gap-4">
                                        {activeJob.roles ? (
                                            (() => {
                                                const roles = activeJob.roles;
                                                let pointIndex = 0;
                                                return roles.map((role, roleIdx) => (
                                                    <div key={role.title} className="flex flex-col gap-4">
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 8 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1 + pointIndex * 0.05, duration: 0.3, ease: "easeOut" }}
                                                            className={`flex items-center gap-3 sm:gap-4 ${roleIdx > 0 ? "mt-6 sm:mt-8" : ""}`}
                                                        >
                                                            <div className="flex-1 border-t border-beige/25" aria-hidden="true" />
                                                            <p className="shrink-0 rounded-full border border-beige/30 bg-beige/[0.07] px-4 py-1.5 font-mono text-[10px] sm:text-sm font-bold tracking-widest uppercase text-beige">{role.title}</p>
                                                            <div className="flex-1 border-t border-beige/25" aria-hidden="true" />
                                                        </motion.div>
                                                        {role.points.map((point, pointIdxInRole) => {
                                                            const i = pointIndex++;
                                                            const beforeNextRole = pointIdxInRole === role.points.length - 1 && roleIdx < roles.length - 1;
                                                            return (
                                                                <motion.div
                                                                    key={i}
                                                                    initial={{ opacity: 0, y: 8 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.15 + i * 0.05, duration: 0.3, ease: "easeOut" }}
                                                                >
                                                                    <div className="flex gap-3 sm:gap-4 items-start">
                                                                        <p className="text-neutral-400 text-sm mt-1">({String(i + 1).padStart(2, "0")})</p>
                                                                        <p className="text-base sm:text-lg text-darkbeige">{point}</p>
                                                                    </div>
                                                                    {!beforeNextRole && <Divider section={false} />}
                                                                </motion.div>
                                                            );
                                                        })}
                                                    </div>
                                                ));
                                            })()
                                        ) : (
                                            activeJob.points.map((point, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.15 + i * 0.05, duration: 0.3, ease: "easeOut" }}
                                                >
                                                    <div className="flex gap-3 sm:gap-4 items-start">
                                                        <p className="text-neutral-400 text-sm mt-1">({String(i + 1).padStart(2, "0")})</p>
                                                        <p className="text-base sm:text-lg text-darkbeige">{point}</p>
                                                    </div>
                                                    <Divider section={false} />
                                                </motion.div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
