import { ThemeContext } from '../../js/context/ThemeContext';
import { useContext } from 'react';

import LightMode from './Components/Images/LightMode';
import DarkMode from './Components/Images/DarkMode';

export default function Header({ onChangeApiKey, onChangeTheme }) {
    // Theme : 최상단에 선언한 State를 Context.Provider으로 내려줘서 사용.
    const theme = useContext(ThemeContext);

    // API Key를 입력하지 않은 경우 : border-rose-500 클래스 추가

    return (
        <header
            className="flex items-center h-14 px-4 border-b border-gray-200 sm:h-16 md:px-6 dark:border-gray-800 shadow-xl"
            data-id="2"
        >
            <div className="flex items-center gap-4 md:pl-10" data-id="3">
                <a className="text-xl font-semibold" data-id="7" href="#">
                    LCN
                </a>
            </div>
            <div className="flex-1 md:pl-20" data-id="7">
                <form className="" data-id="8">
                    <div className="relative" data-id="9">
                        <input
                            onChange={(e) => onChangeApiKey(e.target.value)}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                            placeholder="Stove API Key를 입력하세요."
                            data-id="11"
                            type="search"
                        />
                    </div>
                </form>
            </div>
            <div className="ml-auto flex items-center gap-2 md:gap-4" data-id="8">
                {/* Language Area */}
                <button
                    onClick={onChangeTheme}
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-lg"
                    data-id="13"
                >
                    {theme === 'dark' ? <LightMode /> : <DarkMode />}
                    <span className="sr-only" data-id="18">
                        Toggle dark mode
                    </span>
                </button>
            </div>
        </header>
        // </div>
    );
}
