interface GuideContentType {
    content: {
        seq: number;
        image: string;
        text: string;
        link?: string;
    };
}
interface GuideCardType {
    guideList: GuideContentType[];
}
const GuideCard = ({ guideList }: GuideCardType) => {
    const sliceGuideList = (guideList: GuideCardType, size: number) => {
        const arr = [];

        for (let i = 0; i < guideList.length; i += size) {
            arr.push(guideList.slice(i, i + size));
        }

        return arr;
    };

    const sliceList = sliceGuideList(guideList, 2);

    return (
        <article>
            {sliceList.map((list, listIndex) => (
                <div key={listIndex} className="flex">
                    {list.map((content: GuideContentType, contentIndex: number) => (
                        <div
                            key={contentIndex}
                            className="flex flex-col mx-5 my-5 h-100 rounded-xl bg-gray-100 dark:bg-slate-900 dark:text-gray-300"
                        >
                            <div className="flex flex-col">
                                <div className="grid place-items-center px-5 py-5">
                                    <img src={`/image/guide/${content.image}.png`} className="w-3/5 object-contain" />
                                </div>
                                <div className="grid place-items-center pb-5">
                                    <div className="">
                                        {content.seq}. {content.text}
                                    </div>
                                    {content.link ? (
                                        <div className="">
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
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </article>
    );
};

export default GuideCard;
