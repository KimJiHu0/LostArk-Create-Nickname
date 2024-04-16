const Alert = ({ onAlertClose }) => {
    // pacity-0 transform -translate-y-full scale-150  relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300
    return (
        <div
            onClick={onAlertClose}
            className="fixed w-full h-full top-0 z-50 bg-opacity-50 flex items-center justify-center bg-gray-300"
        >
            <div className="fixed top-10 flex flex-col bg-white dark:bg-slate-700 dark:border-black dark:text-gray-300 rounded-lg">
                <div className="flex justify-between md:p-2 border-b border-gray-200 dark:border-gray-600 shadow-lg">
                    <span className="text-lg font-semibold md:pl-2">경고</span>
                    <button onClick={onAlertClose}>
                        <img src="/image/icon/CloseIcon.png" className="p-2 w-8 object-contain opacity-50" />
                    </button>
                </div>
                <div className="md:p-5 flex flex-col gap-10 overflow-x-scroll">
                    API Key 혹은 검색할 닉네임은 필수로 입력하셔야 합니다.
                </div>
            </div>
        </div>
    );
};

export default Alert;
