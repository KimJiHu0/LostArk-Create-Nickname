import Alert from '../../Common/Alert';
import Notification from '../../Common/Notification';

import { useState, useContext, useReducer } from 'react';

import { rootContext } from '../../../js/contexts/rootContext';
import { searchNickNameReducer } from '../../../js/reducers/reducer';
import api from '../../../js/api/api';

const Search = () => {
    // apiKey Context
    const { apiKey } = useContext(rootContext);
    // 검색할 닉네임 Reducer
    const [searchNickNames, searchNickNamesDispatch] = useReducer(searchNickNameReducer, []);
    // Alert, Notification, textarea dsabled
    const [isAlert, setIsAlert] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    // 검색도중 실패 시 재검색
    const searchRetry = (failObject) => {
        console.log('failObject : ', failObject);
        // failObject = index, searchNickname

        const retryList = searchNickNames.filter((el) => el.index >= failObject.index);

        setTimeout(async () => {
            let pass = true;
            // 이거 반복 돌건데
            for (let i = 0; i < retryList.length; i++) {
                // 실패 시 반복문 종료
                if (!pass) return false;
                // 아닐 땐 계속 검색 진행
                await api(apiKey, retryList[i].nickName)
                    .then((result) => {
                        searchNickNamesDispatch({
                            type: 'srNicks_search',
                            nicks: {
                                index: retryList[i].index,
                                using: !result.data ? true : false,
                                searchComplete: true,
                            },
                        });
                    })
                    .catch((e) => {
                        // 에러 발생 시
                        pass = false;
                        failObject.index = retryList[i].index;
                        failObject.failNickName = retryList[i].nickName;
                        searchRetry(failObject);
                    });
            }
            setIsDisabled(false);
        }, Number(failObject.retryTime) * 1000);
    };

    // 닉네임 검색 함수
    const searchNickName = async (searchList) => {
        // searchObject : [{index, search nickName}, ...]

        let pass = true;
        let failObject = {};

        // 이거 반복 돌건데
        for (let i = 0; i < searchList.length; i++) {
            // 실패 시 반복문 종료
            if (!pass) return false;
            // 아닐 땐 계속 검색 진행
            await api(apiKey, searchList[i].nickName)
                .then((result) => {
                    searchNickNamesDispatch({
                        type: 'srNicks_search',
                        nicks: {
                            index: searchList[i].index,
                            using: !result.data ? true : false,
                            searchComplete: true,
                        },
                    });
                })
                .catch((e) => {
                    // 에러 발생 시
                    pass = false;
                    failObject.index = searchList[i].index;
                    failObject.failNickName = searchList[i].nickName;
                    failObject.retryTime = e.response.headers['retry-after'];
                    searchRetry(failObject);
                });
        }
        setIsDisabled(false);

        return failObject;
    };

    // 버튼 클릭 시
    const onSearchButton = async () => {
        // API Key 혹은 닉네임을 검색하지 않았을 때 검색 중지
        if (!apiKey || searchNickNames.length === 0) {
            setIsAlert(true);
            return false;
        }

        // 우측 상단 Notification Show
        setIsNotification(true);
        // text area, button disabled
        setIsDisabled(true);

        // 검색할 닉네임을 Loop 돌며 API 통신

        // 검색할 닉네임을 변경하지 않고 검색을 바로누를 경우, searchComplete Reset
        searchNickNamesDispatch({
            type: 'srNicks_reset',
        });

        // 검색
        searchNickName(searchNickNames);
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
        // 우측 상단 Notification hide
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

        // searchNickName Set
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
                        disabled={isDisabled}
                    />
                    <button
                        className={
                            isDisabled
                                ? 'w-full bg-gray-500 dark:bg-slate-600 px-4 py-2 rounded-md text-white'
                                : 'w-full bg-gray-500 dark:bg-slate-600 px-4 py-2 rounded-md text-white hover:bg-gray-700'
                        }
                        // className="w-full bg-gray-500 dark:bg-slate-600 px-4 py-2 rounded-md text-white"
                        onClick={onSearchButton}
                        disabled={isDisabled}
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
