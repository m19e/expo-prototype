import { useEffect, useState } from "react";

export const useUA = () => {
    const [iOS, setIOS] = useState(true);
    useEffect(() => {
        setIOS(
            /(iphone|ipad|ipod|mac)/.test(navigator.userAgent.toLowerCase()),
        );
    }, []);

    return { iOS };
};
