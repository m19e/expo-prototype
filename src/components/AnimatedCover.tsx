"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function AnimatedCover() {
    const container = useRef<HTMLElement | null>(null);
    const tl = useRef<GSAPTimeline | null>(null);

    useGSAP(() => {
        //HTMLElement内で取得されたclassNameがboxの要素を全て取得
        // 複数のアニメーションを作るなら、refはHTMLDivElementで取得した方が良いかも
        const boxes: HTMLElement[] = gsap.utils.toArray(".box");

        // 座標の初期値は、CSSで設定した地点(x:0, y:0)
        gsap.set(boxes[0], { x: -100, backgroundColor: "red" });
        gsap.set(boxes[1], { y: -100, backgroundColor: "blue" });
        gsap.set(boxes[2], { y: +100, backgroundColor: "green" });
        gsap.set(boxes[3], { x: +100, backgroundColor: "yellow" });

        // タイムラインを使ってアニメーションを作成
        tl.current = gsap
            .timeline()
            .to(boxes[0], { x: 0, opacity: 1, duration: 1 })
            .to(boxes[1], { y: 0, opacity: 1, duration: 1 })
            .to(boxes[2], { y: 0, opacity: 1, duration: 1 })
            .to(boxes[3], { x: 0, opacity: 1, duration: 1 })
            .to(boxes, { y: +100, opacity: 0, duration: 1 })
            // オープニングアニメーションなので使わなくなった要素は非表示にする
            .to(boxes, { display: "none", duration: 0 });
    }, { scope: container });

    return (
        <main className="mix-h-screen">
            <section className="absolute w-full text-center" ref={container}>
                <h2 className="text-4xl">Use a Timeline</h2>
                <div className="h-screen flex justify-center items-center text-6xl font-bold text-gray-300">
                    <div className="box opacity-0 p-10">T</div>
                    <div className="box opacity-0 p-10">E</div>
                    <div className="box opacity-0 p-10">S</div>
                    <div className="box opacity-0 p-10">T</div>
                </div>
            </section>
        </main>
    );
}
