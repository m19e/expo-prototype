import Image from "next/image";
import { MEMBER_ID_LIST, MEMBER_MAP } from "@/constants";
import { TwitterIcon } from "@/components/icons/Twitter";

const MemberListItem = ({ id }: { id: typeof MEMBER_ID_LIST[number] }) => {
    return (
        <div className="fade-in-target flex flex-col items-center bg-yellow-100 rounded-md  overflow-hidden shadow-md">
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

export const MemberList = () => {
    // const container = useRef<HTMLDivElement | null>(null);
    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.utils.toArray<HTMLDivElement>(".fade-in-target").forEach(
    //         (target) => {
    //             gsap.fromTo(target, {
    //                 opacity: 0,
    //                 y: 10,
    //                 duration: 1,
    //             }, {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 1,
    //                 scrollTrigger: {
    //                     trigger: target,
    //                     markers: true,
    //                 },
    //             });
    //         },
    //     );
    // }, { scope: container });

    return (
        <div className="grid grid-cols-2 items-center gap-2">
            {MEMBER_ID_LIST.map((memberId) => (
                <MemberListItem key={memberId} id={memberId} />
            ))}
        </div>
    );
};
