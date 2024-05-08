import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { apikeyChange, isDisabledChange } from '../../../ts/reducer/apiKeyReducer';

const ApiInput = () => {
    const dispatch = useDispatch();
    const apiKeyState = useSelector(
        (state: { apikeyReducer: { apiKey: string; isDisabled: boolean } }) => state.apikeyReducer,
    );

    useEffect(() => {
        // api key
        const localstorageKey: string = localStorage.getItem('apikey') || '';
        if (localstorageKey != null) {
            dispatch(apikeyChange(localstorageKey));
            dispatch(isDisabledChange(true));
        }
    }, []);

    return (
        <div className="place-items-center flex flex-grow">
            <input
                defaultValue={apiKeyState.apiKey}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 text-black"
                placeholder="Stove API Key를 입력하세요."
                data-id="11"
                type="search"
                onChange={(e) => {
                    dispatch(apikeyChange(e.target.value));
                }}
                disabled={apiKeyState.isDisabled}
            />
        </div>
    );
};

export default ApiInput;
