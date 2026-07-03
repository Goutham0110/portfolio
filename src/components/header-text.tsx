"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/animation-variants";

export default function HeaderText({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) {
    return (
        <div className={className}>
            <div className="overflow-hidden">
                <motion.h2
                    className="font-mono font-bold text-5xl sm:text-7xl lg:text-9xl break-words"
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, ease: easeOutSoft }}
                >{title.toUpperCase()} /</motion.h2>
            </div>
            {subtitle && <p className="font-mono font-medium text-2xl sm:text-4xl lg:text-6xl mt-4 px-4">{subtitle.toLowerCase()}</p>}
        </div>
    )
}
