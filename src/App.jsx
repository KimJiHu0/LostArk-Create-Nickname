// Component
import Header from './assets/components/Header/Header';
import Content from './assets/components/Content/Content';
import Footer from './assets/components/Footer/Footer';
import Modal from './assets/components/Modal/Modal';

// React
import { useState, useReducer } from 'react';

// Context
import { rootContext } from './assets/js/context/rootContext';

// Reducer
import { apiKeyReducer } from './assets/js/reducers/apiKeyReducer';

export default function App() {
    const [isModal, setIsModal] = useState(false);
    const [theme, setTheme] = useState('light');
    const [apiKey, apiKeyDispatch] = useReducer(
        apiKeyReducer,
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1MDI0NDgifQ.fDsg1IfNbWi_tzz2RwP5YgyVXZ9GbKdw4VgZXO6M-1bKmOoNw88XBu3MQxGqZk5gy6U256ojf5wdfUrmgbUql3WC59yLqube-YN6XSpxUDOEzID5piE2ugcqiUSrY53HIozm0M_EUPuowB7KbjUk595jT9yqICqC4TuxPUXrUJw8h1UCwaaZUCUXbUpRrUkmodXLhEmIpAjuCRgIZ8b91mCPufMIwWZwDZTIv4W2jOWj7g5-6lZIt-yWfqT8XiH5glSDvASuLy2Yf6NpTaFhB6Oq0QNjqlkoPdlr8hy8vnsxjJe24WRQ3VvMfZ2MXnI2zpSumAw_WByZKll0RNpSbg',
    );

    console.log('root');
    return (
        <rootContext.Provider value={{ isModal, setIsModal, theme, setTheme, apiKey, apiKeyDispatch }}>
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
            <Modal />
        </rootContext.Provider>
    );
}
