// API.js
// axios 의 인스턴스를 생성
import axios from 'axios';

const api = (apiKey, nickname) =>
    axios
        .create({
            baseURL: `https://developer-lostark.game.onstove.com/characters`,
            headers: {
                accept: 'application/json',
                authorization: `bearer ${apiKey}`,
            },
        })
        .get(`/${nickname}/siblings`);

export default api;
