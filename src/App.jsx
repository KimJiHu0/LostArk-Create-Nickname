import Header from './assets/components/Header/Header';
import Content from './assets/components/Content/Content';
import Footer from './assets/components/Footer/Footer';
import Modal from './assets/components/Modal/Modal';

import { useState } from 'react';
import { rootContext } from './assets/js/context/rootContext';

export default function App() {
    const [isModal, setIsModal] = useState(false);
    const [theme, setTheme] = useState('light');

    return (
        <rootContext.Provider value={{ isModal, setIsModal, theme, setTheme }}>
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
            <Modal />
        </rootContext.Provider>
    );
}
