"use client";

import { useUA } from "@/hooks/useUA";
import { GitHubIcon } from "@/components/icons/GitHub";

type Props = {
    className?: string;
};

export const GitHubIconForA11y = ({ className }: Readonly<Props>) => {
    const { iOS } = useUA();

    return (
        <>
            {iOS
                ? (
                    <span
                        className={`iconify line-md__github animate-none ${className}`}
                    >
                    </span>
                )
                : <GitHubIcon className={className} />}
        </>
    );
};
