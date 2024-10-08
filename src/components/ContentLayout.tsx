import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router";
import LoadingPage from "@/components/LoadingPage";
import {Link} from "react-router-dom";
import {Card, Divider} from 'antd';
import 'antd/dist/antd.css';
import {HomeOutlined} from "@ant-design/icons";
import './index.css'

const menuItems = [
    {
        key: '/about',
        label: '实验室概述',
        children: [
            {key: '/about/introduction', label: '实验室介绍'},
            {key: '/about/facilities', label: '设施设备'},
            {key: '/about/add', label: '加入我们'},
        ],
    },
    {
        key: '/member', label: '实验室成员', children: []
    },
    {
        key: '/projects', label: '科学研究',
        children: [
            {key: '/projects/direction', label: '研究方向'},
            {key: '/projects/project', label: '科研项目'},
            {key: '/projects/achievement', label: '研究成果'},
        ],
    },
    {
        key: '/articles', label: '论文专利',
        children: [
            {key: '/articles/paper', label: '论文'},
            {key: '/articles/patent', label: '专利'},
        ],
    },
    {
        key: '/contact', label: '联系我们', children: [],
    },
    {
        /*首页搜索框搜索内容*/
        key: '/result', label: '搜索结果', children: [],
    },
    {
        key: '/message', label: '信息中心', children: [
            {key: '/message/new', label: '新闻动态'},
            {key: '/message/notice', label: '通知公告'}
        ],
    }
]

const ContentLayout = ({children}) => {
    const location = useLocation();
    // 菜单项ID，实需要从URL或其他状态管理中获取
    const defaultSelectedKey = location.pathname;
    const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const item = menuItems.find(item => defaultSelectedKey.startsWith(item.key))
        setSelectedItem(item);
        setLoading(false)
    }, [selectedKey]);

    if (loading) {
        return (
            <>
                <LoadingPage/>
            </>
        ); // 如果 selectedItem 为 null，显示加载加载组件
    }
     /*!找寻item,主要是针对包含detail的路径*/
    const foundItem = selectedItem.children.find(item => item.key === selectedKey) ||
        selectedItem.children.find(item => selectedKey.startsWith(item.key));
    const Sidebar = () => {
        return (
            <>
                {/* 顶部标题栏 */}
                <div style={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: '#F2F2F2FF',
                    lineHeight: '50px',
                    fontWeight: 'bold'
                }}>
                    <span style={{margin: 0, display: 'flex', alignItems: 'center'}}>
                        <HomeOutlined style={{marginRight: 8}}/>
                        <Link to="/" style={{color: 'black', textDecoration: 'none', transition: 'color 0.3s'}}
                              onMouseEnter={() => {
                              }}
                              onMouseLeave={() => {
                              }}
                        >
                            首页
                        </Link>
                        {' >> '}
                        <Link
                            to={selectedItem.key}
                            style={{
                                color: selectedItem.key === selectedKey ? '#0b6bb7' : 'black',
                                textDecoration: 'none',
                                transition: 'color 0.3s'
                            }}
                        >
                            {selectedItem.label}
                        </Link>
                        {selectedItem.children && selectedItem.children.length > 0 && (
                            <Link
                                to={selectedKey}
                                style={{
                                    color: selectedKey === selectedItem.children.find(item => item.key === selectedKey)?.key ? '#0b6bb7' : 'black',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s'
                                }}>
                                {' >> '}
                                {foundItem?.label || ''}
                            </Link>
                        )}
                        {/*!渲染正文 判断导航栏路径是否倒数第二个为'detail*/}
                        {selectedKey.includes('detail')&&selectedKey.split('/')[selectedKey.split('/').length - 2] === 'detail' && (
                            <div>{'>>'}<span style={{color: '#0b6bb7'}}>正文</span></div>)}
                    </span>
                </div>
                <Divider style={{marginTop: '0', marginBottom: '10px', color: '#274171'}}/>

                {/* 菜单栏 */}
                <div style={{
                    width: '20%',
                    backgroundColor: '#fdfdfd',
                    padding: '10px',
                    float: 'left',
                    marginTop: '10px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0.5, 0.5)' /* 轻微的阴影效果 */
                }}>
                    {/* 是一个特殊的菜单项*/}
                    <div key={selectedItem.key + '/'} style={{
                        backgroundColor: '#274171',
                        height: '60px',
                        color: '#fdfdfd',
                        textAlign: 'center',
                        lineHeight: '60px',
                        fontSize: '22px',
                        fontWeight: 'bold'
                    }}>
                        <span>{selectedItem.label}</span>
                    </div>
                    {/* 常规菜单项 */}
                    <div style={{minHeight: 180, border: '3px solid #fdfdfd'}}>
                        {selectedItem.children && selectedItem.children.length > 0 && selectedItem.children.map(item => (
                            <Link
                                to={item.key}
                                key={item.key}
                                onClick={() => setSelectedKey(item.key)}
                                className={`link-item ${(item.key === selectedKey || selectedKey.startsWith(item.key)) ? 'selected' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        );
    };
    // 右侧内容区域
    const cardStyle = {
        borderRadius: 5,
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        overflow: 'hidden',
        width: '78%', float: 'right', padding: '10px',
        border: '1px solid #ddd', // 添加边框
        minHeight: '200px', // 设置最小高度以避免内容太少时看起来不美观
        marginLeft: '2%', // 增加左边距以与侧边栏分隔
        marginTop: '10px', // 顶部边距以与侧边栏的顶部对齐
    }
    const ContentArea = ({children}) => (
        <Card style={cardStyle}>
            {children}
        </Card>
    );
    return (
        <div style={{overflow: 'auto'}}>
            <Sidebar/>
            <ContentArea children={children}/>
        </div>
    );
};

export default ContentLayout;