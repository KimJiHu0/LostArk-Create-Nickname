interface SideBarType {
    isSide: boolean;
    onToggleIsSide: () => void;
}

const Sidebar = ({ isSide, onToggleIsSide }: SideBarType) => {
    return (
        <div
            className={`fixed inset-y-0 left-0 z-10 w-64 bg-gray-800 transition duration-300 ease-in-out transform ${
                isSide ? 'translate-x-0 shadow-r' : '-translate-x-full'
            }`}
        >
            <div className="flex justify-between p-4">
                <button className="text-white" onClick={onToggleIsSide}>
                    X
                </button>
            </div>
            <div className="p-4">
                {/* Sidebar content goes here */}
                <p className="text-white">Sidebar Content</p>
            </div>
        </div>
    );
};

export default Sidebar;
