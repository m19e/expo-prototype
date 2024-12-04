"use client";

import { type ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type Props = {
    className?: string;
    children: ReactNode;
};

export const ReanimateIcon = (
    { className = "", children }: Readonly<Props>,
) => {
    const [ref] = useIntersectionObserver({
        onChange: (isIntersecting, entry) => {
            isIntersecting &&
                (entry.target as SVGSVGElement).setCurrentTime(0);
        },
    });

    return (
        <svg
            ref={ref}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 24 24"
        >
            {children}
        </svg>
    );
};
