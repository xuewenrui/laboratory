/**
 * 研究成果组件
 * @constructor
 */
import React from 'react';
import {Card, Row, Col} from 'antd';
import 'antd/dist/antd.css';
import {CaretRightOutlined, ExperimentOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom"; // 引入Ant Design样式

const AchievementComponent = () => {
    // 假设的图片数据和标题
    const images = [
        {
            src: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore2af8ec9cf1c0482b8d49cdc445872cc9pms_1568617574.69725219.jpg',
            alt: 'Image 1',
            title: '深度学习驱动的医学影像智能诊断模型“MediVision”',
            link: '/projects/achievement/detail/1'
        },
        {
            src: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore2d2b2dc34f3d448ca66d904319f2a82e8CF633C1C7DA7D85BD452E02900C1194.png',
            alt: 'Image 2',
            title: '多模态融合的心血管风险评估系统“HeartGuard”',
            link: '/projects/achievement/detail/2'
        },
        {
            src: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore2d46b4df4b8c4fc0a91f429eef950272428_428_9585E85D63245B62CFE4993ABCDB75D0mp.png',
            alt: 'Image 3',
            title: '基于自然语言处理与医学影像的肺癌智能筛查模型“LungGuard AI”',
            link: '/projects/achievement/detail/3'
        },
        {
            src: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore308bca5da7964b54b6d0e2b71f3c2d89pms_1575882742.47577677.jpg',
            alt: 'Image 4',
            title: '基于多模态数据的阿尔茨海默病病程预测模型“AlzPredict”',
            link: '/projects/achievement/detail/4'
        }
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

    }
    return (
        <div className="achievement-container"
             style={{padding: '20px', borderRadius: '8px', overflow: 'hidden'}}>
            <div style={styles.header}>
                {/* 将图标和标题包裹在一个额外的flex容器中 */}
                <div style={styles.headerTitle}>
                    <ExperimentOutlined style={{marginRight: '8px'}}/>
                    研究成果
                </div>
                <Link to="/projects/achievement" className='moreLink'>
                    More <CaretRightOutlined style={{marginLeft: '4px', verticalAlign: 'middle'}}/>
                </Link>
            </div>
            <Row gutter={[24, 24]}>
                {images.map((image, index) => (
                    <Col span={6} key={index} style={{marginBottom: '20px'}}>
                        <Card
                            className="achievement-card"
                            style={{
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                            cover={
                                <Link to={image.link}
                                      style={{display: 'block', width: '100%', height: '200px', overflow: 'hidden'}}>
                                    <img alt={image.alt} src={image.src} style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '8px 8px 0 0',
                                    }}
                                         className='zoomable-image'
                                    />
                                </Link>
                            }
                        >
                            <div className="card-title"
                                 style={{
                                     padding: '10px 10px', // 减小内边距
                                     backgroundColor: '#fff',
                                     borderTop: '1px solid #eee',
                                     overflow: 'hidden', // 隐藏超出部分
                                     fontSize: '14px'
                                 }}>
                                <Link to={image.link} className="card-link" style={{
                                    textDecoration: 'none',
                                    color: '#333',
                                    fontWeight: 'bold'
                                }}>
                                    <span
                                        title={image.title}>{image.title.length > 20 ? image.title.slice(0, 20) + '...' : image.title}</span>
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