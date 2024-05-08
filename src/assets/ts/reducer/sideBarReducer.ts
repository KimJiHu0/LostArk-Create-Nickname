const initalState = false;

export const SIDEBAR_CHANGE = 'SIDEBAR_CHANGE';
export const sideBarChange = (click: boolean) => ({ type: SIDEBAR_CHANGE, click });

export const sideBarReducer = (state: boolean = initalState, action: { type: string; click: boolean }) => {
    switch (action.type) {
        case SIDEBAR_CHANGE:
            return action.click;
        default:
            return state;
    }
};
