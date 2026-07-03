"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainerFast, staggerContainerSlow } from "@/lib/animation-variants";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

const skillGroups = [
    {
        title: "Languages",
        items: ["Javascript", "Typescript", "Python", "Go Lang", "C", "C++"],
    },
    {
        title: "Frameworks / Libraries / Runtimes",
        items: ["NodeJS", "ExpressJS", "React", "NextJS", "FastAPI", "Flask"],
    },
    {
        title: "Real-Time Systems",
        items: ["WebSockets", "Rest API", "gRPC", "GraphQL", "Web RTC"],
    },
    {
        title: "Databases / Queues",
        items: ["Postgres", "MySQL", "MongoDB", "ElasticSearch", "Redis", "Kafka", "BullMQ"],
    },
    {
        title: "DevOps",
        items: ["AWS", "Docker", "NGINX", "Git", "GitHub Actions"],
    },
];

export default function WhatILearnedSection() {
    return (
        <section id="what-i-learned" className="flex flex-col py-16 px-4 sm:px-6">
            <div className="flex flex-col px-1 sm:px-6">
                <HeaderText title="What I Learned" className="font-mono" />

                <div className="flex justify-center w-full">
                    <motion.div
                        className="flex flex-wrap gap-x-8 gap-y-4 m-2 sm:m-12 lg:px-24 text-beige"
                        variants={staggerContainerFast}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {skillGroups.map((group) => (
                            <motion.div key={group.title} className="flex flex-col m-2 sm:m-8 lg:m-12 min-w-[140px] text-beige" variants={fadeUp}>
                                <h3 className="flex text-lg sm:text-xl font-medium font-mono w-auto my-4">{group.title}</h3>
                                <motion.div
                                    className="flex flex-col gap-2 text-darkbeige text-base sm:text-lg"
                                    variants={staggerContainerSlow}
                                >
                                    {group.items.map((item) => (
                                        <motion.p key={item} variants={fadeUp} className="cursor-default transition-colors duration-200 hover:text-beige">{item}</motion.p>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <Divider />
        </section>
    );
}
