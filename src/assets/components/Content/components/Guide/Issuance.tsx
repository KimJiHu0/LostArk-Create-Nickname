import GuideCard from '../../../Common/Guide/GuideCard';
const Issuance = () => {
    const guideList = [
        {
            seq: 1,
            image: 'Lostark_Homepage',
            text: '<로스트아크 API 홈페이지>에 접속하여 로그인을 진행합니다.',
            link: 'ttps://developer-lostark.game.onstove.com/',
        },
        {
            seq: 2,
            image: 'Lostark_Login',
            text: '<GET ACCESS TO LOSTARK API> 를 클릭합니다.',
        },
        {
            seq: 3,
            image: 'Lostark_CreateClient',
            text: '<CREATE A NEW CLIENT> 를 클릭합니다.',
        },
        {
            seq: 4,
            image: 'Lostark_Client_Form',
            text: '생성할 CLIENT의 내용을 입력합니다. <CLIENT NAME>은 필수 사항입니다. 입력을 다 했다면 <CREATE>를 클릭합니다.',
        },
        {
            seq: 5,
            image: 'Lostark_Copy_APIKEY',
            text: '생성한 CLIENT에서 상단 API KEY가 생성되었습니다. 이제 이 API KEY를 COPY하여 닉네임 검색 홈페이지 상단 API KEY 입력 칸에 붙여넣기 하면 됩니다.',
        },
    ];
    return <GuideCard guideList={guideList} />;
};
export default Issuance;
