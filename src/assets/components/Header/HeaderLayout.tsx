interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
    return (
        <header className="fixed z-10 top-0 left-0 w-screen md:h-[80px] shadow-xl flex flex-cols bg-gray-100 dark:bg-slate-700 gap-3">
            {children}
        </header>
    );
};

export default Header;
