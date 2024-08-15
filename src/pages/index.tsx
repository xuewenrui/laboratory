import React from 'react';
import {Card, Carousel, Layout} from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout"; //
import image1 from '../assets/lab_logo.png'
import image2 from '../assets/lab_log.png'

function Index() {
    // 假设这里有一些轮播图的数据
    const imgList = [
        image1,
        image2,
        image1,
    ];
    const carouselStyle = {
        marginTop: '20px', // 举例：给轮播图添加一些上边距
    };

    return (
        <GlobalLayout>
            <Card
                style={{
                    width: '100%',
                    maxWidth: '1000px', // 稍微增加宽度以适应更多内容
                    margin: '20px auto', // 水平和垂直居中
                    padding: '20px',
                    borderRadius: 12, // 更大的边框半径
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)', // 更明显的阴影
                    backgroundColor: '#fff',
                    overflow: 'hidden', // 防止内容溢出
                }}
            >
                <Carousel autoplay style={carouselStyle}>
                    {imgList.map((img, index) => (
                        <Carousel key={index}>
                            <img src={img} alt={`banner ${index + 1}`} style={{ width: '100%', display: 'block', height: '400px', objectFit: 'cover' }}/>
                        </Carousel>
                    ))}
                </Carousel>
            </Card>
        </GlobalLayout>
    );
}

export default Index;