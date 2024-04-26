interface AlertProps {
    alertMessage: string;
    onAlertClose: () => void;
}

const Alert = ({ alertMessage, onAlertClose }: AlertProps) => {
    return (
        <div className="fixed z-50 flex items-center justify-center">
            <div className="fixed left-5 top-10 flex flex-col bg-white dark:bg-slate-500 dark:border-black dark:text-gray-300 rounded-lg">
                <div className="flex justify-between md:p-2">
                    <span className="flex items-center text-lg font-semibold px-3 text-red-300">{alertMessage}</span>
                    <button onClick={onAlertClose}>
                        <img src="/image/icon/CloseIcon.png" className="p-2 w-8 object-contain opacity-50" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
