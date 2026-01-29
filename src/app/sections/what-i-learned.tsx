import Divider from "@/components/divider";
import HeaderText from "@/components/header-text";

export default function WhatILearnedSection() {
    return (
        <section id="what-i-learned" className="min-h-screen flex flex-col py-16 px-6">
            <div className="flex flex-col px-6 min-h-screen">
                <HeaderText title="What I Learned" className="font-mono" />
                <div className="flex justify-center w-full ">

                    <div className="flex gap-12 m-12 px-24 text-beige">

                        <div className="flex flex-col m-12 mx-8 text-beige">
                            <p className="flex text-xl font-medium font-mono w-auto my-4">
                                Languages
                            </p>
                            <div className="flex flex-col gap-2 text-darkbeige text-lg">
                                <p>Javascript</p>
                                <p>Typescript</p>
                                <p>Python</p>
                                <p>Go Lang</p>
                                <p>C</p>
                                <p>C++</p>
                            </div>
                        </div>

                        <div className="flex flex-col m-12 mx-8 text-beige">
                            <p className="flex text-xl font-medium font-mono w-auto my-4">
                                Frameworks / Libraries / Runtimes
                            </p>
                            <div className="flex flex-col gap-2 text-darkbeige text-lg">
                                <p>NodeJS</p>
                                <p>ExpressJS</p>
                                <p>React</p>
                                <p>NextJS</p>
                                <p>FastAPI</p>
                                <p>Flask</p>
                            </div>
                        </div>

                        <div className="flex flex-col m-12 mx-8 text-beige">
                            <p className="flex text-xl font-medium font-mono w-auto my-4">
                                Real-Time Systems
                            </p>
                            <div className="flex flex-col gap-2 text-darkbeige text-lg">
                                <p>WebSockets</p>
                                <p>Rest API</p>
                                <p>gRPC</p>
                                <p>GraphQL</p>
                                <p>Web RTC</p>
                            </div>
                        </div>

                        <div className="flex flex-col m-12 mx-8 text-beige">
                            <p className="flex text-xl font-medium font-mono w-auto my-4">
                                Databases / Queues
                            </p>
                            <div className="flex flex-col gap-2 text-darkbeige text-lg">
                                <p>Postgres</p>
                                <p>MySQL</p>
                                <p>MongoDB</p>
                                <p>ElasticSearch</p>
                                <p>Redis</p>
                                <p>Kafka</p>
                                <p>BullMQ</p>
                            </div>
                        </div>

                        <div className="flex flex-col m-12 mx-8 text-beige">
                            <p className="flex text-xl font-medium font-mono w-auto my-4">
                                DevOps
                            </p>
                            <div className="flex flex-col gap-2 text-darkbeige text-lg">
                                <p>AWS</p>
                                <p>Docker</p>
                                <p>NGNIX</p>
                                <p>Git</p>
                                <p>GitHub Actions</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Divider />
        </section>
    )
}