import axios from 'axios'
const service = axios.create({
    baseURL: 'https://your-api-url.com', // api的base_url
    timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data;
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default service;

/*

// src/pages/index.js
import React, { useEffect } from 'react';
import request from '../utils/request';
function HomePage() {
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await request.get('/some-endpoint');
            console.log(response); // 处理你的数据
        } catch (error) {
            console.error('请求出错:', error);
        }
    }

    return (
        <div>
            {/!* 渲染你的组件 *!/}
        </div>
    );
}

export default HomePage;
*/
