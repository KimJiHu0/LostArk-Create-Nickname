const Loadding = ({ isShow, searchNicks }) => {
    // if (!isShow) return null;
    console.log('Loadding Render');
    return (
        <div className="fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="flex items-center space-x-4">
                <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 4.418 3.582 8 8 8v-4zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291C18.627 6.727 24 12.1 24 12h-4c0-4.418-3.582-8-8-8v4zM6.292 6.292a8 8 0 010 11.416l1.414-1.414a6 6 0 000-8.498l-1.414-1.414zM17.708 17.708a8 8 0 010-11.416l-1.414 1.414a6 6 0 000 8.498l1.414 1.414z"
                    ></path>
                </svg>
                <span className="text-white">검색 중...</span>
            </div>
        </div>
    );
};

export default Loadding;
