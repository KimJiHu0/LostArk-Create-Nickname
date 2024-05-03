// Component
import HeaderLayout from './assets/components/Header/HeaderLayout';
import MenuIcon from './assets/components/Header/components/MenuIcon';
import Logo from './assets/components/Header/components/Logo';
import ApiInput from './assets/components/Header/components/ApiInput';
import Submit from './assets/components/Header/components/Submit';
import Mode from './assets/components/Header/components/Mode';

import Sidebar from './assets/components/SideBar/SideBar';

import ContentLayout from './assets/components/Content/ContentLayout';
import Notice from './assets/components/Content/components/Content/Notice';
import Guide from './assets/components/Content/components/Content/Guide';
import Warning from './assets/components/Content/components/Content/Warning';
import Search from './assets/components/Content/components/Content/Search';
import Issuance from './assets/components/Content/components/Guide/Issuance';

import FooterLayout from './assets/components/Footer/FooterLayout';

import Alert from './assets/components/Common/Alert';

// React
import { useState, useEffect } from 'react';

// react-router-dom
import { Routes, Route } from 'react-router-dom';

// reducer
export default function App() {
    // Api Key
    const [apiKey, setApiKey] = useState<string>('');

    // Common : Alert Message, Alert, Modal
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [isAlert, setIsAlert] = useState<boolean>(false);
    // input Disabled
    const [inputDisabled, setInputDisabled] = useState<boolean>(false);
    // theme
    const [theme, setTheme] = useState<string>('');
    // sidebar
    const [isSide, setIsSide] = useState<boolean>(false);

    // 테마 변경
    function changeTheme(propTheme: string) {
        if (propTheme === 'dark') document.querySelector('html')!.classList.add('dark');
        else document.querySelector('html')!.classList.remove('dark');
    }

    // Effect
    useEffect(() => {
        // api key
        const localstorageKey: string = localStorage.getItem('apikey') || '';
        if (localstorageKey != null) {
            setApiKey(localstorageKey);
            setInputDisabled(true);
        }

        // 테마
        const localsotrageTheme: string = localStorage.getItem('theme') || 'light';
        setTheme((p) => {
            changeTheme(localsotrageTheme);
            return localsotrageTheme;
        });
    }, []);

    // 수정 & 적용버튼 클릭 시
    const onSubmitClick = () => {
        setInputDisabled(!inputDisabled);
        localStorage.setItem('apikey', apiKey);
    };

    // 테마 변경 시
    const onClickMode = () => {
        setTheme((prev) => {
            const newTheme = prev === 'dark' ? 'light' : 'dark';
            changeTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
        changeTheme(theme);
    };

    return (
        <div className="container">
            <HeaderLayout>
                <MenuIcon onToggleIsSide={() => setIsSide(true)} />
                <Logo />
                <ApiInput apiKey={apiKey} onChangeApiKey={setApiKey} inputDisabled={inputDisabled} />
                <Submit inputDisabled={inputDisabled} onClickSubmit={onSubmitClick} />
                <Mode theme={theme} onClickMode={onClickMode} />
                <Sidebar isSide={isSide} onToggleIsSide={() => setIsSide(false)} />
            </HeaderLayout>
            <Routes>
                <Route
                    index
                    element={
                        <ContentLayout>
                            <Notice />
                            <Guide />
                            <Warning />
                            <Search
                                apiKey={apiKey}
                                inputDisabled={inputDisabled}
                                setIsAlert={setIsAlert}
                                setAlertMessage={setAlertMessage}
                            />
                        </ContentLayout>
                    }
                />
                <Route
                    path="/guide"
                    element={
                        <ContentLayout>
                            <Issuance />
                        </ContentLayout>
                    }
                />
            </Routes>
            <FooterLayout />
            {isAlert ? <Alert alertMessage={alertMessage} onAlertClose={() => setIsAlert(false)} /> : null}
        </div>
    );
}
