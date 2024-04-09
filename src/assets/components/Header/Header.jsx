import Logo from './components/Logo';
import ApiInput from './components/ApiInput';
import Mode from './components/Mode';

const Header = () => {
    return (
        // header에 fixed를 사용하면 Content에 있는 내용이 Header에 가려지는 이슈가 있어서 header의 영역을 무시하지 않는 sticky를 사용
        <header className="z-50 top-0 left-0 sticky w-screen md:h-[80px] shadow-xl flex flex-cols bg-gray-100">
            <Logo />
            <ApiInput />
            <Mode />
        </header>
    );
};

export default Header;
