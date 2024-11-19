import { ReanimateIcon } from "@/components/icons/ReanimateIcon";
import { InstagramSVGGroup } from "@/components/icons/groups/Instagram";

type Props = {
    className?: string;
};

export const InstagramIcon = ({ className = "" }: Readonly<Props>) => (
    <ReanimateIcon className={className}>
        <InstagramSVGGroup />
    </ReanimateIcon>
);
