// Component
import Header from './assets/components/Header/Header';
import Content from './assets/components/Content/Content';
import Footer from './assets/components/Footer/Footer';

// React
import { useReducer } from 'react';

// Context
import { rootContext } from './assets/js/contexts/rootContext';

// Reducer
import { apiKeyReducer } from './assets/js/reducers/apiKeyReducer';

// TODO:
// theme의 경우에는 Mode Component 내에서만 사용하며, dark, light 모드에 따라서는 tailwindCSS로 벼녕하기 때문에
// 따로 ContextAPI를 활용해서 쓸 필요가 없음.
// isModal의 경우에도 Content Component 내의 Notice Component에서 사용하며, Modal 역시 해당 Component 내에
// 선언하여 관리하도록 하여 이들이 변경되었을 때 App까지 ReRender될 필요가 없어서 State로 추출
export default function App() {
    const [apiKey, apiKeyDispatch] = useReducer(
        apiKeyReducer,
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1MDI0NDgifQ.fDsg1IfNbWi_tzz2RwP5YgyVXZ9GbKdw4VgZXO6M-1bKmOoNw88XBu3MQxGqZk5gy6U256ojf5wdfUrmgbUql3WC59yLqube-YN6XSpxUDOEzID5piE2ugcqiUSrY53HIozm0M_EUPuowB7KbjUk595jT9yqICqC4TuxPUXrUJw8h1UCwaaZUCUXbUpRrUkmodXLhEmIpAjuCRgIZ8b91mCPufMIwWZwDZTIv4W2jOWj7g5-6lZIt-yWfqT8XiH5glSDvASuLy2Yf6NpTaFhB6Oq0QNjqlkoPdlr8hy8vnsxjJe24WRQ3VvMfZ2MXnI2zpSumAw_WByZKll0RNpSbg',
    );
    console.log('App re-render');

    return (
        <rootContext.Provider value={{ apiKey, apiKeyDispatch }}>
            <div className="container">
                <Header />
                <Content />
                <Footer />
            </div>
            {/* <Modal /> */}
        </rootContext.Provider>
    );
}
