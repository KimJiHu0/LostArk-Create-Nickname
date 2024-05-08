interface ActionType {
    type: string;
    apiKey: string;
    isDisabled: boolean;
}

const initalState = {
    apiKey: '',
    isDisabled: false,
};

export const APIKEY_CHANGE = 'APIKEY_CHANGE';
export const APIKEY_DISABLED = 'APIKEY_DISABLED';

export const apikeyChange = (apiKey: string) => ({ type: APIKEY_CHANGE, apiKey });
export const isDisabledChange = (isDisabled: boolean) => ({
    type: APIKEY_DISABLED,
    isDisabled,
});

export const apikeyReducer = (state: { apiKey: string; isDisabled: boolean } = initalState, action: ActionType) => {
    switch (action.type) {
        case APIKEY_CHANGE:
            return { ...state, apiKey: action.apiKey };
        case APIKEY_DISABLED:
            return { ...state, isDisabled: action.isDisabled };
        default:
            return state;
    }
};
