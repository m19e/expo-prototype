"use client";

import { useUA } from "@/hooks/useUA";
import { InstagramIcon } from "@/components/icons/Instagram";

type Props = {
    className?: string;
};

export const InstagramIconForAccessibility = (
    { className }: Readonly<Props>,
) => {
    const { iOS } = useUA();

    return (
        <>
            {iOS
                ? (
                    <span
                        className={`iconify line-md__instagram animate-none ${className}`}
                    >
                    </span>
                )
                : <InstagramIcon className={className} />}
        </>
    );
};
