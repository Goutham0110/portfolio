"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { easeOutSoft, fadeUp } from "@/lib/animation-variants";
import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

const entries = [
    {
        number: "(01)",
        title: "Robocon · Team NOVA",
        context: "AIR 21 & 19 · State rank 1",
        description: "Six months of every year belonged to Robocon: calculations, prototypes, four hours a day scaling to living in the lab for the final month. Team NOVA, 14 of us, highest in the state both years, AIR 21 then AIR 19. I built the electronics stack, from motor drivers through Raspberry Pi to CV target tracking, and was vice captain in 2023.",
        tags: ["Robotics", "Embedded Systems", "Computer Vision"],
    },
    {
        number: "(02)",
        title: "AI/ML Special Lab",
        context: "80+ students",
        description: "Ran multiple sessions for the AI/ML special lab covering data preprocessing, pandas, NumPy, and data visualization, the unglamorous groundwork that every model quietly depends on.",
        tags: ["Pandas", "NumPy", "Data Visualization"],
    },
    {
        number: "(03)",
        title: "Teaching & Training",
        context: "300+ students",
        description: "I trained 100+ students in C/C++ programming fundamentals at my college, and went to another college as a trainer to run a machine learning programme for a class of 120. Teaching a room that size forces you to actually understand the thing you thought you knew.",
        tags: ["C / C++", "Machine Learning", "Public Speaking"],
    },
    {
        number: "(04)",
        title: "v-Prayukthi",
        context: "Organizing committee · Student jury",
        description: "Member of the organizing committee for v-Prayukthi, our inter-college event: symposiums, project presentations, 24-hour AI/ML hackathons, line-follower bots, war bots. I also sat on the student jury panel for the AI/ML hackathon in 2023.",
        tags: ["Event Organizing", "Hackathons", "Judging"],
    },
    {
        number: "(05)",
        title: "Robocon · Mentor",
        context: "2024 & 2025 seasons",
        description: "Robocon doesn't let go of you. I mentored the next two NOVA teams through its hardest lesson: prototypes die late, because no calculation warns you about skid and slip on the real floor. So they learned proofs of concept, documentation and failure modes early. The PS4 drive code from my years still runs on their robots, untouched.",
        tags: ["Mentoring", "Robotics", "Systems Design"],
    },
    {
        number: "(06)",
        title: "Industry Mentor · BIT",
        context: "Alumni Mentorship Programme · Capstone Projects",
        description: "I guide interdisciplinary student teams through a real-world problem on how to manage time, who owns what when it slips, why the problem statement gets written down before anyone touches a keyboard. I give technical direction where I have it, and run periodic reviews where they defend what they built.",
        tags: ["Mentoring", "Student Teams", "Systems Design"],
    },
    {
        number: "(07)",
        title: "Google Developer Student Club",
        context: "Core member · BIT",
        description: "Core member of GDSC BIT, helping run the sessions and events that got other students building things instead of just reading about them.",
        tags: ["Community", "Developer Events"],
    },
];

const AUTOPLAY_MS = 3000;

const slideVariants: Variants = {
    enter: (direction: number) => ({ x: direction >= 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: easeOutSoft } },
    exit: (direction: number) => ({ x: direction >= 0 ? -60 : 60, opacity: 0, transition: { duration: 0.25, ease: easeOutSoft } }),
};

export default function WhatElseSection() {
    const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
    const [autoPlay, setAutoPlay] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);
    const inView = useInView(carouselRef, { amount: 0.5 });
    const entry = entries[index];
    const isPlaying = autoPlay && inView;

    const paginate = (dir: number) =>
        setIndex(([i]) => [(i + dir + entries.length) % entries.length, dir]);

    const paginateManually = (dir: number) => {
        setAutoPlay(false);
        paginate(dir);
    };

    useEffect(() => {
        if (!autoPlay || !inView) return;
        const id = setInterval(() => {
            setIndex(([i]) => [(i + 1) % entries.length, 1]);
        }, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [autoPlay, inView]);

    return (
        <section id="what-else" className="flex flex-col py-16 px-4 sm:px-6">
            <HeaderText title="What Else" className="font-mono" />

            <motion.div
                ref={carouselRef}
                className="flex flex-col px-1 sm:px-6 mt-12 sm:mt-16 pb-8 text-beige"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                role="region"
                aria-roledescription="carousel"
                aria-label="Other things I have done"
            >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <div className="flex w-full sm:max-w-md gap-1.5" aria-hidden="true">
                        {entries.map((e, i) => (
                            <div key={e.number} className="h-[3px] flex-1 overflow-hidden rounded-full bg-beige/15">
                                {i < index && <div className="h-full w-full bg-beige/60" />}
                                {i === index &&
                                    (isPlaying ? (
                                        <motion.div
                                            key={index}
                                            className="h-full w-full origin-left bg-beige"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                                        />
                                    ) : (
                                        <div className="h-full w-full bg-beige" />
                                    ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-5">
                        <p className="font-mono text-xs sm:text-sm tracking-widest text-neutral-400" aria-live={autoPlay ? "off" : "polite"}>
                            {String(index + 1).padStart(2, "0")} / {String(entries.length).padStart(2, "0")}
                        </p>
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => paginateManually(-1)}
                                aria-label="Previous"
                                className="cursor-pointer rounded-full border border-beige/20 p-3 text-darkbeige transition-colors hover:border-beige/50 hover:text-beige"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={() => paginateManually(1)}
                                aria-label="Next"
                                className="cursor-pointer rounded-full border border-beige/20 p-3 text-darkbeige transition-colors hover:border-beige/50 hover:text-beige"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden mt-6 sm:mt-8 min-h-[340px] sm:min-h-[300px] md:min-h-[260px]">
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <motion.article
                            key={entry.number}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.15}
                            onDragEnd={(_, info) => {
                                if (info.offset.x < -60) paginateManually(1);
                                else if (info.offset.x > 60) paginateManually(-1);
                            }}
                            aria-roledescription="slide"
                            aria-label={`${index + 1} of ${entries.length}`}
                            className="flex flex-col gap-4 sm:gap-5 max-w-3xl cursor-grab active:cursor-grabbing"
                        >
                            <p className="font-mono text-xs sm:text-sm tracking-widest text-neutral-400 uppercase">
                                {entry.number} · {entry.context}
                            </p>
                            <h3 className="font-mono font-bold text-2xl sm:text-4xl">{entry.title}</h3>
                            <p className="text-base sm:text-lg text-darkbeige">{entry.description}</p>
                            <p className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase">
                                {entry.tags.join(" · ")}
                            </p>
                        </motion.article>
                    </AnimatePresence>
                </div>
            </motion.div>
            <Divider />
        </section>
    );
}
