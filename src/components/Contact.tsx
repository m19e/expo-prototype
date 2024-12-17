import Image from "next/image";
import { ContactID } from "@/types";
import { MEMBER_MAP } from "@/constants";
import { TwitterIconForA11y } from "@/components/icons/forAccessibility/Twitter";
import { InstagramIconForA11y } from "@/components/icons/forAccessibility/Instagram";
import { GitHubIconForA11y } from "@/components/icons/forAccessibility/GitHub";

type Props = {
    id: ContactID;
};

export const Contact = ({ id }: Readonly<Props>) => {
    const {
        role,
        name,
        link: { type: linkType, url },
    } = MEMBER_MAP[id];
    const existOtherLink = linkType !== "none";

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative min-w-40 rounded-full shadow-md overflow-hidden aspect-square">
                <Image
                    src={`/avatar/${id}.jpg`}
                    alt={`/avatar/${id}`}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="text-sm px-1 border-b-2 border-gray-600 border-dashed">
                    {role}
                </span>
                <span className="text-lg">{name}</span>
                <div className="flex items-center gap-1">
                    <a
                        href={`https://twitter.com/${id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIconForA11y className="w-6 h-6" />
                    </a>
                    {existOtherLink && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {linkType === "instagram" &&
                                <InstagramIconForA11y className="w-7 h-7" />}
                            {linkType === "github" &&
                                <GitHubIconForA11y className="w-7 h-7" />}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
