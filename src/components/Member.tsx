import Image from "next/image";
import { MEMBER_MAP } from "@/constants";
import { MemberID } from "@/types";
import { TwitterIcon } from "@/components/icons/Twitter";

type Props = {
    id: MemberID;
};

export const Member = ({ id }: Readonly<Props>) => {
    return (
        <div className="flex flex-col items-center bg-yellow-100 rounded-md overflow-hidden shadow-md">
            <div
                className="relative min-w-40"
                style={{
                    aspectRatio: "1 / 1",
                }}
            >
                <Image
                    src={`/avatar/${id}.jpg`}
                    alt="cover"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
            <div className="w-full flex items-center justify-between p-2">
                <p className="">{MEMBER_MAP[id].name}</p>
                <TwitterIcon className="w-6 h-6" />
            </div>
        </div>
    );
};
