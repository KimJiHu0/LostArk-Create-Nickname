import { useState, useEffect } from 'react';

const Mode = () => {
    // theme
    const [theme, setTheme] = useState<string>('');

    // 테마 변경
    function changeTheme(propTheme: string) {
        if (propTheme === 'dark') document.querySelector('html')!.classList.add('dark');
        else document.querySelector('html')!.classList.remove('dark');
    }

    // 테마 변경 시
    const onClickMode = () => {
        setTheme((prev) => {
            const newTheme = prev === 'dark' ? 'light' : 'dark';
            changeTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    // mounted
    useEffect(() => {
        // 테마
        const localsotrageTheme: string = localStorage.getItem('theme') || 'light';
        setTheme((p) => {
            changeTheme(localsotrageTheme);
            return localsotrageTheme;
        });
    }, []);

    return (
        <div className="grid place-items-center">
            <button
                onClick={onClickMode}
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
