import { useState, useEffect } from 'react';

const Mode = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') document.querySelector('html').classList.add('dark');
        else document.querySelector('html').classList.remove('dark');
    }, [theme]);

    return (
        <div className="grid place-items-center">
            <button
                onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50  h-10 px-4 py-2 rounded-lg"
                data-id="13"
            >
                <img
                    src={theme === 'dark' ? '/image/icon/LightModeIcon.png' : '/image/icon/DarkModeIcon.png'}
                    className="w-8 object-contain opacity-50"
                />
            </button>
        </div>
    );
};

export default Mode;
