const Warning = () => {
    return (
        <article>
            <div className="flex flex-col bg-gray-100 mx-5 my-5 rounded-xl">
                <div className="flex">
                    <div className="grid place-items-center pl-10">
                        <img src="/image/icon/WarningIcon.png" className="w-8 object-contain opacity-50" />
                    </div>
                    <div className="flex place-items-center p-5 gap-5 ">
                        <h1 className="text-xl font-bold">주의사항</h1>
                    </div>
                </div>
                <div className="flex flex-row pl-20 pb-5">
                    <ol className="list-inside list-disc">
                        <li>
                            검색은 <strong className="strongg-text-sky">1분에 100개 까지 가능</strong>합니다. ➡️ 1분
                            후에 100회로 재충전 되니 걱정마세요!
                        </li>
                        <li>
                            검색 중 <strong>"새로고침" 및 "뒤로가기"</strong>는 하지 말아주세요! ➡️ 닉네임을 하나씩
                            Stove API를 통해 검색하기 때문에 중간에 새로고침 혹은 뒤로가기를 클릭하면 1분당 검색할 수
                            있는 횟수가 소진될 수 있습니다.
                        </li>
                        <li>
                            닉네임은 한 번에 <strong>최대 100개</strong>까지만 입력이 가능합니다. ➡️ 100개 초과 시
                            100개까지만 검색됩니다.
                        </li>
                        <li>동일한 닉네임을 검색 시 자동으로 중복 제거 후 검색됩니다.</li>
                    </ol>
                </div>
            </div>
        </article>
    );
};

export default Warning;
