import React, { useEffect, useState } from 'react';

const useDeviceWidth = () => {
    const [isMobileWidth, setIsMobileWidth] = useState<boolean>(false);
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        function handleResize() {
            setWindowSize(window.innerWidth);
            if (window.innerWidth <= 991) {
                setIsMobileWidth(true);
            } else {
                setIsMobileWidth(false);
            }
        }
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isMobileWidth, windowSize };
};

export default useDeviceWidth;
