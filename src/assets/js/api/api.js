// API.js
// axios 의 인스턴스를 생성
import axios from 'axios';

const api = (apiKey, nickname) =>
    axios
        .create({
            headers: {
                accept: 'application/json',
                authorization: `bearer ${apiKey}`,
            },
        })
        .get(`/characters/${nickname}/siblings`);

// const api = (apiKey) => {
//     const axiosInstance = axios.create({
//         baseURL: `https://developer-lostark.game.onstove.com/characters`,
//         headers: {
//             accept: 'application/json',
//             authorization: `bearer ${apiKey}`,
//         },
//     });

//     // 성공 시
//     const onFulfilled = (response) => response;
//     // 재시도
//     const retry = (errorConfig) => {
//         console.log('@@@@@@@@@@@@@@@@@@@ re-try @@@@@@@@@@@@@@@@@@@');
//         return new Promise((resolve) => {
//             resolve(axiosInstance.request(errorConfig));
//         });
//     };
//     // 실패 시
//     const onRejected = (error) => {
//         console.log('onReject : ', error);
//         if (error.config) {
//             return retry(error.config);
//         }
//         return Promise.reject(error);
//     };

//     axiosInstance.interceptors.response.use(onFulfilled, onRejected);

//     return axiosInstance;
// };

export default api;
