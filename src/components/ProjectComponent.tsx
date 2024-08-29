import {CaretRightOutlined, ExperimentOutlined, LeftOutlined, MonitorOutlined, RightOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './index.css'
import {Button, Card, Col, Row} from "antd";
import './projectComponent.css'

/**
 * 科研项目组件
 * @constructor
 */

//假设的projects数据
const projects = [
    {
        id: 1,
        title: '精准医疗基因编辑平台开发',
        url: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore381200dafcec4a7aaf828d00d1935653pms_1620804174.25629864.jpg',
        link: '/projects/project/detail/1'
    },
    {
        id: 2,
        title: '神经退行性疾病早期诊断标志物研究',
        url: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore3a130f99fc324e1d95e6a6928d56a939pms_1628162373.00133777.jpg',
        link: '/projects/project/detail/2'
    },
    {
        id: 3,
        title: '免疫疗法在肿瘤治疗中的应用与优化',
        url: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore3aa3bfedae90415c8adbd266ec929ea4pms_1669371915.92969662.png',
        link: '/projects/project/detail/3'
    },
    {
        id: 4,
        title: '心血管疾病基因与表观遗传学研究',
        url: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore3c82fa9df9674ecd85093e08ef2c8a99pms_1691909449.85667498.png',
        link: '/projects/project/detail/4'
    },
    {
        id: 5,
        title: '多模态疼痛管理机制在慢性疼痛治疗中的探索',
        url: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore3d92e5e803ed46ff8aaadf1d52952aee428_428_73CD9E3F0CEF5E08D1DF2541D1AF6F7Cmp.png',
        link: '/projects/project/detail/5'
    },
    {
        id: 6,
        title: '微生物组与健康关系研究',
        url: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore40cd13020e52442398c1827350099c35pms_1624605212.44478669.jpg',
        link: '/projects/project/detail/6'
    },
    {
        id: 7,
        title: '多模态影像融合技术在肿瘤精准治疗中的应用研究',
        url: 'https://yr-ywg.oss-cn-shanghai.aliyuncs.com/ywgstore4af96c0239df4d34bc198f8a73631c5f428_428_2A74F92357DFFB70DD3B9017C4F513D3.png',
        link: '/projects/project/detail/7'
    },
];
/*!图片放大缩小组件*/
const ImageZoom = ({src, alt}) => {
    const [scale, setScale] = useState(1); // 初始缩放比例为1

    const handleMouseEnter = () => {
        setScale(1.1); // 鼠标悬停时放大
    };

    const handleMouseLeave = () => {
        setScale(1); // 鼠标离开时恢复原状
    };

    return (
        <Card
            style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '200px', // 或者根据需要设置高度
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: 'auto',
                    transition: 'transform 0.3s ease', // 平滑过渡效果
                    transform: `scale(${scale})` // 应用缩放
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </Card>
    );
};

const ProjectComponent = () => {
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
        moreLink: {
            fontSize: '16px', color: '#007bff', textDecoration: 'none', cursor: 'pointer', fontWeight: 'bold'
        },
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < projects.length - 4) {
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else {
                setCurrentIndex(0); // 重置到第一个项目
            }
        }, 3000); // 每3秒轮播一次

        return () => clearInterval(interval); // 清理定时器
    }, [currentIndex, projects.length]);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < projects.length - 4) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const visibleProjects = projects.slice(currentIndex, currentIndex + 4);

    return (
        <div className='achievement-container'>
            <div style={styles.header}>
                <div style={styles.headerTitle}>
                    <MonitorOutlined style={{marginRight: '8px'}}/>
                    科研项目
                </div>
                <Link to="/projects/achievement" className='moreLink'>
                    More <CaretRightOutlined style={{marginLeft: '4px', verticalAlign: 'middle'}}/>
                </Link>
            </div>
            <Row gutter={[16, 16]} justify="space-between" align="middle" style={{position: 'relative'}}>

                {/*左按钮*/}
                <Col span={1} style={{display: 'flex', justifyContent: 'flex-start', overflow: 'hidden',}}>
                    <Button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <LeftOutlined style={{verticalAlign: 'middle'}}/>
                    </Button>
                </Col>

                {/* 图片列表*/}
                <Col span={22} style={{overflow: 'hidden'}}>
                    <Row gutter={[16, 16]}>
                        {visibleProjects.map((project) => (
                            <Col key={project.id} span={6} className="card-col" style={{overflow: 'hidden'}}>
                                <Link to={project.link} style={{display: 'block', width: '100%', height: '100%'}}>
                                    <Card
                                        style={{width: '100%', position: 'relative', overflow: 'hidden'}}
                                        className='card'
                                    >
                                        <ImageZoom src={project.url} alt={project.title}/>
                                        <div className='cardHoverName'>
                                            <span title={project.title}>{project.title.length > 20 ? project.title.slice(0, 20) + '...' : project.title}</span>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Col>

                {/*右按钮*/}
                <Col span={1} style={{display: 'flex', justifyContent: 'flex-end', overflow: 'hidden'}}>
                    <Button
                        onClick={handleNext}
                        disabled={currentIndex === projects.length - visibleProjects.length}
                    ><RightOutlined style={{verticalAlign: 'middle'}}/>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default ProjectComponent;