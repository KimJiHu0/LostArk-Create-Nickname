const Guide = () => {
    return (
        <article>
            <div className="flex flex-col bg-gray-100 mx-5 my-5 rounded-xl">
                <div className="flex">
                    <div className="grid place-items-center pl-10">
                        <img src="/image/icon/GuideIcon.png" className="w-8 object-contain opacity-50" />
                    </div>
                    <div className="flex place-items-center p-5 gap-5 ">
                        <h1 className="text-xl font-bold">사용법</h1>
                    </div>
                </div>
                <div className="flex flex-row pl-20 pb-5">
                    <ol className="list-inside list-decimal">
                        <li>
                            상단에 <strong>Stove API Key</strong>를 입력합니다. 발급 방법을 모르신다면 상단 공지사항에서
                            확안하시기 바랍니다.
                        </li>
                        <li>
                            검색하실 닉네임을 <strong>"복사 & 붙여넣기"</strong> 혹은 <strong>"직접 입력"</strong>{' '}
                            해주세요. 닉네임 간 구분은 띄어쓰기로 해주시기 바랍니다.
                        </li>
                        <li>
                            <strong>"검색"</strong> 버튼을 클릭하신 후 검색이 완료될 때까지 기다려주세요.
                        </li>
                        <li>검색이 완료된 닉네임 중 원하시는 닉네임을 골라서 사용하시면 됩니다.</li>
                    </ol>
                </div>
            </div>
        </article>
    );
};

export default Guide;
