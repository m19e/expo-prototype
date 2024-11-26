"use client";

import { useUA } from "@/hooks/useUA";
import { TwitterIcon } from "@/components/icons/Twitter";

type Props = {
    className?: string;
};

export const TwitterIconForA11y = ({ className }: Readonly<Props>) => {
    const { iOS } = useUA();

    return (
        <>
            {iOS
                ? (
                    <span
                        className={`iconify line-md__twitter-x animate-none ${className}`}
                    >
                    </span>
                )
                : <TwitterIcon className={className} />}
        </>
    );
};
