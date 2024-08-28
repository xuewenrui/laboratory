import React from 'react';
import {List, Divider, Card} from 'antd';
import {
    CaretRightOutlined,
    NotificationOutlined,
    PaperClipOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'; // 引入Ant Design样式
import './index.css'
import {Link} from "react-router-dom";
// 假设的数据
const notices = [
    {
        title: '关于实验室器材的使用的注意事项',
        createdTime: '2024-08-27',
        link: '/message/notice/detail/1'
    },
    {
        title: '实验室安全培训通知',
        createdTime: '2024-08-27',
        link: '/message/notice/detail/2'
    },
    {
        title: '设备维护与暂停使用通知',
        createdTime: '2024-08-27',
        link: '/message/notice/detail/3'
    },
    {
        title: '实验室开放时间与假期安排通知',
        createdTime: '2024-08-27',
        link: '/message/notice/detail/4'
    },
    {
        title: '新进人员培训与入室手续通知',
        createdTime: '2024-08-27',
        link: '/message/notice/detail/5'
    },

];

const news = [
    {
        title: '全新升级！实验室官方网站震撼上线，科研资源共享更便捷',
        createdTime: '2024-08-27',
        link: '/message/new/detail/1'
    },
    {
        title: '引领科研新风尚：实验室网站启用智能搜索，加速科研成果发现',
        createdTime: '2024-08-27',
        link: '/message/new/detail/2'
    },
    {
        title: '科研新门户，探索无界！XX实验室网站新增在线实验预约功能',
        createdTime: '2024-08-27',
        link: '/message/new/detail/3'
    },
    {
        title: '创新引领未来：研究所官方网站推出科研项目在线申报系统',
        createdTime: '2024-08-27',
        link: '/message/new/detail/4'
    },
    {
        title: '强化国际合作，实验室网站新增多语言版本，助力全球科研交流',
        createdTime: '2024-08-27',
        link: '/message/new/detail/5'
    },
];

const NewAndNoticeComponent = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            alignItems: 'stretch', // 让两个部分等高
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            width: '48%',
            paddingRight: '2%', // 仅对左侧部分使用
            boxSizing: 'border-box', // 包含padding和border在宽度内
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
        },
        headerTitle: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#274171',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
        },
        listItem: {
            marginTop: '4px', // 添加一些间距以区分列表项
            color: 'inherit'
        },
        moreLink: {
            fontSize: '16px', color: '#007bff', textDecoration: 'none', cursor: 'pointer', fontWeight: 'bold'
        },
        divider: {
            margin: '8px 0', // 调整分隔符的间距
        },
    };

    // 渲染左侧通知公告部分
    const renderNoticeSection = () => (
        <div style={styles.section}>
            <div style={styles.header}>
                {/* 将图标和标题包裹在一个额外的flex容器中 */}
                <div style={styles.headerTitle}>
                    <NotificationOutlined style={{marginRight: '8px'}}/>
                    通知公告
                </div>
                <Link to={'/message/notice'} style={styles.moreLink}>More
                    <CaretRightOutlined/>
                </Link>
            </div>
            <List
                itemLayout="vertical"
                dataSource={notices}
                renderItem={item => (
                    <List.Item>
                        <a href={item.link}
                           style={styles.listItem}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <span className="hover-title"
                                      title={item.title}>{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</span>
                                <span style={{fontSize: '12px', color: '#999'}}>{item.createdTime}</span>
                            </div>
                        </a>
                        <Divider dashed={true}/>
                    </List.Item>
                )}
            />
        </div>
    );

    // 渲染右侧新闻动态部分
    const renderNewsSection = () => (
        <div style={styles.section}>
            <div style={styles.header}>
                <div style={styles.headerTitle}>
                    <PaperClipOutlined color='blue' style={{marginRight: '8px'}}/>
                    新闻动态
                </div>
                <Link to={'/message/new'} style={styles.moreLink}>More
                    <CaretRightOutlined/>
                </Link>
            </div>
            <List
                itemLayout="vertical"
                dataSource={news}
                renderItem={item => (
                    <List.Item>
                        <a href={item.link}
                           style={styles.listItem}>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <span className="hover-title"
                                      title={item.title}>{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</span>
                                <span style={{fontSize: '12px', color: '#999'}}>{item.createdTime}</span>
                            </div>
                        </a>
                        <Divider dashed={true}/>
                    </List.Item>
                )}
            />
        </div>
    );
    const cardStyles = {
        width: '100%', // 或者你想要的任何宽度
        marginBottom: '0px', // 底部外边距
        marginTop: '5px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
    };

    return (
        <Card style={cardStyles} > {/* Card组件，可以添加标题和额外内容 */}
            <div style={{ display: 'flex', alignItems: 'stretch' }}> {/* 使用flex布局来更好地控制子元素 */}
                {renderNoticeSection()}
                <Divider type="vertical" style={{ height: '100%', margin: '0 1%' }} /> {/* 垂直分隔符 */}
                {renderNewsSection()}
            </div>
        </Card>
    );
};

export default NewAndNoticeComponent;