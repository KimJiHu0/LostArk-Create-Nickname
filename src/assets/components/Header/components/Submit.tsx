import { useDispatch, useSelector } from 'react-redux';
import { isDisabledChange } from '../../../ts/reducer/apiKeyReducer';

const Submit = () => {
    const dispatch = useDispatch();
    const apiKeyState = useSelector(
        (state: { apikeyReducer: { apiKey: string; isDisabled: boolean } }) => state.apikeyReducer,
    );

    // 수정 & 적용버튼 클릭 시
    const onSubmitClick = () => {
        dispatch(isDisabledChange(!apiKeyState.isDisabled));
        localStorage.setItem('apikey', apiKeyState.apiKey);
    };

    return (
        <div className="grid place-items-center">
            <button
                className="inline-flex items-center border text-black dark:text-white justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50  h-10 px-4 py-2 rounded-lg"
                onClick={onSubmitClick}
            >
                {apiKeyState.isDisabled ? '수정' : '적용'}
            </button>
        </div>
    );
};

export default Submit;
