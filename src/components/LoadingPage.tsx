import React from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css'; // 引入Ant Design样式

// 自定义加载页面组件
const LoadingPage = ({ tip = 'Loading...' }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin tip={tip} size="large" />
    </div>
);

export default LoadingPage;