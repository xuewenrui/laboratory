import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router";
import LoadingPage from "@/components/LoadingPage";

const menuItems = [
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

const ContentLayout = () => {
    const location = useLocation();
// 假设的当前选中的菜单项ID，实际应用中可能需要从URL或其他状态管理中获取
    const defaultSelectedKey = location.pathname;

    const [selectedKey, setSelectedKey] = useState(defaultSelectedKey);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const item = menuItems.find(item => defaultSelectedKey.startsWith(item.key))
        setSelectedItem(item);
        setLoading(false)
    }, [defaultSelectedKey]);

    if (loading) {
        return (
            <>
                <LoadingPage/>
            </>
        ); // 如果 selectedItem 为 null，显示加载加载组件
    }

    const Sidebar = () => (
        <>
            {/* 顶部标题栏 */}
            <div style={{
                width: '100%',
                height: '50px',
                backgroundColor: '#F2F2F2FF',
                lineHeight: '50px',
                fontWeight: 'bold'
            }}>
                <h4 style={{margin: 0}}>首页 {'>>'} 关于我们</h4>
            </div>
            <hr style={{marginTop: '0', marginBottom: '10px'}}/>

            {/* 菜单栏 */}
            <div style={{width: '20%', backgroundColor: '#fdfdfd', padding: '10px', float: 'left', marginTop: '10px'}}>
                {/* 是一个特殊的菜单项*/}
                <div key={selectedItem.key + '/'} style={{
                    backgroundColor: '#274171',
                    height: '50px',
                    color: '#fdfdfd',
                    textAlign: 'center',
                    lineHeight: '50px',
                    fontSize: '20px',
                    fontWeight: 'bold'
                }}>
                    <span>{selectedItem.label}</span>
                </div>

                {/* 常规菜单项 */}
                {selectedItem.children && selectedItem.children.length > 0 && selectedItem.children.map(item => (
                    <div
                        key={item.key}
                        onClick={() => setSelectedKey(item.key)}
                        style={{
                            cursor: 'pointer',
                            marginBottom: '10px', // 增加间隔
                            padding: '10px 5px', // 增加内边距
                            textAlign: 'center',
                            fontSize: '16px', // 增大字体大小
                            ...(item.key === setSelectedKey ? {
                                backgroundColor: '#e0e0e0',
                                fontWeight: 'bold'
                            } : {borderBottom: '1px solid #ddd'}) // 选中项背景色和非选中项底部边框
                        }}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </>
    );
    // 右侧内容区域
    const ContentArea = () => (
        <div style={{
            width: '78%', float: 'right', padding: '10px',
            backgroundColor: '#f9f9f9', // 设置背景色以区分内容区域
            border: '1px solid #ddd', // 添加边框
            borderRadius: '5px', // 边框圆角
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // 添加阴影以增加立体
            minHeight: '200px', // 设置最小高度以避免内容太少时看起来不美观
            marginLeft: '2%', // 增加左边距以与侧边栏分隔
            marginTop: '10px', // 顶部边距以与侧边栏的顶部对齐
            //字体样式
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            color: '#333',
            lineHeight: '1.6',
        }}>
            {selectedItem ? <div>{selectedItem.content}</div> : <div>加载中...</div>}
        </div>
    );

    return (
        <div style={{overflow: 'auto'}}>
            <Sidebar/>
            <ContentArea/>
        </div>
    );
};

export default ContentLayout;