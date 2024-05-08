interface SearchNickNameMap {
    index: number;
    using: boolean;
    searchComplete: boolean;
    nickName: string;
}

interface ActionType {
    type: string;
    nickNameList: SearchNickNameMap[] | [];
    completeNick: SearchNickNameMap | {};
}

// 검색할 닉네임에 닉네임 입력 시
export const NICKNAME_CHANGE = 'NICKNAME_CHANGE';
// 검색이 완료되었을 때
export const NICKNAME_SEARCH = 'NICKNAME_SEARCH';
// 검색할 닉네임 초기화
export const NICKNAME_RESET = 'NICKNAME_RESET';

// 닉네임 입력 함수
export const nicknameChange = (nickNameList: SearchNickNameMap[]) => ({ type: NICKNAME_CHANGE, nickNameList });
// 닉네임 검색 완료
export const nicknameSearch = (completeNick: SearchNickNameMap) => ({ type: NICKNAME_SEARCH, completeNick });
// 닉네임 리셋
export const nicknameReset = () => ({ type: NICKNAME_RESET });

// 검색할 닉네임 Reducer
export const searchNickNameReducer = (state = [], action: ActionType) => {
    switch (action.type) {
        case NICKNAME_CHANGE:
            return [...action.nickNameList];
        case NICKNAME_SEARCH:
            // 닉네임 검색이 완려되었을 때
            return [...state].map((el: SearchNickNameMap) => {
                if (el.index === action.completeNick.index) {
                    return {
                        ...el,
                        ...{ using: action.completeNick.using, searchComplete: action.completeNick.searchComplete },
                    };
                } else {
                    return el;
                }
            });
        case NICKNAME_RESET:
            return [...state].map((el: SearchNickNameMap) => {
                return { ...el, ...{ using: false, searchComplete: false } };
            });
        default:
            return [...state];
        // throw new Error('Search NickName Reducer에 지정되지 않은 타입입니다.');
    }
};
