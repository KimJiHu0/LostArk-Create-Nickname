interface SubmitProps {
    inputDisabled: boolean;
    onClickSubmit: (flag: boolean) => void;
}

const Submit = ({ inputDisabled, onClickSubmit }: SubmitProps) => {
    return (
        <div className="grid place-items-center">
            <button
                className="inline-flex items-center border text-black dark:text-white justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50  h-10 px-4 py-2 rounded-lg"
                onClick={() => onClickSubmit(!inputDisabled)}
            >
                {inputDisabled ? '수정' : '적용'}
            </button>
        </div>
    );
};

export default Submit;
