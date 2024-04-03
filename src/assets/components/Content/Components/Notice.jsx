import { useState } from 'react';

import Modal from '../../Modal/Modal';

export default function Notice() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="md:pt-10 flex flex-col gap-2" data-id="28">
                <div className="flex flex-col gap-10">
                    <div className="border-gray-700">
                        <h1 className="text-xl font-bold tracking-tighter sm:text-xl" data-id="29">
                            공지사항
                        </h1>
                        <p>
                            Stove API 발급하는 방법 -{' '}
                            <a onClick={openModal} className="cursor-pointer underline font-bold hover:text-blue-400">
                                바로가기
                            </a>
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tighter sm:text-xl" data-id="29">
                            사용법
                        </h1>
                        <ol className="list-inside list-decimal">
                            <li>
                                상단에 <b>Stove API Key</b>를 입력합니다. 발급 방법을 모르신다면 상단 공지사항에서
                                확안하시기 바랍니다.
                            </li>
                            <li>
                                검색하실 닉네임을 <b>"복사 & 붙여넣기"</b> 혹은 <b>"직접 입력"</b> 해주세요. 닉네임 간
                                구분은 띄어쓰기로 해주시기 바랍니다.
                            </li>
                            <li>
                                <b>"검색"</b> 버튼을 클릭하신 후 검색이 완료될 때까지 기다려주세요.
                            </li>
                            <li>검색이 완료된 닉네임 중 원하시는 닉네임을 골라서 사용하시면 됩니다.</li>
                        </ol>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tighter sm:text-xl" data-id="29">
                            공지사항
                        </h1>
                        <ol className="list-inside list-disc">
                            <li>
                                검색은 <b className="bg-text-sky">1분에 100개 까지 가능</b>합니다.
                            </li>
                            <li>
                                검색 중 <b>"새로고침" 및 "뒤로가기"</b>는 하지 말아주세요.
                            </li>
                            <li>
                                닉네임은 한 번에 <b>최대 100개</b>까지만 입력이 가능합니다. ( 100개 초과 시 100개까지만
                                검색됩니다. )
                            </li>
                            <li>동일한 닉네임을 검색 시 자동으로 중복 제거 후 검색됩니다.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalOpen} onClose={closeModal} />
        </>
    );
}
