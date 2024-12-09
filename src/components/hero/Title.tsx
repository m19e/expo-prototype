import Image from "next/image";

export const TitleAbsolute = () => {
    return (
        <div className="hidden xl:flex absolute top-0 left-[5%] min-w-min h-full">
            <TitleContent />
        </div>
    );
};

export const TitleContent = () => {
    return (
        <div className="h-full min-w-min bg-gradient-to-b from-[#5d658d] to-[#f4c6d7] to-75% z-10">
            <div className="relative h-full aspect-[159/1234] -ml-2 xl:ml-0 mr-3">
                <Image
                    className="z-10"
                    src="/hero/main.webp"
                    alt="/hero/main"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="absolute left-2 bottom-[20%] w-[275%] aspect-[380/60]">
                    <Image
                        src="/hero/2nd-season.webp"
                        alt="/hero/2nd-season"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};
