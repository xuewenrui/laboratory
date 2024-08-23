import React from 'react';
import {Layout, Typography, Divider, Card} from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout";
import BackgroundImage from "@/components/BackgroundImage";
import {Outlet} from "umi";

const {Title, Paragraph} = Typography;

function Index() {

    return (
        <GlobalLayout>
            <BackgroundImage/>
            <Layout style={{margin: '20px'}}>
                <Card  style={{
                    width: '100%',
                    maxWidth: '1000px', // 稍微增加宽度以适应更多内容
                    margin: '20px auto', // 水平和垂直居中
                    padding: '20px',
                    borderRadius: 12, // 更大的边框半径
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)', // 更明显的阴影
                    backgroundColor: '#fff',
                    overflow: 'hidden', // 防止内容溢出
                }}>
                </Card>
            </Layout>
        </GlobalLayout>
    );
}

export default Index;