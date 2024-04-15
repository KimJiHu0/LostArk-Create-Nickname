import { useContext, useReducer } from 'react';
import { rootContext } from '../../../js/contexts/rootContext';
import { searchNickNameReducer } from '../../../js/reducers/reducer';

const Search = () => {
    // apiKey Context
    const { apiKey } = useContext(rootContext);
    // 검색할 닉네임 Reducer
    const [searchNickNames, searchNickNamesDispatch] = useReducer(searchNickNameReducer, []);

    // 검색할 닉네임 개수
    const srNicks = searchNickNames.length;
    // 사용 가능한 닉네임 개수
    const usingSrNicks = searchNickNames.filter((el) => el.using).length;
    // 사용 가능 닉네임 리스트
    const usingNicksList = searchNickNames
        .filter((el) => el.using)
        .map((el) => el.nickName)
        .join(' ');

    // 버튼 클릭 시
    const onSearchButton = () => {
        if (!apiKey || !searchNickNames) {
            alert('API Key 혹은 검색할 닉네임을 입략해주세요.');
            return false;
        }

        // TODO:
        // API 통신 필요. 하나씩 보내는데 429에러 발생 시 홀딩 걸어둘 수 있는지?
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
        // // 중복체크 후 검색 닉네임 List
        const srAbleNicks = duplicateCheck(e.target.value).map((el) => ({
            using: false,
            searchComplete: true,
            nickName: el,
        }));

        searchNickNamesDispatch({
            type: 'srNicks_change',
            nickNameList: srAbleNicks,
        });
    };

    return (
        <main>
            <div className="grid grid-cols-2">
                <div className="flex flex-col gap-3 p-5">
                    <label htmlFor="textarea1" className="block text-sm font-medium text-gray-900 dark:text-white">
                        검색할 닉네임 : {srNicks}개
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
                        사용 가능한 닉네임 : {usingSrNicks} 개
                    </label>
                    <textarea
                        id="textarea2"
                        className="flex w-full rounded-md border border-dashed border-black dark:border-white bg-background dark:bg-slate-700 dark:text-gray-300 px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[200px] h-[20rem] text-base resize-none"
                        disabled
                        placeholder="사용 가능한 닉네임입니다."
                        value={usingNicksList}
                    />
                </div>
            </div>
        </main>
    );
};

export default Search;
