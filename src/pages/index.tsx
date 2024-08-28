import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import GlobalLayout from "@/layouts/GlobalLayout";
import carousel01 from '@/assets/carousel01.jpg';
import carousel02 from '@/assets/carousel02.jpg';
import carousel03 from '@/assets/carousel03.jpg';
import carousel04 from '@/assets/carousel04.jpg';
import NewAndNoticeComponent from "@/components/NewAndNoticeComponent";
import AchievementComponent from "@/components/AchievementComponent";
import ProjectComponent from "@/components/ProjectComponent";

function CarouselComponent() {
    const slides = [
        { key: '1', src: carousel01, alt: 'Image 1', description: 'This is the first slide', link: '/carousel01' },
        { key: '2', src: carousel02, alt: 'Image 2', description: 'This is the second slide', link: '/carousel01' },
        { key: '3', src: carousel03, alt: 'Image 3', description: 'This is the third slide', link: '/carousel01' },
        { key: '4', src: carousel04, alt: 'Image 4', description: 'This is the fourth slide', link: '/carousel01' },
    ];

    return (
        <GlobalLayout>
            <div style={{ width: '100%', position: 'relative' }}>
                <Carousel autoplay dots={true} arrows={true} style={{ width: '100%', height: '500px' }}>
                    {slides.map(slide => (
                        <div key={slide.key} style={{ position: 'relative', overflow: 'hidden' }}>
                            <a href={slide.link} target="_blank" rel="noopener noreferrer">
                                <img src={slide.src} alt={slide.alt} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                            </a>
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
                                textAlign: 'center'
                            }}>
                                {slide.description}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div style={{
                width: '70%',
                marginLeft: '15%',
                backgroundColor: '#fff',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <NewAndNoticeComponent />
                <ProjectComponent />
                <AchievementComponent />
            </div>
        </GlobalLayout>
    );
}
export default CarouselComponent;

