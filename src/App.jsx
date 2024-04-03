import Header from './assets/components/Header/Header';
import Content from './assets/components/Content/Content';
import Notice from './assets/components/Content/Components/Notice';
import NickName from './assets/components/Content/Components/NickName';
import Footer from './assets/components/Footer/Footer';

import { ThemeContext } from './assets/js/ThemeContext';

import { useState, useEffect } from 'react';

export default function App() {
    // Header : API KEY
    const [apiKey, setApiKey] = useState('');
    // Header : Dark / Light
    // TODO : 로컬스토리지에 값 가져와서 체크. 기본은 Dark
    const [theme, setTheme] = useState('light');
    // 검색할 닉네임
    const [nicknames, setNicknames] = useState([]);

    // 중복체크 함수
    const duplicateCheck = (nicknames) => {
        return [
            ...new Set(
                nicknames
                    .replace(/\s{2,}/gi, ' ')
                    .trim()
                    .split(' '),
            ),
        ];
    };

    // 닉네임 변경 시 중복제거 -> 띄어쓰기는 한칸으로만 -> 띄어쓰기 기준으로 Split 후 기본 셋팅 후 담기
    const onChangeNickNames = (nicknames) => {
        setNicknames(
            duplicateCheck(nicknames).map((el) => ({ available: false, searchComplete: false, nickName: el })),
        );
    };

    // 테마 변경 Function
    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    };

    // 첫 마운트 시 Theme 변경 함수 실행
    useEffect(() => {
        changeTheme();
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <div
                id="v0-container"
                className="!visible transition-opacity duration-150 !opacity-100"
                style={{ visibility: 'hidden', opacity: 0 }}
            >
                <div className="flex flex-col h-screen" data-id="1">
                    <Header onChangeApiKey={setApiKey} onChangeTheme={changeTheme} />
                    <Content>
                        <Notice />
                        <NickName apiKey={apiKey} nicknames={nicknames} onChangeNickNames={onChangeNickNames} />
                    </Content>
                    <Footer />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
