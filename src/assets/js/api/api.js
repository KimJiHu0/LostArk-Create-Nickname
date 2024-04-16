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

// import axios from 'axios';

// const api = (apiKey, nickname) => {
//     const axiosInstance = axios.create({
//         baseURL: `https://developer-lostark.game.onstove.com/characters`,
//         headers: {
//             accept: 'application/json',
//             authorization: `bearer ${apiKey}`,
//         },
//     });

//     const onFulfilled = (response) => response;
//     const retry = (errorConfig) => {
//         return new Promise((resolve) => {
//             let status = false;

//             const id = setTimeout(() => {
//                 console.log('retry');
//                 status = true;
//                 resolve(axiosInstance.request(errorConfig));
//             }, 10000);

//             if (status) clearInterval(id);
//         });
//     };
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

// export default api;
