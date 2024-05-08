// Component
import HeaderLayout from './assets/components/Header/HeaderLayout';
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
// import { useDispatch, useSelector } from 'react-redux';

// react-router-dom
import { Routes, Route } from 'react-router-dom';

// reducer
export default function App() {
    // Common : Alert Message, Alert, Modal
    const [alertMessage, setAlertMessage] = useState<string>('');
    const [isAlert, setIsAlert] = useState<boolean>(false);

    return (
        <div className="container">
            <HeaderLayout />
            <Sidebar />
            <Routes>
                <Route
                    index
                    element={
                        <ContentLayout>
                            <Notice />
                            <Guide />
                            <Warning />
                            <Search setIsAlert={setIsAlert} setAlertMessage={setAlertMessage} />
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
