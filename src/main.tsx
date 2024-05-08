import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/css/index.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './assets/ts/store/store.ts';

/*
  해당 파이은 ReactDOM.render를 수행
  PWA를 위한 서비스 워커 등록 작업 수행
  PWA란 애플리케이션을 다운로드 받지 않고 웹브라우저에서 띄우는 일
*/
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
