import { TwitterIcon } from "./icons/Twitter";

const getURL = (text: string) =>
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(text);

export const TwitterShareButton = () => {
    return (
        <a
            href={getURL("TwinkleHappySharing!\-2nd season-")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 gap-1.5 bg-[#0F1419] text-white rounded-full transition-opacity hover:opacity-80"
        >
            <TwitterIcon className="w-4 h-4" />
            <span className="leading-5 text-xs">
                共有する
            </span>
        </a>
    );
};
