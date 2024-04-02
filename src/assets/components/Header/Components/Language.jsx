// 현재 사용 X
export default function Language() {
    return (
        <>
            <div className="relative inline-block text-sm rounded-lg" data-id="9">
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 h-8 w-20 rounded-lg"
                    data-id="10"
                >
                    English
                </button>
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 h-8 w-20 rounded-lg"
                    data-id="11"
                >
                    中文
                </button>
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 h-8 w-20 rounded-lg"
                    data-id="12"
                >
                    Español
                </button>
            </div>
        </>
    );
}
