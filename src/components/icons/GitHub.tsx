type Props = {
    className?: string;
};

export const GitHubIcon = ({ className = "" }: Readonly<Props>) => (
    <span className={"iconify line-md__github-twotone " + className}></span>
);
