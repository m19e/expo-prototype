import { ReanimateIcon } from "@/components/icons/ReanimateIcon";
import { TwitterSVGGroup } from "@/components/icons/groups/Twitter";

type Props = {
    className?: string;
};

export const TwitterIcon = ({ className = "" }: Readonly<Props>) => (
    <ReanimateIcon className={className}>
        <TwitterSVGGroup />
    </ReanimateIcon>
);
