import { NavLink } from 'react-router-dom';

interface SideBarType {
    isSide: boolean;
    onToggleIsSide: () => void;
}

const Sidebar = ({ isSide, onToggleIsSide }: SideBarType) => {
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
                isSide ? 'translate-x-0 shadow-r' : '-translate-x-full'
            }`}
        >
            <div className="flex justify-between p-4">
                <button className="dark:text-white" onClick={onToggleIsSide}>
                    X
                </button>
            </div>
            <div className="flex flex-col p-4 gap-5">
                {/* Sidebar content goes here */}
                {menuList.map((menu, index) => (
                    <p key={index} className="dark:text-white text-lg">
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
