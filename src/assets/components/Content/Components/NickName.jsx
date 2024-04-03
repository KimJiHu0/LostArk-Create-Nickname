// axios 의 인스턴스를 생성
import Loadding from '../../Loadding/Loadding';

import api from '../../../js/api/api';
import { useState } from 'react';

export default function NickName({ apiKey, nicknames, onChangeNickNames }) {
    // 검색중이라는 Loadding
    const [isShow, setIsShow] = useState(false);

    // 닉네임 검색 버튼 클릭
    const onSearchButton = async () => {};

    return (
        <>
            <div className="grid gap-4" data-id="31">
                <div className="grid grid-cols-2 gap-4" data-id="32">
                    <div className="flex flex-col gap-2" data-id="33">
                        <label htmlFor="textarea1" className="block text-sm font-medium text-gray-900" data-id="34">
                            검색할 닉네임 : {nicknames.length}개
                        </label>
                        <textarea
                            id="textarea1"
                            className="h-4/5 flex rounded-md border border-dashed border-black dark:border-white bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px] h-[20rem] text-base resize-none"
                            placeholder="검색할 닉네임을 띄어쓰기로 구분하여 입력해주세요."
                            data-id="35"
                            onChange={(e) => onChangeNickNames(e.target.value)}
                        />
                        <button
                            onClick={onSearchButton}
                            className="bg-gray-500 hover:bg-gray-700 active:bg-green-800 px-4 py-2 rounded-md text-white"
                        >
                            검색
                        </button>
                    </div>
                    <div className="flex flex-col gap-2" data-id="36">
                        <label htmlFor="textarea2" className="block text-sm font-medium text-gray-900" data-id="37">
                            사용 가능한 닉네임 : {nicknames.filter((el) => el.available).length} 개
                        </label>
                        <textarea
                            id="textarea2"
                            className="h-4/5 flex w-full rounded-md border border-dashed border-black dark:border-white bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px] h-[20rem] text-base resize-none"
                            disabled
                            placeholder="사용 가능한 닉네임입니다."
                            data-id="38"
                        />
                    </div>
                </div>
            </div>
            <Loadding show={isShow} />
        </>
    );
}