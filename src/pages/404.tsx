/*
import {Button, Result} from 'antd';
import React from 'react';
import {useNavigate} from "@@/exports";


function App() {
    const navigate = useNavigate();
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={() => {
                navigate(-1);
            }}>Back Home</Button>}
        />
    );
}

export default App;
*/

import { Button, Result } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from "@@/exports";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        // 获取当前路径
        const pathname = window.location.pathname;

        // 如果路径不是根路径，则重定向到首页或指定页面
        if (pathname !== '/') {
            window.location.href = '/laboratory' + pathname;
        }
    }, []);

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={() => {
                    navigate(-1);
                }}>
                    Back Home
                </Button>
            }
        />
    );
}

export default App;

