export function apiKeyReducer(state, action) {
    switch (action.type) {
        case 'apikey_input':
            return action.apiKey;
        default:
            throw new Error('API Key Reducer에 지정되지 않은 타입입니다.');
    }
}
