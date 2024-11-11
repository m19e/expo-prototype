type Props = {
    className?: string;
};

export const TwitterIcon = ({ className = "" }: Readonly<Props>) => (
    <span className={"iconify line-md__twitter-x " + className}></span>
);
