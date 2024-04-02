export default function Modal({ isOpen, onClose }) {
    const closeModal = () => {
        // 모달 내부를 클릭해도 모달이 닫히지 않도록 이벤트 전파를 막습니다.
        event.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed z-50 inset-0 overflow-y-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div className="relative bg-white rounded-lg p-6 md:w-3/5 md:h-3/5 overflow-x-scroll" onClick={closeModal}>
                <div className="absolute top-0 right-0 md:pr-3 md:pt-3">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mt-6">
                    {/* 모달 내용 */}
                    <h2 className="text-xl font-semibold mb-4">Stove API Key 발급 방법</h2>
                    <ol className="list-inside list-decimal">
                        <li>
                            <a
                                href="https://developer-lostark.game.onstove.com/"
                                target="_blank"
                                className="cursor-pointer underline font-bold hover:text-blue-400"
                            >
                                LostArk API{' '}
                            </a>{' '}
                            홈페이지에 접속하여 로그인을 진행합니다.
                            <img src="/image/Lostark_Homepage.png" className="w-4/5" />
                        </li>
                        <li>
                            <b>Get Access To Lostark API</b> 를 클릭합니다.
                            <img src="/image/Lostark_Login.png" className="w-4/5" />
                        </li>
                        <li>
                            <b>Create a New Client</b> 를 클릭합니다.
                            <img src="/image/Lostark_CreateClient.png" className="w-4/5" />
                        </li>
                        <li>
                            Client를 생성할 Form을 입력합니다. Client Name은 필수 사항입니다. 입력을 다 했다면 Create를
                            클릭합니다.
                            <img src="/image/Lostark_Client_Form.png" className="w-4/5" />
                        </li>
                        <li>
                            생성한 Client에서 상단에 API Key가 생성되었습니다. 이제 이 API KEY를 복사하여 입력하면
                            됩니다.
                            <img src="/image/Lostark_Copy_APIKEY.png" className="w-4/5" />
                        </li>
                    </ol>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
