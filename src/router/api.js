import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 1000 * 5,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 在每个请求中添加Bearer令牌
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('aikan_user_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;
