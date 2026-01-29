"use client";

import { useState } from "react";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

export default function WhatIDidSection() {
    const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({
        1: false,
        2: false,
        3: false,
        4: false,
    });

    const toggleSection = (sectionId: number) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    return (
        <section id="what-i-did" className="min-h-screen flex flex-col py-16 px-6">
            <HeaderText title="What I Did" className="font-mono" />
            <div className="flex flex-col px-6 mt-8">
                <div className="flex gap-12 mx-8 mt-8 justify-between text-beige">
                    <p className="flex text-5xl font-black w-auto">
                        (01)
                    </p>
                    <div className="flex flex-col gap-12 text-xl w-5/9">
                        <div
                            className="cursor-pointer select-none hover:opacity-80 transition-opacity"
                            onClick={() => toggleSection(1)}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-mono font-bold text-5xl">Software Development Engineer I</h1>
                                    <p className="text-darkbeige text-2xl mt-4">Rapid Acceleration Partners, Chennai</p>
                                </div>
                                <svg
                                    className={`w-8 h-8 transition-transform duration-300 ${expandedSections[1] ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${expandedSections[1] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(01)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Built and evolved end-to-end systems across multiple products, architecting core services, data models, and APIs, and taking them from concept to production-scale deployment based on real-world requirements.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(02)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Architected and built a distributed entity matching system for large-scale record deduplication, processing 25k-record file uploads and scaling to a total of 40M+ records, Kafka-based pipelines, custom OpenSearch analyzers, configurable multi-field matching, and MongoDB with automated merge workflows achieving 98% match precision in real-time.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(03)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Built data-intensive frontend features with well-defined state management, including dynamic tables, advanced filters, and interactive analytics dashboards with drill-down navigation, tightly coupled to backend APIs.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(04)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Improved system reliability and scalability by restructuring database schemas, resulting in a ~40% reduction in database size and improved query performance.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(05)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Designed and implemented hierarchical RBAC controlling data access and actions, along with asynchronous job pipelines for admin reporting and follow-up workflows, and multi-channel (in-app and email) notifications, forming a core access and workflow layer across multiple products.</p>
                            </div>
                            <Divider section={false} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-6">
                <div className="flex gap-12 mx-8 mt-8 justify-between text-beige">
                    <p className="flex text-5xl font-black w-auto">
                        (02)
                    </p>
                    <div className="flex flex-col gap-12 text-xl w-5/9">
                        <div
                            className="cursor-pointer select-none hover:opacity-80 transition-opacity"
                            onClick={() => toggleSection(2)}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-mono font-bold text-5xl">Full Stack Engineer</h1>
                                    <p className="text-darkbeige text-2xl mt-4">VisAI Labs, Chennai</p>
                                </div>
                                <svg
                                    className={`w-8 h-8 transition-transform duration-300 ${expandedSections[2] ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${expandedSections[2] ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(01)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Designed and deployed a resilient webhook delivery system using AWS Lambda, SQS, and AWS S3, with built-in retry logic to ensure reliable data delivery to customer endpoints.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(02)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Designed a scalable 4K video transcoding pipeline using FFmpeg, BullMQ (Redis), and AWS ECS tasks, enabling high-throughput, distributed processing with robust fault tolerance.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(03)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Developed a dynamic form builder for a QC-auditing platform, supporting template versioning, real-time media uploads via Cloudflare R2, and mobile-friendly inspection workflows.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(04)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Implemented OpenID Connect (OIDC) authentication by setting up a centralized identity provider and integrated two production-grade applications for unified user identity management.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(05)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Enforced enterprise-grade audit and security systems, including field-level change tracking, Redis-based rate limiting, password history enforcement, and SIEM integration using Redis.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(06)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Replaced RDS Proxy with SQS-based message queuing, decreasing infrastructure costs by 30% and improving database scalability and performance by 40%.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(07)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Optimized database performance by identifying heavy queries, adding strategic indexes, and reducing IOPS from 1100 to 400, leading to faster execution and lower latency.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(08)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Integrated Mixpanel to monitor feature usage and user behavior, enabling data-driven improvements to UX.</p>
                            </div>
                            <Divider section={false} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-6">
                <div className="flex gap-12 mx-8 mt-8 justify-between text-beige">
                    <p className="flex text-5xl font-black w-auto">
                        (03)
                    </p>
                    <div className="flex flex-col gap-12 text-xl w-5/9">
                        <div
                            className="cursor-pointer select-none hover:opacity-80 transition-opacity"
                            onClick={() => toggleSection(3)}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-mono font-bold text-5xl">Full Stack Engineer Intern</h1>
                                    <p className="text-darkbeige text-2xl mt-4">VisAI Labs, Chennai</p>
                                </div>
                                <svg
                                    className={`w-8 h-8 transition-transform duration-300 ${expandedSections[3] ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${expandedSections[3] ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(01)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Developed a user management system with role-based access control and OAuth2.0, automated email notifications to streamline onboarding.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(02)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Built a draggable virtual keyboard with Redux Toolkit for efficient state management, reducing load time by 50%.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(03)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Enforced end-to-end data encryption and secure key exchange protocols, including client-side decryption, ensuring robust data protection and compliance with security best practices.</p>
                            </div>
                            <Divider section={false} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-6">
                <div className="flex gap-12 mx-8 mt-8 justify-between text-beige">
                    <p className="flex text-5xl font-black w-auto">
                        (04)
                    </p>
                    <div className="flex flex-col gap-12 text-xl w-5/9">
                        <div
                            className="cursor-pointer select-none hover:opacity-80 transition-opacity"
                            onClick={() => toggleSection(4)}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="font-mono font-bold text-5xl">Artificial Intelligence Intern</h1>
                                    <p className="text-darkbeige text-2xl mt-4">EduTech India, Chennai</p>
                                </div>
                                <svg
                                    className={`w-8 h-8 transition-transform duration-300 ${expandedSections[4] ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${expandedSections[4] ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(01)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Integrated AI algorithms in Robotics to evaluate product features and limitations.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(02)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Assisted in product demonstration for 5 robotic products at Universities in Chennai.</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-start">
                                <p className="text-neutral-400 text-md mt-1">(03)</p>
                                <p className="w-3/4 text-lg text-darkbeige">Received special appreciation from Pitsco Education for our work with the TETRIX Robotics kit.</p>
                            </div>
                            <Divider section={false} />
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
        </section>
    )
}