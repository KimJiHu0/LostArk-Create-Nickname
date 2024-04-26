interface ContentCardProps {
    imageType: string;
    title: string;
    listType?: string;
    list?: Array<string>;
    onClickModal?: () => void;
}

const ContentCard = ({ imageType, title, listType, list, onClickModal }: ContentCardProps) => {
    return (
        <article>
            <div className="flex flex-col mx-5 my-5 rounded-xl bg-gray-100 dark:bg-slate-900 dark:text-gray-300">
                <div className="flex">
                    <div className="grid place-items-center pl-10">
                        <img src={`/image/icon/${imageType}Icon.png`} className="w-8 object-contain opacity-50" />
                    </div>
                    <div className="flex flex-row place-items-center p-5 gap-5 ">
                        <h1 className="text-xl font-bold">{title}</h1>
                        {imageType === 'Notice' ? (
                            <p>
                                Stove API 발급하는 방법 ➡️{' '}
                                <a
                                    onClick={onClickModal}
                                    className="items-center left-0 cursor-pointer underline font-bold hover:text-blue-400"
                                >
                                    바로가기
                                </a>
                            </p>
                        ) : null}
                    </div>
                </div>
                {imageType !== 'Notice' ? (
                    <div className="flex flex-row pl-20 pb-5">
                        <ol className={'list-inside' + listType === 'number' ? 'list-decimal' : 'list-disc'}>
                            {list.map((content, index) => (
                                <li key={index}>{content}</li>
                            ))}
                        </ol>
                    </div>
                ) : null}
            </div>
        </article>
    );
};

export default ContentCard;
