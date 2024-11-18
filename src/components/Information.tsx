type Props = {
    title: string;
    contents: string | string[];
};

export const Information = ({ title, contents }: Readonly<Props>) => {
    return (
        <div className="flex flex-col">
            <p className="self-start text-base leading-5 border-b-2 border-gray-600 border-dashed">
                {title}
            </p>
            <div className="flex flex-col items-end text-lg">
                {!Array.isArray(contents)
                    ? <p>{contents}</p>
                    : contents.map((c) => <p key={c}>{c}</p>)}
            </div>
        </div>
    );
};
