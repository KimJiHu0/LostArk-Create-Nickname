const Mode = () => {
    return (
        <div className="grid place-items-center">
            <button
                className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50  h-10 px-4 py-2 rounded-lg"
                data-id="13"
            >
                {/* TODO: Dark / Light 모드에 따라 아이콘이 바뀌도록 src를 바꿔줘야한다. */}
                <img src="/image/icon/DarkModeIcon.png" className="w-8 object-contain opacity-50" />
            </button>
        </div>
    );
};

export default Mode;
