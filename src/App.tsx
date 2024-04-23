// Component
import Header from './assets/components/Header/Header';
import Logo from './assets/components/Header/components/Logo';
import ApiInput from './assets/components/Header/components/ApiInput';
import Submit from './assets/components/Header/components/Submit';
import Mode from './assets/components/Header/components/Mode';

import Content from './assets/components/Content/Content';
import Notice from './assets/components/Content/components/Notice';
import Guide from './assets/components/Content/components/Guide';
import Warning from './assets/components/Content/components/Warning';
import Search from './assets/components/Content/components/Search';

import Footer from './assets/components/Footer/Footer';

import Alert from './assets/components/Common/Alert';
import Modal from './assets/components/Modal/Modal';

// React
import { useState, useEffect } from 'react';

// reducer
export default function App() {
    // Api Key
    const [apiKey, setApiKey] = useState<string>('');

    // Common : Alert Message, Alert, Modal
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [isAlert, setIsAlert] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false);
    // input Disabled
    const [inputDisabled, setInputDisabled] = useState<boolean>(false);
    // theme
    const [theme, setTheme] = useState<string>('');

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
            <Header>
                <Logo />
                <ApiInput apiKey={apiKey} onChangeApiKey={setApiKey} inputDisabled={inputDisabled} />
                <Submit inputDisabled={inputDisabled} onClickSubmit={onSubmitClick} />
                <Mode theme={theme} onClickMode={onClickMode} />
            </Header>
            <Content>
                <Notice onClickModal={() => setIsModal(true)} />
                <Guide />
                <Warning />
                <Search
                    apiKey={apiKey}
                    inputDisabled={inputDisabled}
                    setIsAlert={setIsAlert}
                    setAlertMessage={setAlertMessage}
                ></Search>
            </Content>
            <Footer />
            {isAlert ? <Alert alertMessage={alertMessage} onAlertClose={() => setIsAlert(false)} /> : null}
            <Modal isModal={isModal} onCloseModal={() => setIsModal(false)} />
        </div>
    );
}
