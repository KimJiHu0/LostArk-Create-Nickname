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
                {/* 1. 1분에 100개의 닉네임을 검색 가능 2. 검색하는 도중 새로고침은 지양한다는 문구 추가 3. 닉네임 입력
                    칸 글자 제한 4. 검색 가능 횟수 표기 */}
                <h1 className="text-xl font-bold tracking-tighter sm:text-xl" data-id="29">
                    공지사항
                </h1>
                <ol className="list-inside list-decimal">
                    <li>
                        Stove API 발급하는 방법 -{' '}
                        <a onClick={openModal} className="cursor-pointer underline font-bold hover:text-blue-400">
                            바로가기
                        </a>
                    </li>
                    <li>검색은 1분에 100개 까지 가능합니다.</li>
                    <li>검색 중 새로고침 및 뒤로가기는 하지 말아주세요.</li>
                    <li>닉네임은 최대 100개까지만 입력이 가능합니다. ( 100개 초과 시 100개까지만 검색됩니다. )</li>
                    <li>동일한 닉네임을 검색 시 자동으로 중복 제거 후 검색됩니다.</li>
                </ol>
            </div>
            <Modal isOpen={modalOpen} onClose={closeModal} />
        </>
    );
}
