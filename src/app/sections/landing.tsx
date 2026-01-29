import HeaderText from "@/components/header-text";
import Link from "next/link";

export default function LandingSection() {
    return (
        <section id="what-i-learned" className="min-h-screen flex flex-col py-16 px-6 bg-beige text-background rounded-b-4xl">
            <div className="flex flex-col min-h-screen ">
                <div className="flex justify-between pt-14 pb-20">
                    <div className="flex">

                    </div>
                    <div className="flex">

                    </div>
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

                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-8 pl-18">
                        <div className="flex">
                            <HeaderText title="GOUTHAM" className="font-mono" />
                        </div>
                        <div className="flex flex-col mt-8 gap-6 items center">
                            <p className="text-3xl text-background font-mono w-1/2">
                                Harmonizing digital experiences to bring systems and applications to life like a symphony ↘
                            </p>
                            {/* <p className="text-3xl px-8 text-darkbeige font-black"></p> */}
                            {/* <div className="flex w-1/2 justify-end"></div> */}
                        </div>
                    </div>
                    <div className="flex">

                    </div>
                    <div className="flex">

                    </div>

                </div>
                {/* <div className="flex flex-col m-4">
                <HeaderText title="GOUTHAM" className="font-mono" />
            </div>
            <div className="flex flex-col bg-beige rounded-full m-4 p-4 px-8 w-96">
                <p className="text-5xl font-black text-background">View my Articles</p>
            </div> */}
            </div>
        </section >
    )
}