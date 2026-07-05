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
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.985 - index * 0.005]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, transformOrigin: "top center", top: `calc(4rem + ${index} * var(--card-peek))` }}
            className="sticky flex flex-col bg-[#111110] border border-beige/20 rounded-2xl p-5 sm:p-8 md:p-10 mb-6 shadow-[0_-12px_32px_rgba(0,0,0,0.5)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
            {/* Header row: the strip that stays visible when cards stack.
                Its height (+ card padding-top) must stay within --card-peek. */}
            <div className="flex items-baseline gap-4 sm:gap-6 min-h-[3.75rem] sm:min-h-0 text-beige">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-black shrink-0">{service.number}</p>
                <h3 className="font-mono font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">{service.title}</h3>
            </div>
            <div className="flex flex-col gap-6 md:gap-8 mt-6 text-beige w-full md:w-5/9 md:self-end">
                <p className="w-full lg:w-3/4 text-base sm:text-lg text-darkbeige">{service.description}</p>
                <div className="flex flex-col gap-4">
                    {service.skills.map((skill) => (
                        <div key={skill.num}>
                            <div className="flex gap-3 sm:gap-4 items-center">
                                <p className="text-neutral-400 text-sm sm:text-md">{skill.num}</p>
                                <p className="text-lg sm:text-2xl lg:text-3xl font-bold">{skill.label}</p>
                            </div>
                            <Divider section={false} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function WhatIDoSection() {
    return (
        <section id="what-i-do" className="flex flex-col py-16 px-4 sm:px-6">
            <div className="flex flex-col px-1 sm:px-6">
                <HeaderText title="What I Do" className="font-mono" />
                <motion.div
                    className="flex justify-between"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 m-2 sm:m-12 mt-8 sm:mt-18 sm:justify-end text-beige">
                        <p className="flex text-xl sm:text-2xl w-auto text-beige">(services)</p>
                        <div className="flex text-lg sm:text-2xl w-full sm:w-3/7">
                            <p className="w-full lg:w-3/4 text-darkbeige">
                                I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it&apos;s for a business, startup, or product team.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Divider />

            <div className="flex flex-col px-1 sm:px-6 mt-8">
                {services.map((service, index) => (
                    <ServiceCard key={service.number} service={service} index={index} />
                ))}
                {/* Sticky runway: padding doesn't extend the sticky containing block
                    (content edge), so a real element is needed for the assembled
                    stack to stay pinned before the section scrolls on. */}
                <div className="h-96 sm:h-80" aria-hidden="true"></div>
            </div>

            <Divider />
        </section>
    );
}
