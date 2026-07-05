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
            "End-to-end ownership across multiple products: a distributed entity-matching engine deduplicating 40M+ records in real time, data-heavy frontends, and the RBAC and workflow layer underneath them.",
        points: [
            "Built and evolved end-to-end systems across multiple products, architecting core services, data models, and APIs, and taking them from concept to production-scale deployment based on real-world requirements.",
            "Architected and built a distributed entity matching system for large-scale record deduplication, processing 25k-record file uploads and scaling to a total of 40M+ records, Kafka-based pipelines, custom OpenSearch analyzers, configurable multi-field matching, and MongoDB with automated merge workflows achieving 98% match precision in real-time.",
            "Built data-intensive frontend features with well-defined state management, including dynamic tables, advanced filters, and interactive analytics dashboards with drill-down navigation, tightly coupled to backend APIs.",
            "Improved system reliability and scalability by restructuring database schemas, resulting in a ~40% reduction in database size and improved query performance.",
            "Designed and implemented hierarchical RBAC controlling data access and actions, along with asynchronous job pipelines for admin reporting and follow-up workflows, and multi-channel (in-app and email) notifications, forming a core access and workflow layer across multiple products.",
        ],
    },
    {
        id: 2,
        number: "(02)",
        title: "Full Stack Engineer",
        company: "VisAI Labs, Chennai",
        summary:
            "Shipped resilient AWS-backed systems (webhook delivery, 4K video transcoding, OIDC auth) while cutting infrastructure costs by 30% and database IOPS by more than half; started as an intern building RBAC, OAuth2.0, and end-to-end encrypted data flows.",
        roles: [
            {
                title: "Full Stack Engineer Intern",
                points: [
                    "Developed a user management system with role-based access control and OAuth2.0, automated email notifications to streamline onboarding.",
                    "Built a draggable virtual keyboard with Redux Toolkit for efficient state management, reducing load time by 50%.",
                    "Enforced end-to-end data encryption and secure key exchange protocols, including client-side decryption, ensuring robust data protection and compliance with security best practices.",
                ],
            },
            {
                title: "Full Stack Engineer",
                points: [
                    "Designed and deployed a resilient webhook delivery system using AWS Lambda, SQS, and AWS S3, with built-in retry logic to ensure reliable data delivery to customer endpoints.",
                    "Designed a scalable 4K video transcoding pipeline using FFmpeg, BullMQ (Redis), and AWS ECS tasks, enabling high-throughput, distributed processing with robust fault tolerance.",
                    "Developed a dynamic form builder for a QC-auditing platform, supporting template versioning, real-time media uploads via Cloudflare R2, and mobile-friendly inspection workflows.",
                    "Implemented OpenID Connect (OIDC) authentication by setting up a centralized identity provider and integrated two production-grade applications for unified user identity management.",
                    "Enforced enterprise-grade audit and security systems, including field-level change tracking, Redis-based rate limiting, password history enforcement, and SIEM integration using Redis.",
                    "Replaced RDS Proxy with SQS-based message queuing, decreasing infrastructure costs by 30% and improving database scalability and performance by 40%.",
                    "Optimized database performance by identifying heavy queries, adding strategic indexes, and reducing IOPS from 1100 to 400, leading to faster execution and lower latency.",
                    "Integrated Mixpanel to monitor feature usage and user behavior, enabling data-driven improvements to UX.",
                ],
            },
        ],
        points: [
            "Developed a user management system with role-based access control and OAuth2.0, automated email notifications to streamline onboarding.",
            "Built a draggable virtual keyboard with Redux Toolkit for efficient state management, reducing load time by 50%.",
            "Enforced end-to-end data encryption and secure key exchange protocols, including client-side decryption, ensuring robust data protection and compliance with security best practices.",
            "Designed and deployed a resilient webhook delivery system using AWS Lambda, SQS, and AWS S3, with built-in retry logic to ensure reliable data delivery to customer endpoints.",
            "Designed a scalable 4K video transcoding pipeline using FFmpeg, BullMQ (Redis), and AWS ECS tasks, enabling high-throughput, distributed processing with robust fault tolerance.",
            "Developed a dynamic form builder for a QC-auditing platform, supporting template versioning, real-time media uploads via Cloudflare R2, and mobile-friendly inspection workflows.",
            "Implemented OpenID Connect (OIDC) authentication by setting up a centralized identity provider and integrated two production-grade applications for unified user identity management.",
            "Enforced enterprise-grade audit and security systems, including field-level change tracking, Redis-based rate limiting, password history enforcement, and SIEM integration using Redis.",
            "Replaced RDS Proxy with SQS-based message queuing, decreasing infrastructure costs by 30% and improving database scalability and performance by 40%.",
            "Optimized database performance by identifying heavy queries, adding strategic indexes, and reducing IOPS from 1100 to 400, leading to faster execution and lower latency.",
            "Integrated Mixpanel to monitor feature usage and user behavior, enabling data-driven improvements to UX.",
        ],
    },
    {
        id: 3,
        number: "(03)",
        title: "Artificial Intelligence Intern",
        company: "EduTech India, Chennai",
        summary:
            "Integrated AI algorithms in robotics and demonstrated 5 robotic products at universities across Chennai, with a special nod from Pitsco Education.",
        points: [
            "Integrated AI algorithms in Robotics to evaluate product features and limitations.",
            "Assisted in product demonstration for 5 robotic products at Universities in Chennai.",
            "Received special appreciation from Pitsco Education for our work with the TETRIX Robotics kit.",
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
