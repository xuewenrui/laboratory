/**
 * 研究成果组件
 * @constructor
 */
import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {CaretRightOutlined, NotificationOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom"; // 引入Ant Design样式

const AchievementComponent = () => {
    // 假设的图片数据和标题
    const images = [
        { src: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore2af8ec9cf1c0482b8d49cdc445872cc9pms_1568617574.69725219.jpg', alt: 'Image 1', title: '研究成果1',link:'/projects/achievement/detail/1' },
        { src: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore2d2b2dc34f3d448ca66d904319f2a82e8CF633C1C7DA7D85BD452E02900C1194.png', alt: 'Image 2', title: '研究成果2',link:'/projects/achievement/detail/2' },
        { src: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore2d46b4df4b8c4fc0a91f429eef950272428_428_9585E85D63245B62CFE4993ABCDB75D0mp.png', alt: 'Image 3', title: '研究成果3',link:'/projects/achievement/detail/3' },
        { src: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore308bca5da7964b54b6d0e2b71f3c2d89pms_1575882742.47577677.jpg', alt: 'Image 4', title: '研究成果4',link:'/projects/achievement/detail/4' }
    ];
    const styles = {
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
        moreLink: {
            cursor: 'pointer', // 添加鼠标悬停效果
            textDecoration: 'none',
            color: '#007bff', // 更清晰的链接颜色
        },
    }
    return (
        <div className="achievement-container">
                <div style={styles.header}>
                    {/* 将图标和标题包裹在一个额外的flex容器中 */}
                    <div style={styles.headerTitle}>
                        <NotificationOutlined style={{marginRight: '8px'}}/>
                        研究成果
                    </div>
                    <Link to={'/projects/achievement'} style={styles.moreLink}>More
                        <CaretRightOutlined/>
                    </Link>
                </div>
            <Row gutter={[24, 24]}>
                {images.map((image, index) => (
                    <Col span={6} key={index}>
                        <Card
                            className="achievement-card"
                            cover={
                                <Link to={image.link} style={{ display: 'block', width: '100%', height: '200px', overflow: 'hidden' }}>
                                    <img alt={image.alt} src={image.src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Link>
                            }
                        >
                            <div className="card-title">
                                <Link to={image.link} className="card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {image.title}
                                </Link>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default AchievementComponent;