const Header = () => {
    return (
        <header className="z-50 top-0 sticky w-screen md:h-[80px] shadow-xl flex flex-cols bg-blue-100">
            <div className="flex place-items-center md:pl-10 md:pr-10">
                <a className="text-xl font-semibold" data-id="7" href="#">
                    LCN
                </a>
            </div>
            <div className="place-items-center flex flex-grow">
                <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                    placeholder="Stove API Key를 입력하세요."
                    data-id="11"
                    type="search"
                />
            </div>
            <div className="grid place-items-center">
                <button
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50  h-10 px-4 py-2 rounded-lg"
                    data-id="13"
                >
                    <img src="/image/DarkModeIcon.png" className="object-contain w-8" />
                </button>
            </div>
        </header>
    );
};

export default Header;
