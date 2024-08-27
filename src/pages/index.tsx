import React from 'react';
import {Carousel} from 'antd';
import 'antd/dist/antd.css'; // 引入Ant Design样式
import GlobalLayout from "@/layouts/GlobalLayout";
import carousel01 from '@/assets/carousel01.jpg'
import carousel02 from '@/assets/carousel02.jpg'
import carousel03 from '@/assets/carousel03.jpg'
import carousel04 from '@/assets/carousel04.jpg'
import NewAndNoticeComponent from "@/components/NewAndNoticeComponent";
import AchievementComponent from "@/components/AchievementComponent";

function CarouselComponent() {
    // 轮播图数据和说明
    const slides = [
        {
            key: '1',
            src: `${carousel01}`,
            alt: 'Image 1',
            description: 'This is the first slide'
        },
        {
            key: '2',
            src: `${carousel02}`,
            alt: 'Image 2',
            description: 'This is the second slide'
        },
        {
            key: '3',
            src: `${carousel03}`,
            alt: 'Image 3',
            description: 'This is the three slide'
        },
        {
            key: '4',
            src: `${carousel04}`,
            alt: 'Image 4',
            description: 'This is the four slide'
        },
    ];

    return (
        <GlobalLayout>
            <div style={{width: '100%', position: 'relative'}}>
                <Carousel autoplay dots={true} arrows={true} style={{width: '100%', height: '500px'}}>
                    {slides.map(slide => (
                        <div key={slide.key}>
                            <img src={slide.src} alt={slide.alt}
                                 style={{width: '100%', height: '500px', display: 'block'}}/>
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                padding: '5px 10px',
                                borderRadius: '5px'
                            }}>
                                {slide.description}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div style={{
                width: '70%',
                marginLeft: '18%',
                backgroundColor:'#fff'
            }}>
                <NewAndNoticeComponent/>
                <AchievementComponent/>
            </div>

        </GlobalLayout>
    );
}

export default CarouselComponent;