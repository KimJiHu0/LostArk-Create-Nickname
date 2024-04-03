export function nickNameReducer(state, action) {
    // 검색할 닉네임을 변경했을 때
    if (action.type === 'change') {
        return [...action.nickNameList];
    } else if (action.type === 'searchComplete') {
        return [...state].map((el) => {
            if (el.index === action.index) {
                return { ...el, ...{ available: action.available, searchComplete: action.searchComplete } };
            } else {
                return el;
            }
        });
    }
    return state;
}
