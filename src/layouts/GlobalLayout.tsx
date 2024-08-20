import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'umi'; // 确保这是 Umi.js 的 Link 组件
import logo2 from '../assets/lab_logo.png';
import logo1 from '../assets/dzkd.jpg';
import 'antd/dist/antd.css';
import {useLocation} from "@@/exports";
import styles from './index.less'
import Search from "antd/es/input/Search";

const {Header, Content, Footer} = Layout;

function BasicLayout({children}) {

    // !设置Header的背景色和padding来增加高度
    const headerStyle = {
        backgroundColor: '#ffffff',
        padding: '0 100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '150px', // 增加头部高度

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
    const linkStyle = {
        marginRight: 40, // 设置菜单项之间的间距
        textDecoration: 'none',
    }
    //!导航栏项列表
    const menuItems = [
        {key: '/', label: '首页', englishLabel: 'Home'},
        {key: '/about', label: '关于我们', englishLabel: 'About'},
        {key: '/members', label: '团队成员', englishLabel: 'Team'},
        {key: '/projects', label: '科研项目', englishLabel: 'Project'},
        {key: '/articles', label: '文章阅览', englishLabel: 'Article'},
        {key: '/publications', label: '出版', englishLabel: 'Publication'},
        {key: '/contact', label: '联系我们', englishLabel: 'Contact'},
    ]
    //!菜单样式
    const menuStyle = {
        paddingLeft: '220px',
        backgroundColor: '#015da4',//背景
        border: '1px solid #e8e8e8', // 设置边框为1px实线，颜色为#e8e8e8
        borderRadius: '10px', // 可选：设置边框圆角
    }
    //!搜索函数
    const onSearch = (value: string) => console.log(value);
    //!设置导航栏选中
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([]);
    useEffect(() => {
        // !根据当前路由设置selectedKeys
        //console.log(location.pathname)
        const lastIndex = location.pathname.lastIndexOf('/'); // 去除字符串
        const lastPart = lastIndex !== -1 ? location.pathname.slice(lastIndex) : '/'
        //console.log(lastPart)// /xxxx
        setSelectedKeys([lastPart]);
    }, [location.pathname]);

    //! NavMenu 组件，用于显示菜单项
    const NavMenu = () => (
            <div style={{
                width: '100%',
                padding: '1px 0',
                backgroundColor: '#ffffff',
            }}>
                <Menu theme="light" mode="horizontal" selectedKeys={selectedKeys} style={menuStyle}>
                    {menuItems.map(item => (
                        <Menu.Item key={item.key} >
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Link style={linkStyle} to={item.key}>
                                    <div  className={location.pathname=== item.key ? `${styles.menuItemSelected}` : `${styles.menuItemNotSelected}`}>{item.label}{/*<br/>{item.englishLabel}*/}</div>
                                </Link>
                            </div>
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
        );
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={headerStyle}>
                <div style={{flex: '0 0 auto', marginRight: 20}}>
                    <img src={logo1} alt="Logo" style={logoStyle}/>
                    <img src={logo2} alt="Logo" style={logoStyle}/>
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
            <Content style={{padding: '0 50px'}}>
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

export default BasicLayout;
