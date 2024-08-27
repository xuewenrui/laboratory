import React, {useEffect, useState, useRef} from 'react';
import {Button} from 'antd';
import {UpOutlined} from "@ant-design/icons"; // 引入Ant Design样式

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            console.log('滑动组件')
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (scrollPosition > 100) { // 当滚动超过100px时显示按钮
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div ref={scrollRef} style={{position: 'fixed', right: 20, bottom: 300, display: isVisible ? 'block' : 'none'}}>
            <Button onClick={scrollToTop} type="primary" shape="circle">
                <UpOutlined/>
            </Button>
        </div>
    );
};

export default ScrollToTopButton;