import { useEffect, useRef, useState } from 'react';

const useSticky = () => {
    const stickyRef = useRef(null);
    const [sticky, setSticky] = useState(false);
    const [stickyColor, setStickyColor] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if (!stickyRef.current) {
            return;
        }
        setOffset(stickyRef.current.offsetTop);
    }, [stickyRef, setOffset]);

    useEffect(() => {
        const handleScroll = () => {
            if (!stickyRef.current) {
                return;
            }

            setSticky(window.scrollY > offset);
            setStickyColor(window.scrollY > offset + 380);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setSticky, setStickyColor, stickyRef, offset]);
    return { stickyRef, sticky, stickyColor };
};

export default useSticky;
