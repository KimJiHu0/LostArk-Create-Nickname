// redux에 있는 createStore를 사용할 경우 createStore에 취소선이 생긴다.
// 이는 Redux에서 다른 방법을 권유하고 있기 때문에 아래의 라이브러리를 다운로드하여 사용해주는 것이 좋다.
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducer/rootReducre';

export const store = configureStore({ reducer: rootReducer });
