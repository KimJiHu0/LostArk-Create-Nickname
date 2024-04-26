interface SearchNickNameMap {
    index: number;
    using: boolean;
    searchComplete: boolean;
    nickName: string;
}

interface ActionType {
    type: string;
    nickNameList?: SearchNickNameMap[] | [];
    nicks?: SearchNickNameMap | {};
}

// 검색할 닉네임 Reducer
export function searchNickNameReducer(state: SearchNickNameMap[], action: ActionType) {
    switch (action.type) {
        case 'srNicks_change':
            return [...action.nickNameList];
        case 'srNicks_search':
            // 닉네임 검색이 완려되었을 때
            return [...state].map((el) => {
                if (el.index === action.nicks.index) {
                    return { ...el, ...{ using: action.nicks.using, searchComplete: action.nicks.searchComplete } };
                } else {
                    return el;
                }
            });
        case 'srNicks_reset':
            return [...state].map((el) => {
                return { ...el, ...{ using: false, searchComplete: false } };
            });
        default:
            throw new Error('Search NickName Reducer에 지정되지 않은 타입입니다.');
    }
}
