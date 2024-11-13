import { MEMBER_ID_LIST } from "@/constants";
import { Member } from "@/components/Member";

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
            {MEMBER_ID_LIST.map((id) => <Member key={id} id={id} />)}
        </div>
    );
};
