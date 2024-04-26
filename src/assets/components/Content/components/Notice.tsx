import ContentCard from '../../Common/ContentCard';
interface NoticeProps {
    onClickModal: () => void;
}
const Notice = ({ onClickModal }: NoticeProps) => {
    const imageType = 'Notice';
    const title = '공지사항';
    return <ContentCard imageType={imageType} title={title} onClickModal={onClickModal} />;
};

export default Notice;
