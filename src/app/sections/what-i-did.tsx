"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animation-variants";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

const jobs = [
    {
        id: 1,
        number: "(01)",
        title: "Software Development Engineer I",
        company: "Rapid Acceleration Partners, Chennai",
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
    {
        id: 3,
        number: "(03)",
        title: "Full Stack Engineer Intern",
        company: "VisAI Labs, Chennai",
        points: [
            "Developed a user management system with role-based access control and OAuth2.0, automated email notifications to streamline onboarding.",
            "Built a draggable virtual keyboard with Redux Toolkit for efficient state management, reducing load time by 50%.",
            "Enforced end-to-end data encryption and secure key exchange protocols, including client-side decryption, ensuring robust data protection and compliance with security best practices.",
        ],
    },
    {
        id: 4,
        number: "(04)",
        title: "Artificial Intelligence Intern",
        company: "EduTech India, Chennai",
        points: [
            "Integrated AI algorithms in Robotics to evaluate product features and limitations.",
            "Assisted in product demonstration for 5 robotic products at Universities in Chennai.",
            "Received special appreciation from Pitsco Education for our work with the TETRIX Robotics kit.",
        ],
    },
];

export default function WhatIDidSection() {
    const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({});

    const toggleSection = (sectionId: number) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId],
        }));
    };

    return (
        <section id="what-i-did" className="min-h-screen flex flex-col py-16 px-6">
            <motion.div
                variants={fadeUp}
                whileInView="visible"
                viewport={{ once: true }}
            >
                <HeaderText title="What I Did" className="font-mono" />
            </motion.div>

            <motion.div
                className="flex flex-col px-6 mt-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {jobs.map((job) => (
                    <motion.div
                        key={job.id}
                        className="flex flex-col px-6"
                        variants={fadeUp}
                    >
                        <div className="flex gap-12 mx-8 mt-8 justify-between text-beige">
                            <p className="flex text-5xl font-black w-auto">{job.number}</p>
                            <div className="flex flex-col gap-12 text-xl w-5/9">
                                <motion.div
                                    className="cursor-pointer select-none"
                                    onClick={() => toggleSection(job.id)}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h1 className="font-mono font-bold text-5xl">{job.title}</h1>
                                            <p className="text-darkbeige text-2xl mt-4">{job.company}</p>
                                        </div>
                                        <motion.svg
                                            className="w-8 h-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            animate={{ rotate: expandedSections[job.id] ? 180 : 0 }}
                                            transition={{ rotate: { duration: 0.3 } }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </motion.svg>
                                    </div>
                                </motion.div>

                                <AnimatePresence initial={false}>
                                    {expandedSections[job.id] && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            style={{ overflow: "hidden" }}
                                            className="flex flex-col gap-4"
                                        >
                                            {job.points.map((point, i) => (
                                                <div key={i}>
                                                    <div className="flex gap-4 items-start">
                                                        <p className="text-neutral-400 text-md mt-1">({String(i + 1).padStart(2, "0")})</p>
                                                        <p className="w-3/4 text-lg text-darkbeige">{point}</p>
                                                    </div>
                                                    <Divider section={false} />
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <Divider />
        </section>
    );
}
