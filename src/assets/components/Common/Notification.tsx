interface searchNickNameType {
    index: number;
    using: boolean;
    searchComplete: boolean;
    nickName: string;
}
interface NotificationProps {
    srNicks: searchNickNameType[] | [];
    onCloseNotification: () => void;
}

const Notification = ({ srNicks, onCloseNotification }: NotificationProps) => {
    const searchingNicks = srNicks.length;
    const searchCompleteNicks = srNicks.filter((el) => el.searchComplete).length;
    const status = searchCompleteNicks === searchingNicks ? true : false;

    return (
        <div className="fixed top-0 right-0 z-50 flex items-center justify-center">
            <div className="fixed top-10 right-5 flex flex-col bg-white text-black dark:bg-slate-700 dark:text-gray-300 rounded-3xl border">
                <div className="flex justify-between items-center p-3 border-gray-200 dark:border-gray-600">
                    {status ? (
                        <span className="pl-2 text-lg font-semibold">
                            {searchCompleteNicks} / {searchingNicks} 검색 완료
                        </span>
                    ) : (
                        <>
                            <svg
                                className="animate-spin h-5 w-5 items-center"
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
                            <span className="pl-2 text-lg font-semibold">
                                {searchCompleteNicks} / {searchingNicks} 검색 중...
                            </span>
                        </>
                    )}
                    <button onClick={onCloseNotification}>
                        <img src="/image/icon/CloseIcon.png" className="p-2 w-8 object-contain opacity-50" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notification;
