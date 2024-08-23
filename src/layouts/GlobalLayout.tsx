import React, {useEffect, useState} from 'react';
import {Layout} from 'antd';
import {Link} from 'umi';
import logo2 from '../assets/lab_logo.png';
import logo1 from '../assets/dzkd.jpg';
import 'antd/dist/antd.css';
import './index.css'
import Search from "antd/es/input/Search";
import {useLocation} from "react-router";

const {Header, Content, Footer} = Layout;

function GlobalLayout({children}) {

    // !设置Header的背景色和padding来增加高度
    const headerStyle = {
        backgroundColor: '#274272',
        padding: '0 100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '120px', // 增加头部高度
        //backgroundImage: `url(${backgroundImage})`, // 添加背景图片

    };
    // !设置logo的样式，包括增加高度
    const logoStyle = {
        height: '100px', // 增加logo的高度
        width: 'auto', // 保持logo的宽高比
    };

    const footerStyle = {
        bottom: 0,
        width: '100%',
        background: 'black',
        color: 'white',
        textAlign: 'center',
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
        {key: '/members', label: '实验室成员', children: []},
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
        {key: '/contact', label: '联系我们', children: []},
    ]
    //!搜索函数
    const onSearch = (value: string) => console.log(value);
  /*  const [selectedKey, setSelectedKey] = useState('/');
    //!设置导航栏选中
    const location = useLocation();
    useEffect(() => {
        // !根据当前路由设置selectedKey
        const pathArray = location.pathname
        const lastPath = pathArray || '/';
        console.log(lastPath);
        setSelectedKey(lastPath);
    }, [location.pathname]);*/
    //!设置导航栏选中
    const [selectedPath, setSelectedPath] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setSelectedPath(location.pathname);
    }, [location.pathname]);

    const isActive = (path) => {
        // 检查当前路径是否以给定的菜单项路径开始
        return location.pathname.startsWith(path);
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
                                                className={`submenu-link ${isActive(item.key) ? 'menuItemSelected' : ''}`} // 注意这里使用父菜单的key
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
    }


    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={headerStyle}>
                <div style={{flex: '0 0 auto', marginRight: 20}}>
                    {/* <img src={logo1} alt="Logo" style={logoStyle}/>
                    <img src={logo2} alt="Logo" style={logoStyle}/>*/}
                </div>
                <div style={{flex: '1 1 auto', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <div style={{marginLeft: 20}}>
                        <Search
                            placeholder="请输入搜索内容"
                            allowClear
                            size="large"
                            onSearch={onSearch}
                        />
                    </div>
                </div>
            </Header>
            {/* 将NavMenu组件放在Header下方 */}
            <NavMenu/>
            <Content>
                {children}
            </Content>
            <Footer style={footerStyle}>
                <div style={{textAlign: 'center'}}>
                    © {new Date().getFullYear()}, 电子科技大学 | 数基生命与智能健康实验室
                    {/* 可以添加社交图标或链接 */}
                </div>
            </Footer>
        </Layout>
    );
}

export default GlobalLayout;
