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
        description: "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
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
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
