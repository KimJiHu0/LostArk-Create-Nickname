const Alert = ({ alertMessage, onAlertClose }) => {
    // pacity-0 transform -translate-y-full scale-150  relative w-10/12 md:w-1/2 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300
    return (
        <div className="fixed z-50 flex items-center justify-center">
            <div className="fixed left-5 top-10 flex flex-col bg-white dark:bg-slate-700 dark:border-black dark:text-gray-300 rounded-lg">
                <div className="flex justify-between md:p-2">
                    <span className="flex items-center text-lg font-semibold">{alertMessage}</span>
                    <button onClick={onAlertClose}>
                        <img src="/image/icon/CloseIcon.png" className="p-2 w-8 object-contain opacity-50" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
