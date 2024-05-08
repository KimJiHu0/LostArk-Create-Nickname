import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { sideBarChange } from '../../ts/reducer/sideBarReducer';

const Sidebar = () => {
    const dispatch = useDispatch();
    const sideBarState = useSelector((state: { sideBarReducer: boolean }) => state.sideBarReducer);
    const menuList = [
        {
            title: '닉네임 검색',
            path: '/',
        },
        {
            title: 'Stove API 발급 방법',
            path: '/guide',
        },
    ];
    return (
        <div
            className={`fixed inset-y-0 left-0 z-10 w-64 bg-gray-200 dark:bg-gray-800 transition duration-200 ease-in-out transform ${
                sideBarState ? 'translate-x-0 shadow-r' : '-translate-x-full'
            }`}
        >
            <div className="flex justify-between p-4">
                <button className="dark:text-white" onClick={() => dispatch(sideBarChange(false))}>
                    X
                </button>
            </div>
            <div className="flex flex-col p-4 gap-5">
                {/* Sidebar content goes here */}
                {menuList.map((menu, index) => (
                    <p key={index} className="dark:text-white text-lg" onClick={() => dispatch(sideBarChange(false))}>
                        <NavLink className="active:text-neutral-200" to={menu.path}>
                            {menu.title}
                        </NavLink>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
