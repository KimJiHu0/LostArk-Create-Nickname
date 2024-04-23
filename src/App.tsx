// Component
import Header from './assets/components/Header/Header';
import ApiInput from './assets/components/Header/components/ApiInput';
import Logo from './assets/components/Header/components/Logo';
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
import { useState } from 'react';

// reducer
export default function App() {
    // Api Key
    const [apiKey, setApiKey] = useState<string>(
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1MDI0NDgifQ.fDsg1IfNbWi_tzz2RwP5YgyVXZ9GbKdw4VgZXO6M-1bKmOoNw88XBu3MQxGqZk5gy6U256ojf5wdfUrmgbUql3WC59yLqube-YN6XSpxUDOEzID5piE2ugcqiUSrY53HIozm0M_EUPuowB7KbjUk595jT9yqICqC4TuxPUXrUJw8h1UCwaaZUCUXbUpRrUkmodXLhEmIpAjuCRgIZ8b91mCPufMIwWZwDZTIv4W2jOWj7g5-6lZIt-yWfqT8XiH5glSDvASuLy2Yf6NpTaFhB6Oq0QNjqlkoPdlr8hy8vnsxjJe24WRQ3VvMfZ2MXnI2zpSumAw_WByZKll0RNpSbg',
    );

    // Common : Alert Message, Alert, Notification, Modal, Disabled
    const [alertMessage, setAlertMessage] = useState('');
    const [isAlert, setIsAlert] = useState(false);
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const onModalClick = () => {
        setIsModal(!isModal);
    };

    return (
        <div className="container">
            <Header>
                <Logo />
                <ApiInput apiKey={apiKey} onChangeApiKey={setApiKey} />
                <Mode />
            </Header>
            <Content>
                <Notice onClickModal={onModalClick} />
                <Guide />
                <Warning />
                <Search
                    apiKey={apiKey}
                    setIsAlert={setIsAlert}
                    setAlertMessage={setAlertMessage}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                ></Search>
            </Content>
            <Footer />
            {isAlert ? <Alert alertMessage={alertMessage} onAlertClose={() => setIsAlert(false)} /> : null}
            <Modal isModal={isModal} onCloseModal={onModalClick} />
        </div>
    );
}
