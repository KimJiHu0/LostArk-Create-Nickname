import { useNavigate } from 'react-router-dom';
const Logo = () => {
    const move = useNavigate();
    const onLogoClick = () => {
        move('/');
    };
    return (
        <div className="flex place-items-center md:pl-10 md:pr-10">
            <a
                className="text-xl font-semibold text-black dark:text-gray-300 cursor-pointer"
                data-id="7"
                // href="#"
                onClick={onLogoClick}
            >
                LOANICK
            </a>
        </div>
    );
};

export default Logo;
