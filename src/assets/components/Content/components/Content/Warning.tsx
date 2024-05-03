import ContentCard from '../../../Common/Content/CardLayout';

const Warning = () => {
    const imageType = 'Warning';
    const title = '주의사항';
    const listType = 'dot';
    const list = [
        '검색은 1분에 100개씩 가능합니다. - 1분 후에 100회로 재충전 됩니다.',
        "검색 중 '새로고침' 및 '뒤로가기'는 하지 말아주세요. - 닉네임을 하나씩 Stove API를 통해 검색하기 때문에 중간에 새로고침 혹은 뒤로가기를 클릭하면 1분당 검색할 수 있는 횟수가 소진될 수 있습니다.",
    ];

    return <ContentCard imageType={imageType} title={title} listType={listType} list={list} />;
};

export default Warning;
