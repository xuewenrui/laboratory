import React, {useEffect, useState} from 'react';
import {Layout, Menu} from 'antd';
import {Link} from 'umi'; // 确保这是 Umi.js 的 Link 组件
import logo from '../assets/lab_logo.png';
import 'antd/dist/antd.css';
import {useLocation} from "@@/exports";
import styles from './index.less'
import Search from "antd/es/input/Search";
const {Header, Content, Footer} = Layout;

function BasicLayout({children}) {

    // !设置Header的背景色和padding来增加高度
    const headerStyle = {
        backgroundColor: '#fff',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px', // 增加头部高度
    };
    // !设置logo的样式，包括增加高度
    const logoStyle = {
        height: '64px', // 增加logo的高度
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
        color: 'inherit',
        textDecoration: 'none',
        fontSize: '16px',
        textAlign: 'center',
    }
    //!导航栏项列表
    const menuItems = [
        {key: '/', label: '首页'},
        {key: '/about', label: '关于我们'},
        {key: '/members', label: '团队成员'},
        {key: '/projects', label: '科研项目'},
        {key: '/articles', label: '文章阅览'},
        {key: '/publications', label: '出版'},
        {key: '/contact', label: '联系我们'},
    ]
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
        width:'100%',
        padding: '1px 0',
        backgroundColor: '#f0f0f0',
    }}>
        <Menu theme="light" mode="horizontal" selectedKeys={selectedKeys}>
            {menuItems.map(item => (
                <Menu.Item key={item.key}
                           className={location.pathname === item.key ? `${styles.menuItemSelected}` : ''}>
                    <Link style={linkStyle} to={item.key}>
                        {item.label}
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    </div>
)
    ;

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={headerStyle}>
                <div style={{flex: '0 0 auto', marginRight:20}}>
                    <img src={logo} alt="Logo" style={logoStyle} />
                </div>
                <div style={{flex: '1 1 auto', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <div style={{marginLeft: 20}}>
                        <Search
                            placeholder="请输入搜索内容"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        />
                    </div>
                </div>
            </Header>
            {/* 将NavMenu组件放在Header下方 */}
            <NavMenu />
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
