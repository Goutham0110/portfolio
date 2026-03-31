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
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
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
