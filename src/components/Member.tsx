import Image from "next/image";
import { MEMBER_MAP } from "@/constants";
import { MemberID } from "@/types";
import { TwitterIcon } from "@/components/icons/Twitter";

type Props = {
    id: MemberID;
};

export const Member = ({ id }: Readonly<Props>) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative min-w-40 aspect-square overflow-hidden rounded-md shadow-md">
                <Image
                    src={`/avatar/${id}.jpg`}
                    alt="cover"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <div className="w-full flex items-center justify-between py-2">
                <p className="">{MEMBER_MAP[id].name}</p>
                <a
                    href={`https://twitter.com/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};
