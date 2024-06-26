import { memo } from 'react';

const Footer = memo(function Footer() {
    return (
        <footer className="fixed flex bottom-0 left-0 md:h-[80px] w-screen border-gray-300 bg-gray-100 dark:bg-slate-700">
            <div className="flex flex-row place-items-center pl-10 font-semibold text-black">
                <div className="">에러 및 문의사항</div>
                <div className="dark:bg-slate-700">
                    <img src="/image/icon/MailIcon.png" className="w-8 h-[24px] object-contain" />
                </div>
                <div>sh9732626@gmail.com</div>
            </div>
            {/* <p className="flex items-center text-sm font-semibold">에러 및 문의사항 : sh9732626@gmail.com</p> */}
        </footer>
    );
});

export default Footer;
