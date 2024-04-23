interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
    return (
        <header className="z-10 top-0 left-0 sticky w-screen md:h-[80px] shadow-xl flex flex-cols bg-gray-100 dark:bg-slate-700 z-">
            {children}
        </header>
    );
};

export default Header;
