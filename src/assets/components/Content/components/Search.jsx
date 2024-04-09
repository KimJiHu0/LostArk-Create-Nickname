const Search = () => {
    return (
        <main>
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-3 p-5">
                    <label htmlFor="textarea1" className="block text-sm font-medium text-gray-900">
                        검색할 닉네임 : 100개
                    </label>
                    <textarea
                        id="textarea1"
                        className="flex w-full rounded-md border border-dashed border-black dark:border-white bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px] h-[20rem] text-base resize-none"
                        placeholder="검색할 닉네임을 띄어쓰기로 구분하여 입력해주세요."
                    />
                    <button className="w-full bg-gray-500 hover:bg-gray-700 px-4 py-2 rounded-md text-white">
                        검색
                    </button>
                </div>
                <div className="flex flex-col gap-3 p-5">
                    <label htmlFor="textarea2" className="block text-sm font-medium text-gray-900">
                        사용 가능한 닉네임 : 0 개
                    </label>
                    <textarea
                        id="textarea2"
                        className="flex w-full rounded-md border border-dashed border-black dark:border-white bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px] h-[20rem] text-base resize-none"
                        disabled
                        placeholder="사용 가능한 닉네임입니다."
                    />
                </div>
            </div>
        </main>
    );
};

export default Search;
