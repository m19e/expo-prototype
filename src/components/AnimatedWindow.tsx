"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
    children: ReactNode;
};

export const AnimatedWindow = ({ children }: Readonly<Props>) => {
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
                className="absolute z-20  w-full h-screen overflow-hidden"
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
                                <div className="w-full h-full opacity-50 border-2 border-gray-400 bg-gradient-to-b from-[#5d658d] to-[#f4c6d7] to-75%">
                                </div>
                            </div>
                            <div className="window-right origin-right w-40 h-80 bg-blue-200 border border-gray-400 z-10 p-2">
                                <div className="w-full h-full opacity-50 border-2 border-gray-400 bg-gradient-to-b from-[#5d658d] to-[#f4c6d7] to-75%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};
