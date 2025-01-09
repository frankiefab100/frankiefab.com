import { useEffect } from 'react';

export const useSubstackEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://substackapi.com/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
};
