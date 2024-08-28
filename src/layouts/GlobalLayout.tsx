import React, {useEffect, useState} from 'react';
import {Layout, message} from 'antd';
import {Link} from 'umi';
import logo1 from '../assets/dzkd_logo.png';
import logo2 from '../assets/bg-hero.png';
import 'antd/dist/antd.css';
import './index.css'
import Search from "antd/es/input/Search";
import {useLocation} from "react-router";
import {useNavigate} from "@@/exports";
import ScrollToTopButton from "@/components/ScrollToTopButton";


const {Header, Content, Footer} = Layout;

function GlobalLayout({children}) {
    const navigate = useNavigate();
    const footerStyle = {
            bottom: 0,
            width: '100%',
            background: '#274171',
            color: 'white',
            textAlign: 'center',
            minHeight: '250px',
            lineHeight: '180px',
            backgroundImage: `url(${logo2})`,
            boxShadow: '0 -3px 10px rgba(39, 65, 113, 0.2)', // 添加上边框阴影
            marginTop: '10px',
        }
    //!导航栏项列表
    const menuItems = [
        {key: '/home', label: '首页', children: []},
        {
            key: '/about',
            label: '实验室概述',
            children: [
                {key: '/about/introduction', label: '实验室介绍'},
                {key: '/about/facilities', label: '设施设备'},
                {key: '/about/add', label: '加入我们'},
            ]
        },
        {key: '/member', label: '实验室成员', children: []},
        {
            key: '/message', label: '信息中心', children: [
                {key: '/message/new', label: '新闻动态'},
                {key: '/message/notice', label: '通知公告'}
            ]
        },
        {
            key: '/projects', label: '科学研究',
            children: [
                {key: '/projects/direction', label: '研究方向'},
                {key: '/projects/project', label: '科研项目'},
                {key: '/projects/achievement', label: '研究成果'},
            ]
        },
        {
            key: '/articles', label: '论文专利',
            children: [
                {key: '/articles/paper', label: '论文'},
                {key: '/articles/patent', label: '专利'},
            ]
        },
        {
            key: '/contact', label: '联系我们',
            children: []
        }

    ]
    //!搜索函数
    const onSearch = (keyWord: string) => {
        if (keyWord == null || keyWord.trim() === '') {
            message.warning('请输入搜索内容！')
            return;
        }
        navigate('/result')

    }
    //!设置导航栏选中
    const [selectedPath, setSelectedPath] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setSelectedPath(location.pathname);
    }, [location]);

    const isActive = (path) => {
        return selectedPath.startsWith(path);
    };
    const NavMenu = () => {
        return (
            <nav className="navbar">
                <ul>
                    {menuItems.map(item => (
                        <li key={item.key} className="navbar-item">
                            <Link
                                to={item.key}
                                className={`navbar-link ${isActive(item.key) ? 'menuItemSelected' : ''}`}
                            >
                                {item.label}
                            </Link>
                            {item.children && item.children.length > 0 && (
                                <ul className="submenu">
                                    {item.children.map(child => (
                                        <li key={child.key} className="submenu-item">
                                            <Link
                                                to={child.key}
                                                className="submenu-link"
                                            >
                                                {child.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        );
    };

    return (
        <Layout style={{minHeight: '100vh', backgroundColor: '#fff'}}>
            <Header style={{
                display: 'flex',
                alignItems: 'center', // 垂直居中
                backgroundColor: '#fdfdfd',
                color: 'white', //
                position: 'relative', // 如果需要的话，设置Header的位置
                width: '100%', // 确保Header宽度为100%
                height: '138px',
                padding: '0 20px' // 添加一些内边距以避免内容与边缘过于接近
            }}>
                <div style={{
                    marginRight: 'auto', // 将logo推向左侧，并允许右侧内容（如果有的话）填充剩余空间
                    marginLeft: '40px' // 给logo左侧添加间距
                }}>
                    <img src={logo1} alt="Logo" style={{
                        height: '100px',
                        width: 'auto', marginRight: '20px'
                    }}/>
                </div>
                <div style={{
                    textAlign: 'center', // 文本水平居中
                    fontSize: '35px',
                    fontWeight: 'bold',
                    color: '#0b4088',
                    flex: '0 0 auto', // 防止flex项目增长或缩小
                    marginLeft: '280', // 将文本div推向中间（与marginRight: 'auto'在logo的div上类似，但这里是为了居中）
                    marginRight: 'auto', // 与marginLeft相同，用于确保居中
                    lineHeight: '45px'
                }}>
                    <span>数基生命与智能健康实验室</span>
                    <br/> {/* 如果需要，可以在中英文之间添加换行 */}
                    <span style={{fontSize: '20px'}}>Digital Life and Intelligent Health Laboratory</span>
                </div>
                <div style={{
                    marginLeft: 'auto', // 将搜索框推向右侧
                    marginRight: '30px' // 给搜索框右侧添加间距
                }}>
                    <Search
                        placeholder="请输入搜索内容"
                        allowClear
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
            </Header>
            {/* 将NavMenu组件放在Header下方 */
            }
            <NavMenu/>
            <Content>
                {children}
            </Content>
            <Footer style={footerStyle}>
                <div style={{textAlign: 'center'}}>
                    © {/*{new Date().getFullYear()}*/}2024, 电子科技大学 | 数基生命与智能健康实验室
                    {/* 可以添加社交图标或链接 */}
                </div>
            </Footer>
            <ScrollToTopButton/>
        </Layout>
    );
}

export default GlobalLayout;
