const Modal = () => {
    const onBgClick = (e) => {
        // 모달 내부를 클릭해도 모달이 닫히지 않도록 이벤트 전파를 막습니다.
        e.stopPropagation();
    };
    return (
        <div
            className="fixed z-50 inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
            onClick={onBgClick}
        >
            <div className="flex flex-col bg-white rounded-lg md:w-4/5 md:h-4/5">
                <div className="flex justify-between md:p-2 border-b border-gray-200 shadow-lg">
                    <span className="text-lg font-semibold md:pl-2">Stove API Key 발급 방법</span>
                    <button>
                        <img src="/image/icon/CloseIcon.png" className="p-2 w-8 object-contain opacity-50" />
                    </button>
                </div>
                <div className="md:p-5 flex flex-col gap-10 overflow-x-scroll">
                    <div className="flex flex-col gap-2 ">
                        <div className="flex flex-col my-auto items-center">
                            <img src="/image/guide/Lostark_Homepage.png" className="w-4/5" />
                        </div>
                        <div className="bg-gray-300 rounded-lg flex flex-col my-auto md:p-2">
                            <span>
                                <a
                                    href="https://developer-lostark.game.onstove.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer underline font-bold hover:text-blue-500"
                                >
                                    로스트아크 API 홈페이지
                                </a>
                                에 접속하여 로그인을 진행합니다.
                            </span>
                        </div>
                        <div className="flex flex-col my-auto items-center">
                            <img src="/image/guide/Lostark_Homepage.png" className="w-4/5" />
                        </div>
                        <div className="bg-gray-300 rounded-lg flex flex-col my-auto md:p-2">
                            <span>
                                <a
                                    href="https://developer-lostark.game.onstove.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer underline font-bold hover:text-blue-500"
                                >
                                    로스트아크 API 홈페이지
                                </a>
                                에 접속하여 로그인을 진행합니다.
                            </span>
                        </div>
                        <div className="flex flex-col my-auto items-center">
                            <img src="/image/guide/Lostark_Homepage.png" className="w-4/5" />
                        </div>
                        <div className="bg-gray-300 rounded-lg flex flex-col my-auto md:p-2">
                            <span>
                                <a
                                    href="https://developer-lostark.game.onstove.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer underline font-bold hover:text-blue-500"
                                >
                                    로스트아크 API 홈페이지
                                </a>
                                에 접속하여 로그인을 진행합니다.
                            </span>
                        </div>
                        <div className="flex flex-col my-auto items-center">
                            <img src="/image/guide/Lostark_Homepage.png" className="w-4/5" />
                        </div>
                        <div className="bg-gray-300 rounded-lg flex flex-col my-auto md:p-2">
                            <span>
                                <a
                                    href="https://developer-lostark.game.onstove.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer underline font-bold hover:text-blue-500"
                                >
                                    로스트아크 API 홈페이지
                                </a>
                                에 접속하여 로그인을 진행합니다.
                            </span>
                        </div>
                        <div className="flex flex-col my-auto items-center">
                            <img src="/image/guide/Lostark_Homepage.png" className="w-4/5" />
                        </div>
                        <div className="bg-gray-300 rounded-lg flex flex-col my-auto md:p-2">
                            <span>
                                <a
                                    href="https://developer-lostark.game.onstove.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer underline font-bold hover:text-blue-500"
                                >
                                    로스트아크 API 홈페이지
                                </a>
                                에 접속하여 로그인을 진행합니다.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="flex justify-end">
                        <button className="border p-3 md:w-20 rounded-xl bg-stone-400 font-bold">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
