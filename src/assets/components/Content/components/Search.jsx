import Loadding from '../../Loadding/Loadding';
import Alert from '../../Common/Alert';
import Notification from '../../Common/Notification';

import { useState, useContext, useReducer, useEffect } from 'react';

import { rootContext } from '../../../js/contexts/rootContext';
import { searchNickNameReducer } from '../../../js/reducers/reducer';
import api from '../../../js/api/api';

const Search = () => {
    // apiKey Context
    const { apiKey } = useContext(rootContext);
    // 검색할 닉네임 Reducer
    const [searchNickNames, searchNickNamesDispatch] = useReducer(searchNickNameReducer, []);
    // 검색로딩
    const [isAlert, setIsAlert] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    // 버튼 클릭 시
    const onSearchButton = () => {
        console.log(apiKey, searchNickNames);
        if (!apiKey || searchNickNames.length === 0) {
            setIsAlert(true);
            return false;
        }

        setIsNotification(true);
        searchNickNames.forEach((srNick, index) => {
            api(apiKey, srNick.nickName).then((result) => {
                searchNickNamesDispatch({
                    type: 'srNicks_search',
                    nicks: {
                        index: srNick.index,
                        using: !result.data ? true : false,
                        searchComplete: true,
                    },
                });
            });
        });
    };

    // 중복체크 함수
    const duplicateCheck = (nicknamesText) => {
        return [
            ...new Set(
                nicknamesText
                    .replace(/\s{2,}/gi, ' ')
                    .trim()
                    .split(' '),
            ),
        ];
    };

    // 검색 닉네임 변경 시
    const onChangeSearchNicks = (e) => {
        setIsNotification(false);
        // // 중복체크 후 검색 닉네임 List
        const srAbleNicks =
            e.target.value !== ''
                ? duplicateCheck(e.target.value).map((el, index) => ({
                      index: index,
                      using: false,
                      searchComplete: false,
                      nickName: el,
                  }))
                : [];

        searchNickNamesDispatch({
            type: 'srNicks_change',
            nickNameList: srAbleNicks,
        });
    };

    return (
        <main>
            {isAlert ? <Alert onAlertClose={() => setIsAlert(false)} /> : null}
            {isNotification ? <Notification srNicks={searchNickNames} /> : null}
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-3 p-5">
                    <label htmlFor="textarea1" className="block text-sm font-medium text-gray-900 dark:text-white">
                        검색할 닉네임 : {searchNickNames.length}개
                    </label>
                    <textarea
                        id="textarea1"
                        className="flex w-full rounded-md border border-dashed border-black dark:border-white bg-background dark:bg-slate-700 dark:text-gray-300 px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px] h-[20rem] text-base resize-none"
                        placeholder="검색할 닉네임을 띄어쓰기로 구분하여 입력해주세요."
                        onChange={onChangeSearchNicks}
                    />
                    <button
                        className="w-full bg-gray-500 dark:bg-slate-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white"
                        onClick={onSearchButton}
                    >
                        검색
                    </button>
                </div>
                <div className="flex flex-col gap-3 p-5">
                    <label htmlFor="textarea2" className="block text-sm font-medium text-gray-900 dark:text-white">
                        사용 가능한 닉네임 : {searchNickNames.filter((el) => el.using).length} 개
                    </label>
                    <textarea
                        id="textarea2"
                        className="flex w-full rounded-md border border-dashed border-black dark:border-white bg-background dark:bg-slate-700 dark:text-gray-300 px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px] h-[20rem] text-base resize-none"
                        disabled
                        placeholder="사용 가능한 닉네임입니다."
                        value={searchNickNames
                            .filter((el) => el.using)
                            .map((el) => el.nickName)
                            .join(' ')}
                    />
                </div>
            </div>
        </main>
    );
};

export default Search;
