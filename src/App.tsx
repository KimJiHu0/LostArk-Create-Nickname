// Component
import HeaderLayout from '@components/Header/HeaderLayout';
import Sidebar from '@components/SideBar/SideBar';

import ContentLayout from '@components/Content/ContentLayout';
import Notice from '@components/Content/components/Content/Notice';
import Guide from '@components/Content/components/Content/Guide';
import Warning from '@components/Content/components/Content/Warning';
import Search from '@components/Content/components/Content/Search';
import Issuance from '@components/Content/components/Guide/Issuance';

import FooterLayout from '@components/Footer/FooterLayout';

import Alert from '@components/Common/Alert';

// React
import { useState } from 'react';
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
