# Portfolio Animations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add subtle, refined Framer Motion animations to the portfolio: hero entrance on landing, scroll-triggered fade-ups on What I Learned and What I Did, and a sticky card-stacking scroll effect on What I Do.

**Architecture:** Install Framer Motion, create a shared `src/lib/animation-variants.ts` for reusable variants, then convert each section to `"use client"` and wire up animations. What I Do gets a sticky-stack card layout; What I Did gets `AnimatePresence` for smooth accordion expand/collapse.

**Tech Stack:** Next.js 15, React 19, Framer Motion, Tailwind CSS v4

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `src/lib/animation-variants.ts` | **Create** | Shared Framer Motion variants + transitions |
| `src/app/sections/landing.tsx` | **Modify** | Add `"use client"`, hero load-time entrance |
| `src/app/sections/what-i-do.tsx` | **Modify** | Add `"use client"`, sticky card-stack layout + scroll animation |
| `src/app/sections/what-i-learned.tsx` | **Modify** | Add `"use client"`, staggered column fade-up on scroll |
| `src/app/sections/what-i-did.tsx` | **Modify** | Scroll fade-up per entry + `AnimatePresence` accordion |

---

## Task 1: Install Framer Motion

**Files:**
- Modify: `package.json` (via npm)

- [ ] **Step 1: Install the package**

```bash
npm install framer-motion
```

Expected output: `added 1 package` (or similar), no errors.

- [ ] **Step 2: Verify dev server still starts**

```bash
npm run dev
```

Navigate to `http://localhost:3000/portfolio`. Page should load exactly as before, no visual changes yet.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install framer-motion"
```

---

## Task 2: Create shared animation variants

**Files:**
- Create: `src/lib/animation-variants.ts`

- [ ] **Step 1: Create the file**

```ts
// src/lib/animation-variants.ts
import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/animation-variants.ts
git commit -m "feat: add shared framer motion animation variants"
```

---

## Task 3: Animate the Landing hero

**Files:**
- Modify: `src/app/sections/landing.tsx`

- [ ] **Step 1: Replace file contents**

```tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animation-variants";
import Link from "next/link";

export default function LandingSection() {
    return (
        <section id="what-i-learned" className="min-h-screen flex flex-col py-16 px-6 bg-beige text-background rounded-b-4xl">
            <div className="flex flex-col min-h-screen">
                <motion.div
                    className="flex justify-between pt-14 pb-20"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex"></div>
                    <div className="flex"></div>
                    <div className="flex">
                        <Link href="https://github.com/goutham0110" target="_blank">
                            <div className="flex gap-4 items-center border-darkbeige m-4 py-2 px-8">
                                <p className="text-xl flex font-mono">GITHUB</p>
                                <p className="text-3xl font-black">↗</p>
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/goutham0110/" target="_blank">
                            <div className="flex gap-4 items-center border-darkbeige m-4 py-2 px-8">
                                <p className="text-xl flex font-mono">LINKEDIN</p>
                                <p className="text-3xl font-black">↗</p>
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/goutham0110/recent-activity/articles/" target="_blank">
                            <div className="flex gap-4 items-center border-darkbeige border-1 border-x-2 rounded-full m-4 py-2 px-8">
                                <p className="text-xl flex font-mono">ARTICLES</p>
                                <p className="text-3xl font-black">↗</p>
                            </div>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="flex justify-between"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="flex flex-col gap-8 pl-18">
                        <motion.div className="flex" variants={fadeUp}>
                            <h1 className="font-mono font-bold text-9xl">GOUTHAM /</h1>
                        </motion.div>
                        <motion.div className="flex flex-col mt-8 gap-6 items-center" variants={fadeUp}>
                            <p className="text-3xl text-background font-mono w-1/2">
                                Harmonizing digital experiences to bring systems and applications to life like a symphony ↘
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex"></div>
                    <div className="flex"></div>
                </motion.div>
            </div>
        </section>
    );
}
```

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:3000/portfolio`. On page load you should see the "GOUTHAM" heading and tagline fade up sequentially, then the nav links fade in. No layout shift.

- [ ] **Step 3: Commit**

```bash
git add src/app/sections/landing.tsx
git commit -m "feat: add hero entrance animation to landing section"
```

---

## Task 4: What I Learned: staggered column fade-up

**Files:**
- Modify: `src/app/sections/what-i-learned.tsx`

- [ ] **Step 1: Replace file contents**

```tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerContainerFast, staggerContainerSlow } from "@/lib/animation-variants";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

export default function WhatILearnedSection() {
    return (
        <section id="what-i-learned" className="min-h-screen flex flex-col py-16 px-6">
            <div className="flex flex-col px-6 min-h-screen">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <HeaderText title="What I Learned" className="font-mono" />
                </motion.div>

                <div className="flex justify-center w-full">
                    <motion.div
                        className="flex gap-12 m-12 px-24 text-beige"
                        variants={staggerContainerFast}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Languages */}
                        <motion.div className="flex flex-col m-12 mx-8 text-beige" variants={fadeUp}>
                            <p className="flex text-xl font-medium font-mono w-auto my-4">Languages</p>
                            <motion.div
                                className="flex flex-col gap-2 text-darkbeige text-lg"
                                variants={staggerContainerSlow}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {["Javascript", "Typescript", "Python", "Go Lang", "C", "C++"].map((item) => (
                                    <motion.p key={item} variants={fadeUp}>{item}</motion.p>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Frameworks */}
                        <motion.div className="flex flex-col m-12 mx-8 text-beige" variants={fadeUp}>
                            <p className="flex text-xl font-medium font-mono w-auto my-4">Frameworks / Libraries / Runtimes</p>
                            <motion.div
                                className="flex flex-col gap-2 text-darkbeige text-lg"
                                variants={staggerContainerSlow}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {["NodeJS", "ExpressJS", "React", "NextJS", "FastAPI", "Flask"].map((item) => (
                                    <motion.p key={item} variants={fadeUp}>{item}</motion.p>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Real-Time Systems */}
                        <motion.div className="flex flex-col m-12 mx-8 text-beige" variants={fadeUp}>
                            <p className="flex text-xl font-medium font-mono w-auto my-4">Real-Time Systems</p>
                            <motion.div
                                className="flex flex-col gap-2 text-darkbeige text-lg"
                                variants={staggerContainerSlow}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {["WebSockets", "Rest API", "gRPC", "GraphQL", "Web RTC"].map((item) => (
                                    <motion.p key={item} variants={fadeUp}>{item}</motion.p>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Databases / Queues */}
                        <motion.div className="flex flex-col m-12 mx-8 text-beige" variants={fadeUp}>
                            <p className="flex text-xl font-medium font-mono w-auto my-4">Databases / Queues</p>
                            <motion.div
                                className="flex flex-col gap-2 text-darkbeige text-lg"
                                variants={staggerContainerSlow}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {["Postgres", "MySQL", "MongoDB", "ElasticSearch", "Redis", "Kafka", "BullMQ"].map((item) => (
                                    <motion.p key={item} variants={fadeUp}>{item}</motion.p>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* DevOps */}
                        <motion.div className="flex flex-col m-12 mx-8 text-beige" variants={fadeUp}>
                            <p className="flex text-xl font-medium font-mono w-auto my-4">DevOps</p>
                            <motion.div
                                className="flex flex-col gap-2 text-darkbeige text-lg"
                                variants={staggerContainerSlow}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {["AWS", "Docker", "NGNIX", "Git", "GitHub Actions"].map((item) => (
                                    <motion.p key={item} variants={fadeUp}>{item}</motion.p>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <Divider />
        </section>
    );
}
```

- [ ] **Step 2: Verify in browser**

Scroll down to the "What I Learned" section. The 5 columns should fade up one by one with a slight stagger. Items within each column also fade up sequentially.

- [ ] **Step 3: Commit**

```bash
git add src/app/sections/what-i-learned.tsx
git commit -m "feat: add staggered scroll animation to what-i-learned section"
```

---

## Task 5: What I Did: scroll fade-up + AnimatePresence accordion

**Files:**
- Modify: `src/app/sections/what-i-did.tsx`

- [ ] **Step 1: Replace file contents**

```tsx
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
                initial="hidden"
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
                                            transition={{ duration: 0.3 }}
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
```

- [ ] **Step 2: Verify in browser**

Scroll to "What I Did". The 4 job entries should fade up with a stagger. Click a job title, the content should expand/collapse smoothly without a height jump. The chevron should rotate 180° on expand.

- [ ] **Step 3: Commit**

```bash
git add src/app/sections/what-i-did.tsx
git commit -m "feat: add scroll animation and AnimatePresence accordion to what-i-did section"
```

---

## Task 6: What I Do: sticky card-stack layout

**Files:**
- Modify: `src/app/sections/what-i-do.tsx`

- [ ] **Step 1: Replace file contents**

```tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "@/lib/animation-variants";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

const services = [
    {
        number: "(01)",
        title: "Full-Stack Development",
        description: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
        skills: [
            { num: "(01)", label: "React | NodeJS | NextJS | Python" },
            { num: "(02)", label: "Postgres | MongoDB | ElasticSearch | Redis" },
            { num: "(03)", label: "AWS | Docker | Git | GitHub Actions" },
        ],
    },
    {
        number: "(02)",
        title: "System Design",
        description: "Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
        skills: [
            { num: "(01)", label: "System Design | Data Pipelines | Scalability" },
            { num: "(02)", label: "DBMS | OOPS | Design Patterns" },
            { num: "(03)", label: "Data Structures & Algorithms" },
        ],
    },
    {
        number: "(03)",
        title: "UI/UX & Frontend",
        description: "Design is more than looks, it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
        skills: [
            { num: "(01)", label: "NextJS | React | ReactNative" },
            { num: "(02)", label: "TailwindCSS | MaterialUI | Figma" },
            { num: "(03)", label: "HTML | CSS | Javascript" },
        ],
    },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.97 - index * 0.01]);

    const topOffset = 8 + index * 2;

    return (
        <motion.div
            ref={ref}
            style={{ scale, top: `${topOffset}rem` }}
            className="sticky bg-background border border-beige/20 rounded-2xl p-10 mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex gap-12 justify-between text-beige">
                <p className="flex text-5xl font-black w-auto">{service.number}</p>
                <div className="flex flex-col gap-8 text-xl w-5/9">
                    <h1 className="font-mono font-bold text-5xl">{service.title}</h1>
                    <p className="w-3/4 text-darkbeige">{service.description}</p>
                    <div className="flex flex-col gap-4">
                        {service.skills.map((skill) => (
                            <div key={skill.num}>
                                <div className="flex gap-4 items-center">
                                    <p className="text-neutral-400 text-md">{skill.num}</p>
                                    <p className="w-3/4 text-3xl font-bold">{skill.label}</p>
                                </div>
                                <Divider section={false} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function WhatIDoSection() {
    return (
        <section id="what-i-do" className="flex flex-col py-16 px-6">
            <div className="flex flex-col px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <HeaderText title="What I Do" className="font-mono" />
                </motion.div>
                <motion.div
                    className="flex justify-between"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="flex gap-12 m-12 mt-18 justify-end text-beige">
                        <p className="flex text-2xl w-auto text-beige">(services)</p>
                        <div className="flex text-2xl w-3/7">
                            <p className="w-3/4 text-darkbeige">
                                I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it&apos;s for a business, startup, or product team.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Divider />

            <div className="flex flex-col px-6 mt-8 pb-32">
                {services.map((service, index) => (
                    <ServiceCard key={service.number} service={service} index={index} />
                ))}
            </div>

            <Divider />
        </section>
    );
}
```

- [ ] **Step 2: Verify in browser**

Scroll through "What I Do". Each card should:
- Fade up on entry
- Stick in place as the next card scrolls in on top
- The buried cards should scale down very slightly, giving a depth/stack effect
- Hovering a card lifts it slightly

- [ ] **Step 3: Commit**

```bash
git add src/app/sections/what-i-do.tsx
git commit -m "feat: add sticky card-stack scroll layout to what-i-do section"
```

---

## Task 7: Add `.superpowers/` to `.gitignore`

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add entry**

Open `.gitignore` and add at the bottom:

```
# Superpowers brainstorm session files
.superpowers/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: ignore .superpowers brainstorm session files"
```

---

## Task 8: Build verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: build completes with no errors. The `out/` directory is created.

- [ ] **Step 2: Check for any TypeScript or lint errors**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 3: Smoke test locally**

Run `npm run dev`, navigate to `http://localhost:3000/portfolio`, and verify:
- Landing hero animates in on load
- Scrolling to "What I Do" shows sticky card stacking
- Scrolling to "What I Learned" shows staggered column fade-up
- Scrolling to "What I Did" shows staggered entry fade-up; clicking entries expands/collapses smoothly
