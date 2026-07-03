"use client";

import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/animation-variants";

export default function Divider({ section = true }: { section?: boolean }) {
    return (
        <motion.div
            className={`border-t border-beige/15 origin-left ${section ? 'mt-12' : ''}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOutSoft }}
        ></motion.div>
    )
}
