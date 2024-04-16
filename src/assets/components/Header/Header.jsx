import Logo from './components/Logo';
import ApiInput from './components/ApiInput';
import Mode from './components/Mode';

import { memo } from 'react';

// App Component에 있는 API Key가 변경이 될 때마다 Header, 그 안에 있는 ApiInput Component가 Re-render이 되어
// memo로 해당 컴포넌트는 Re-render하지 않도록 설정
const Header = memo(function Header() {
    return (
        <header className="z-10 top-0 left-0 sticky w-screen md:h-[80px] shadow-xl flex flex-cols bg-gray-100 dark:bg-slate-700 z-">
            <Logo />
            <ApiInput />
            <Mode />
        </header>
    );
});

export default Header;
