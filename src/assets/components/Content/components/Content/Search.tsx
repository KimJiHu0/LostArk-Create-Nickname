import Notification from '../../../Common/Notification';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nicknameChange, nicknameSearch, nicknameReset } from '../../../../ts/reducer/searchNickNameReducer';
import api from '../../../../ts/api/api';

interface SearchProps {
    setIsAlert: (flag: boolean) => void;
    setAlertMessage: (message: string) => void;
}

interface SearchNickName {
    index: number;
    using: boolean;
    searchComplete: boolean;
    nickName: string;
}

const Search = ({ setIsAlert, setAlertMessage }: SearchProps) => {
    const dispatch = useDispatch();
    // API KEY Redux
    const apiKeyState = useSelector(
        (state: { apikeyReducer: { apiKey: string; isDisabled: boolean } }) => state.apikeyReducer,
    );
    // Search NickName Redux
    const searchNickNames = useSelector(
        (state: { searchNickNameReducer: SearchNickName[] }) => state.searchNickNameReducer,
    );

    // 검색중 Notification
    const [isNotification, setIsNotification] = useState<boolean>(false);
    // textarea, search button disabled
    const [isDisabled, setIsDisabled] = useState(false);

    // 검색 완료될 때
    useEffect(() => {
        if (searchNickNames.length === searchNickNames.filter((el) => el.searchComplete).length) {
            setIsDisabled(false);
            setIsAlert(false);
        }
    }, [searchNickNames]);

    const errorMessageSet = (status: number, statusText: string) => {
        setIsAlert(true);

        let message: string = `[${status} : ${statusText}]`;

        switch (status) {
            case 400:
                message +=
                    'Api Key 혹은 검색할 닉네임을 제대로 입력했는지 확인 후 같은 에러가 반복된다면 관리자에게 문의 바랍니다.';
                break;
            case 401:
                message += 'Api Key가 올바르지 않습니다.';
                break;
            case 404:
                message += '요청한 URL이 올바르지 않습니다. 관리자에게 문의 바랍니다.';
                break;
            case 429:
                message += '1분당 검색 가능한 횟수를 소진하였습니다. 잠시만 기다려주시면 재검색을 시도합니다.';
                break;
            default:
                message += '닉네임 검색 중 에러가 발생했습니다. 관리자에게 문의 바랍니다.';
        }
        setAlertMessage(message);
    };

    const searchApi = async (searchList: SearchNickName[]) => {
        let pass: boolean = true;
        let status: number = 0;
        let statusText: string = '';

        // 우측 상단 Notification Show
        setIsNotification(true);
        // text area, button disabled
        setIsDisabled(true);

        // 검색할 닉네임만큼
        for (let i = 0; i < searchList.length; i++) {
            // 실패 시 반복문 종료
            if (!pass) {
                setIsAlert(true);
                if (status !== 429) {
                    setIsNotification(false);
                    setIsDisabled(false);
                }
                return false;
            }
            // 아닐 땐 계속 검색 진행
            await api(apiKeyState.apiKey, searchList[i].nickName)
                .then((result) => {
                    dispatch(
                        nicknameSearch({
                            index: searchList[i].index,
                            using: !result.data ? true : false,
                            searchComplete: true,
                            nickName: searchList[i].nickName,
                        }),
                    );
                })
                .catch((e) => {
                    // pass를 false로 변경하여 Loop 종료
                    pass = false;
                    // 에러 Code, Message
                    status = e.response.status;
                    statusText = e.response.statusText;

                    // 에러 Alert 띄우기
                    errorMessageSet(status, statusText);

                    // 429일 때에는 retryTime만큼 쉬었다가 재검색
                    if (status === 429) {
                        // 닉네임 검색 실패한 index, NickName, retry time
                        let failIndex: number = searchList[i].index;
                        let retryTime: number = Number(e.response.headers['retry-after']);
                        const retryList = searchNickNames.filter((el: SearchNickName) => el.index >= failIndex);
                        setTimeout(async () => {
                            await searchApi(retryList);
                        }, retryTime * 1000);
                    }
                });
        }
    };

    // 닉네임 검색 함수
    const searchNickName = async (searchList: SearchNickName[]) => {
        const filterNicknames = searchList.filter((el) => 2 <= el.nickName.length && el.nickName.length <= 12);
        await searchApi(filterNicknames);
    };

    const showAlert = (isShow: boolean, message: string) => {
        setIsAlert(isShow);
        setAlertMessage(message);
    };

    // 버튼 클릭 시
    const onSearchButton = async () => {
        // API Key 혹은 닉네임을 검색하지 않았을 때 검색 중지
        if (!apiKeyState.apiKey) {
            showAlert(true, 'API Key를 입력해주세요.');
            return false;
        } else if (!apiKeyState.isDisabled) {
            showAlert(true, 'API Key를 적용 해주세요.');
            return false;
        } else if (searchNickNames.length === 0) {
            showAlert(true, '검색할 닉네임을 입력해주세요.');
            return false;
        } else {
            showAlert(false, '');
            // 검색할 닉네임을 변경하지 않고 검색을 바로누를 경우를 대비하여 searchComplete의 value를 false로 Reset
            dispatch(nicknameReset());
            // 검색
            searchNickName(searchNickNames);
        }
    };

    // 중복체크 함수
    const duplicateCheck = (nicknamesText: string) => {
        return [
            ...new Set(
                nicknamesText
                    .replace(/\s{2,}/gi, ' ')
                    .trim()
                    .split(' '),
            ),
        ];
    };

    // 글자 길이 체크 함수 ( 2 - 12 글자 닉네임만 담음 )
    const nicknameRangeCheck = (searchNicknames: string[]) => {
        return searchNicknames.filter((el) => 2 <= el.length && el.length <= 12);
    };

    // 검색 닉네임 변경 시
    const onChangeSearchNicks = (nickNames: string) => {
        // 우측 상단 Notification hide
        setIsNotification(false);

        // // 중복체크 후 검색 닉네임 List
        const srAbleNicks =
            nickNames !== ''
                ? nicknameRangeCheck(duplicateCheck(nickNames)).map((el: string, index: number) => ({
                      index: index,
                      using: false,
                      searchComplete: false,
                      nickName: el,
                  }))
                : [];

        // searchNickName Set
        dispatch(nicknameChange(srAbleNicks));
    };

    return (
        <main>
            {isNotification ? (
                <Notification searchNickNames={searchNickNames} onCloseNotification={() => setIsNotification(false)} />
            ) : null}
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-3 p-5">
                    <label htmlFor="textarea1" className="block text-sm font-medium text-gray-900 dark:text-white">
                        검색할 닉네임 : {searchNickNames.length}개
                    </label>
                    <textarea
                        defaultValue={searchNickNames.map((el) => el.nickName).join(' ')}
                        id="textarea1"
                        className="flex w-full rounded-md border border-dashed border-black dark:border-white bg-background dark:bg-slate-700 dark:text-gray-300 px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px] h-[20rem] text-base resize-none"
                        placeholder="검색할 닉네임을 띄어쓰기로 구분하여 입력해주세요."
                        onChange={(e) => {
                            onChangeSearchNicks(e.target.value);
                        }}
                        disabled={isDisabled}
                    />
                    <button
                        className={
                            isDisabled
                                ? 'w-full bg-gray-500 dark:bg-slate-600 px-4 py-2 rounded-md text-white'
                                : 'w-full bg-gray-500 dark:bg-slate-600 px-4 py-2 rounded-md text-white hover:bg-gray-700'
                        }
                        // className="w-full bg-gray-500 darkK:bg-slate-600 px-4 py-2 rounded-md text-white"
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
