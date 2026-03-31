"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainerFast, staggerContainerSlow } from "@/lib/animation-variants";
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
                            >
                                {["AWS", "Docker", "NGINX", "Git", "GitHub Actions"].map((item) => (
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
