"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { CONTACT_ID_LIST, INFORMATION_LIST, MEMBER_ID_LIST } from "@/constants";
import { Information } from "@/components/Information";
import { TwitterShareButton } from "@/components/TwitterShareButton";
import { Member } from "@/components/Member";
import { Contact } from "@/components/Contact";

export const AnimatedWindow = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const tl = useRef<GSAPTimeline | null>(null);

    useGSAP(() => {
        tl.current = gsap
            .timeline()
            .to(".window-left", {
                rotateY: "-120deg",
                ease: "back.out",
                duration: 3,
                delay: 1,
            })
            .to(".window-right", {
                rotateY: "120deg",
                ease: "back.out",
                duration: 3,
            }, "<")
            .to(".window-frame", {
                scale: 6,
                ease: "circ.inOut",
                duration: 2,
                delay: 1,
            }, "<").to(".window-frame", {
                opacity: 0,
                ease: "expo.out",
                duration: 1,
            })
            .to(".window-frame", { display: "none", duration: 0 });
    }, { scope: container });

    return (
        <div className="relative min-h-screen">
            <div
                className="absolute z-10 w-full h-screen overflow-hidden"
                ref={container}
            >
                <div className="window-frame absolute z-10 inset-0 grid place-content-center bg-pattern">
                    <div className="p-2 border border-gray-400 bg-blue-200">
                        <div
                            className="flex border border-gray-400 bg-gradient-to-b from-blue-100 via-pink-100 to-yellow-50"
                            style={{
                                WebkitPerspective: "800px",
                                perspective: "800px",
                            }}
                        >
                            <div className="window-left origin-left w-40 h-80 bg-blue-200 border border-gray-400 z-10 p-2">
                                <div className="w-full h-full border-2 border-gray-400 bg-gradient-to-b from-[#5d658d] to-[#f4c6d7] to-75%">
                                </div>
                            </div>
                            <div className="window-right origin-right w-40 h-80 bg-blue-200 border border-gray-400 z-10 p-2">
                                <div className="w-full h-full border-2 border-gray-400 bg-gradient-to-b from-[#5d658d] to-[#f4c6d7] to-75%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="w-full relative flex justify-center overflow-hidden bg-pattern font-geist-sans">
                <div className="relative max-h-screen aspect-[3/4] w-full md:aspect-[5/4] md:w-auto md:h-screen xl:aspect-[3/2]">
                    <Image
                        src="/cover.webp"
                        alt="cover room"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>

                <div className="expo-title bg-gradient-to-r from-indigo-400 to-pink-200 pt-1 pr-1">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-extralight bg-gradient-to-b from-white via-white to-transparent text-transparent bg-clip-text">
                        Twinkle Happy Sharing!
                    </span>
                </div>
            </header>
            <main className="flex flex-col w-full space-y-12 font-rounded font-bold text-gray-700 bg-gradient-to-b from-blue-100 via-pink-100 to-yellow-50">
                <section className="flex flex-col items-center space-y-12 pt-12">
                    <p className="text-5xl text-gray-700 border-b-4 border-blue-300 border-double">
                        Information
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 bg-slate-50 rounded-md shadow">
                        <div className="relative w-[20rem] aspect-[1/1.4]">
                            <Image
                                className="shadow-md"
                                src="/front_cover.jpg"
                                alt="cover"
                                fill
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </div>
                        <div className="grid gap-2 w-[20rem] aspect-[1/1.4]">
                            <div className="flex flex-col items-center">
                                <p className="text-2xl">
                                    Twinkle Happy Sharing!
                                </p>
                                <p className="text-xl">-2nd SEASON-</p>
                            </div>
                            {INFORMATION_LIST.map((info) => (
                                <Information
                                    key={info.title}
                                    {...info}
                                />
                            ))}
                            <div className="flex justify-center">
                                <TwitterShareButton />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center space-y-6">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-5xl font-semibold text-gray-700 border-b-4 border-pink-300 border-double">
                            Members
                        </p>
                        <p className="text-sm tracking-tight">
                            アイコンをタップ/クリックでサンプルがご覧になれます
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-x-4 gap-y-2">
                        {MEMBER_ID_LIST.map((id) => (
                            <Member
                                key={id}
                                id={id}
                            />
                        ))}
                    </div>
                </section>

                <section className="flex flex-col items-center space-y-12 pb-12">
                    <p className="text-5xl font-semibold text-gray-700 border-b-4 border-yellow-300 border-double">
                        Contact
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {CONTACT_ID_LIST.map((memberId) => (
                            <Contact key={memberId} id={memberId} />
                        ))}
                    </div>
                </section>
            </main>
            <footer className="bg-yellow-800 px-4 py-2 sm:py-4 w-full flex justify-center">
                <span className="text-white text-xs sm:text-sm font-rounded">
                    本サイト・企画は非公式作品であり、原作及びその関係者様とは一切関係ありません。
                </span>
            </footer>
        </div>
    );
};
