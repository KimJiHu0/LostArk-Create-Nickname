interface GuideLayoutType {
    image: string;
    text: string;
    link?: string;
}
const GuideLayout = ({ content }: GuideLayoutType) => {
    return (
        <article>
            <div className="flex flex-col mx-5 my-5 h-100 rounded-xl bg-gray-100 dark:bg-slate-900 dark:text-gray-300">
                <div className="flex">
                    <div className="grid place-items-center px-10 py-10">
                        <img src={`/image/guide/${content.image}.png`} className="w-2/5 object-contain" />
                    </div>
                    <div className="flex flex-row place-items-center p-5 gap-5 "></div>
                </div>
                <div className="flex flex-row pl-10 pb-5">{content.text}</div>
                {content.link ? (
                    <div className="pl-10 pb-5">
                        <a
                            href="https://developer-lostark.game.onstove.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer underline font-bold hover:text-blue-500"
                        >
                            바로가기
                        </a>
                    </div>
                ) : null}
            </div>
        </article>
    );
};

export default GuideLayout;
