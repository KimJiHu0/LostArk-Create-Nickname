// API.js
// axios 의 인스턴스를 생성
import axios from 'axios';

const api = (apiKey: string, nickname: string) =>
    axios
        .create({
            headers: {
                accept: 'application/json',
                authorization: `bearer ${apiKey}`,
            },
        })
        .get(`/characters/${nickname}/siblings`);

export default api;
