import MenuIcon from './components/MenuIcon';
import Logo from './components/Logo';
import ApiInput from './components/ApiInput';
import Submit from './components/Submit';
import Mode from './components/Mode';

const Header = () => {
    return (
        <header className="fixed z-10 top-0 left-0 w-screen md:h-[80px] shadow-xl flex flex-cols bg-gray-100 dark:bg-slate-700 gap-3">
            <MenuIcon />
            <Logo />
            <ApiInput />
            <Submit />
            <Mode />
        </header>
    );
};

export default Header;
