import { ReanimateIcon } from "@/components/icons/ReanimateIcon";
import { GitHubSVGGroup } from "@/components/icons/groups/GitHub";

type Props = {
    className?: string;
};

export const GitHubIcon = ({ className = "" }: Readonly<Props>) => (
    <ReanimateIcon className={className}>
        <GitHubSVGGroup />
    </ReanimateIcon>
);
