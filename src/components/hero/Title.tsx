import Image from "next/image";

export const TitleAbsolute = () => {
    return (
        <div className="hidden xl:flex absolute top-0 left-[5%] min-w-min h-full overflow-hidden">
            <TitleContent />
        </div>
    );
};

export const TitleContent = () => {
    return (
        <div className="h-full min-w-min bg-gradient-to-b from-[#5d658d] to-[#f4c6d7]">
            <div className="relative h-full aspect-[159/1234] -ml-3 mr-3">
                <Image
                    src="/hero/main.webp"
                    alt="hero/main"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>
        </div>
    );
};
