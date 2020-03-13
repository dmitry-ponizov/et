import { useState, useEffect } from 'react';

export const useWindowSize = () => {
    const isClient = typeof window === 'object';
    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }
    const [windowSize, setWindowSize] = useState(getSize);
    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return windowSize;
}

export const useOffline= () => {
    const [status, setStatus] = useState(!navigator.onLine);

    useEffect(() => {
        function handleOffline() {
            setStatus(!navigator.onLine);
        }

        window.addEventListener('online', handleOffline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOffline);
            window.removeEventListener('offline', handleOffline);
        }
    });

    return status;
}
