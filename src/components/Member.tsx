import { MEMBER_MAP } from "@/constants";
import { MemberID } from "@/types";
import { TwitterIconForA11y } from "@/components/icons/forAccessibility/Twitter";
import { SampleDialog } from "@/components/SampleDialog";

type Props = {
    id: MemberID;
};

export const Member = ({ id }: Readonly<Props>) => {
    return (
        <div className="flex flex-col items-center">
            <SampleDialog id={id} />
            <div className="w-full flex items-center justify-between py-2">
                <p className="">{MEMBER_MAP[id].name}</p>
                <a
                    href={`https://twitter.com/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIconForA11y className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};
