"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
        <div
            className="bg-gray-400 w-full min-h-screen relative overflow-hidden"
            ref={container}
        >
            <Image
                src="/cover.webp"
                alt="cover"
                fill
                style={{ objectFit: "cover" }}
                priority
            />
            <div className="window-frame absolute inset-0 grid place-content-center bg-gray-300">
                <div
                    className="flex gap-[1px] bg-yellow-100 border border-gray-400 "
                    style={{
                        WebkitPerspective: "800px",
                        perspective: "800px",
                    }}
                >
                    <div className="window-left origin-left w-40 h-80 bg-blue-300 grid place-content-center z-10">
                    </div>
                    <div className="window-right origin-right w-40 h-80 bg-blue-300 grid place-content-center z-10">
                    </div>
                </div>
            </div>
        </div>
    );
};
