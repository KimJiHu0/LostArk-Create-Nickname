// api Ket Reducer
export function apiKeyReducer(state, action) {
    switch (action.type) {
        case 'apikey_input':
            return action.apiKey;
        default:
            throw new Error('API Key Reducer에 지정되지 않은 타입입니다.');
    }
}

// 검색할 닉네임 Reducer
export function searchNickNameReducer(state, action) {
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