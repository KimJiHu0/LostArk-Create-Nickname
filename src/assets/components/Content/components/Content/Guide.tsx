import ContentCard from '../../../Common/Content/ContentCard';

const Guide = () => {
    const imageType = 'Guide';
    const title = '사용법';
    const listType = 'number';
    const list = [
        '상단에 Stove API Key를 입력합니다. 발급 방법을 모르신다면 상단 공지사항에서 확인하시기 바랍니다.',
        "검색하실 닉네임을 '복사 & 붙여넣기' 혹은 '직접 입력'해주세요. 닉네임 간 구분은 띄어쓰기로 해주시기 바랍니다.",
        "'검색'버튼을 클릭하신 후 검색이 완료될 때까지 기다려주세요. 검색이 완료되지 않아도 검색이 완료된 닉네임은 복사가 가능합니다. ",
    ];

    return <ContentCard imageType={imageType} title={title} listType={listType} list={list} />;
};

export default Guide;
