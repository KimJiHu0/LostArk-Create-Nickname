export function apiKeyReducer(state, action) {
    switch (action.type) {
        case 'apikey_input':
            return action.apiKey;
        default:
            throw new Error('API Key Reducer에 지정되지 않은 타입입니다.');
    }
}

export function searchNickNameReducer(state, action) {
    switch (action.type) {
        case 'srNicks_change':
            return [...action.nickNameList];
        default:
            throw new Error('Search NickName Reducer에 지정되지 않은 타입입니다.');
    }
}
