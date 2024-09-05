import { useEffect, useState } from "react";

/**
 * useMobile is a custom hook that detects if the user's screen width is for a mobile device.
 * @returns {object} An object containing:
 *  - isMobile {boolean}: true if the screen width is less than 768px.
 */

const useMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { isMobile };
};

export default useMobile;
