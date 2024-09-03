import React from 'react';
import Slider from 'react-slick';
import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalLayout from "@/layouts/GlobalLayout";
import carousel01 from '@/assets/carousel01.jpg';
import carousel02 from '@/assets/carousel02.jpg';
import carousel03 from '@/assets/carousel03.jpg';
import carousel04 from '@/assets/carousel04.jpg';
import NewAndNoticeComponent from "@/components/NewAndNoticeComponent";
import AchievementComponent from "@/components/AchievementComponent";
import ProjectComponent from "@/components/ProjectComponent";
import {Link} from "react-router-dom";

function CarouselComponent() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        adaptiveHeight: false,
        arrows: true,
    };

    const slides = [
        {
            key: '1',
            src: carousel01,
            alt: '多模态疼痛管理机制在慢性疼痛治疗中的探索',
            description: '多模态疼痛管理机制在慢性疼痛治疗中的探索',
            link: '/projects/project/detail/5'
        },
        {
            key: '2',
            src: carousel02,
            alt: '免疫疗法在肿瘤治疗中的应用与优化',
            description: '免疫疗法在肿瘤治疗中的应用与优化',
            link: '/projects/project/detail/3'
        },
        {
            key: '3',
            src: carousel03,
            alt: 'T深度学习驱动的医学影像智能诊断模型“MediVision”',
            description: 'T深度学习驱动的医学影像智能诊断模型“MediVision”',
            link: '/projects/achievement/detail/1'
        },
        {
            key: '4',
            src: carousel04,
            alt: '基于自然语言处理与医学影像的肺癌智能筛查模型“LungGuard AI”',
            description: '基于自然语言处理与医学影像的肺癌智能筛查模型“LungGuard AI”',
            link: '/projects/achievement/detail/3'
        },
    ];

    return (
        <GlobalLayout>
            <div style={{width: '100%'}}>
                <Slider {...settings}>
                    {slides.map(slide => (
                        <div key={slide.key} style={{position: 'relative', overflow: 'hidden'}}>
                            <Link to={slide.link}
                               style={{display: 'block', width: '100%', height: '500px', position: 'relative'}}>
                                <img src={slide.src} alt={slide.alt}
                                     style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    color: 'white',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    padding: '10px 20px',
                                    borderRadius: '10px',
                                    fontSize: '16px',
                                    textAlign: 'center',
                                    width: 'calc(100% - 40px)',
                                }}>
                                    {slide.description}
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
            <div style={{
                width: '80%',
                marginLeft: '10%',
                backgroundColor: '#fff',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <NewAndNoticeComponent/>
                <ProjectComponent/>
                <AchievementComponent/>
            </div>
        </GlobalLayout>
    );
}

export default CarouselComponent;

