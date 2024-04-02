import Header from './assets/components/Header/Header';
import Content from './assets/components/Content/Content';
import Footer from './assets/components/Footer/Footer';

import { ThemeContext } from './assets/js/ThemeContext';

import { useState } from 'react';

export default function App() {
    // Header : API KEY
    const [apiKey, setApiKey] = useState('');
    // Header : Dark / Light
    // TODO : 로컬스토리지에 값 가져와서 체크. 기본은 Dark
    const [theme, setTheme] = useState('dark');

    // 테마 변경 Function
    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'white' : 'dark');
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div
                id="v0-container"
                className="!visible transition-opacity duration-150 !opacity-100"
                style={{ visibility: 'hidden', opacity: 0 }}
            >
                <div className="flex flex-col h-screen" data-id="1">
                    <Header onChangeApiKey={setApiKey} onChangeTheme={changeTheme} />
                    <Content />
                    <Footer />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
