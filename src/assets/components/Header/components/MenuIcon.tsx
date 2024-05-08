import { useDispatch } from 'react-redux';
import { sideBarChange } from '../../../ts/reducer/sideBarReducer';

const MenuIcon = () => {
    const dispatch = useDispatch();
    return (
        <button className="block text-gray-500 hover:opacity-30 ml-5" onClick={() => dispatch(sideBarChange(true))}>
            <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    );
};

export default MenuIcon;
