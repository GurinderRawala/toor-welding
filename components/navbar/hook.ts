import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect } from 'react';

export const useCloseMenuOnRouteChange = (setToggleMode: Dispatch<SetStateAction<boolean>>) => {
    const { events } = useRouter();

    useEffect(() => {
        const closeMenu = () => setToggleMode(false);
        events.on('routeChangeComplete', closeMenu);
        return () => {
            events.off('routeChangeComplete', closeMenu);
        };
    }, [events, setToggleMode]);
};