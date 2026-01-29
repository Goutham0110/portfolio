import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

export default function WhatIDoSection() {
    return (
        <section id="what-i-do" className="min-h-screen flex flex-col py-16 px-6">
            <div className="flex flex-col px-6">
                <HeaderText title="What I Do" className="font-mono" />
                <div className="flex justify-between">
                    <div className="flex gap-12 m-12 mt-18 justify-end text-beige">
                        <p className="flex text-2xl w-auto text-beige">
                            (services)
                        </p>
                        <div className="flex text-2xl w-3/7">
                            <p className="w-3/4 text-darkbeige">
                                I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it&apos;s for a business, startup, or product team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            {/* Full-Stack Development */}
            <div className="flex flex-col px-6 min-h-screen">
                <div className="flex gap-12 m-8 mt-14 justify-between text-beige">
                    <p className="flex text-5xl font-black w-auto">
                        (01)
                    </p>
                    <div className="flex flex-col gap-12 text-xl w-5/9">
                        <h1 className="font-mono font-bold text-5xl">{"Full-Stack Development"}</h1>
                        <p className="w-3/4 text-darkbeige">
                            From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <p className="text-neutral-400 text-md">(01)</p>
                                <p className="w-3/4 text-3xl font-bold">React | NodeJS | NextJS | Python</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-center">
                                <p className="text-neutral-400 text-md">(02)</p>
                                <p className="w-3/4 text-3xl font-bold">Postgres | MongoDB | ElasticSearch | Redis</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-center">
                                <p className="text-neutral-400 text-md">(03)</p>
                                <p className="w-3/4 text-3xl font-bold">AWS | Docker | Git | GitHub Actions</p>
                            </div>
                            <Divider section={false} />
                        </div>

                    </div>
                </div>
            </div>
            <Divider />
            {/* System Design */}
            <div className="flex flex-col px-6 min-h-screen">
                <div className="flex gap-12 m-8 mt-14 justify-between text-beige">
                    <p className="flex text-5xl font-black w-auto">
                        (02)
                    </p>
                    <div className="flex flex-col gap-12 text-xl w-5/9">
                        <h1 className="font-mono font-bold text-5xl">{"System Design"}</h1>
                        <p className="w-3/4 text-darkbeige">
                            Beyond handling data, I’m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <p className="text-neutral-400 text-md">(01)</p>
                                <p className="w-3/4 text-3xl font-bold">System Design | Data Pipelines | Scalability</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-center">
                                <p className="text-neutral-400 text-md">(02)</p>
                                <p className="w-3/4 text-3xl font-bold">DBMS | OOPS | Design Patterns</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-center">
                                <p className="text-neutral-400 text-md">(03)</p>
                                <p className="w-3/4 text-3xl font-bold">Data Structures & Algorithms</p>
                            </div>
                            <Divider section={false} />
                        </div>

                    </div>
                </div>
            </div>
            <Divider />
            {/* UI/UX & Frontend */}
            <div className="flex flex-col px-6 min-h-screen">
                <div className="flex gap-12 m-8 mt-14 justify-between text-beige">
                    <p className="flex text-5xl font-black w-auto">
                        (03)
                    </p>
                    <div className="flex flex-col gap-12 text-xl w-5/9">
                        <h1 className="font-mono font-bold text-5xl">{"UI/UX & Frontend"}</h1>
                        <p className="w-3/4 text-darkbeige">
                            Design is more than looks — it’s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-center">
                                <p className="text-neutral-400 text-md">(01)</p>
                                <p className="w-3/4 text-3xl font-bold">NextJS | React | ReactNative</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-center">
                                <p className="text-neutral-400 text-md">(02)</p>
                                <p className="w-3/4 text-3xl font-bold">TailwindCSS | MaterialUI | Figma</p>
                            </div>
                            <Divider section={false} />
                            <div className="flex gap-4 items-center">
                                <p className="text-neutral-400 text-md">(03)</p>
                                <p className="w-3/4 text-3xl font-bold">HTML | CSS | Javascript</p>
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