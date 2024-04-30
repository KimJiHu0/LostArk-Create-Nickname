import ContentCard from '../../Common/ContentCard';
interface NoticeProps {
    onClickModal: () => void;
}
const Notice = ({ onClickModal }: NoticeProps) => {
    const imageType = 'Notice';
    const title = '공지사항';
    const listType = 'dot';
    const list = ['Stove API Key 발급 방법은 좌측 메뉴를 열어 확인하시기 바랍니다.'];
    return <ContentCard imageType={imageType} title={title} listType={listType} list={list} />;
    // return <ContentCard imageType={imageType} title={title} onClickModal={onClickModal} />;
};

export default Notice;
