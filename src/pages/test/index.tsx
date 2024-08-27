import React, { useState, useEffect } from 'react';
import { Layout, Menu, Image } from 'antd';
import 'antd/dist/antd.css';
import image from '../../assets/jcqy.png'
const { Header, Content, Footer } = Layout;

const ResponsiveLayout = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = (e) => {
        setActiveKey(e.key);
    };

    return (
        <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', backgroundColor: isScrolled ? '#fff' : 'transparent', transition: 'background-color 0.3s' }}>
                <div style={{ marginRight: 'auto' }}>
                    <Image src={image} alt="Logo" style={{ height: 40, margin: '12px 0' }} />
                </div>
                <Menu
                    mode="horizontal"
                    onClick={handleMenuClick}
                    selectedKeys={[activeKey]}
                    style={{ lineHeight: '64px',width: '50%' }}
                >
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="pages">Pages</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="blog">Blog</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '20px 50px', minHeight: '100vh' }}>
                {/* 模拟长内容 */}
                <div style={{ height: '1500px' }}>Scroll down to see the header behavior</div>
            </Content>
            <Footer style={{ textAlign: 'center', padding: '20px 0' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default ResponsiveLayout;