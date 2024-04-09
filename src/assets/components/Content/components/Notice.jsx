import { useContext } from 'react';
import { rootContext } from '../../../js/context/rootContext';

const Notice = () => {
    const { isModal, setIsModal } = useContext(rootContext);
    return (
        <article>
            <div className="flex bg-gray-100 mx-5 my-5 rounded-xl">
                <div className="grid place-items-center pl-10">
                    <img src="/image/icon/NoticeIcon.png" className="w-8 object-contain opacity-50" />
                </div>
                <div className="flex flex-row place-items-center p-5 gap-5 ">
                    <h1 className="text-xl font-bold">공지사항</h1>
                    <p>
                        Stove API 발급하는 방법 ➡️{' '}
                        <a
                            onClick={() => {
                                setIsModal(true);
                            }}
                            className="items-center left-0 cursor-pointer underline font-bold hover:text-blue-400"
                        >
                            바로가기
                        </a>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Notice;