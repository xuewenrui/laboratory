import React from "react";
import  backgroundImage from '../assets/bg.jpg'
function BackgroundImage() {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`, // 添加背景图片
            backgroundSize: 'cover', // 根据需要调整，这里使用cover确保图片覆盖整个区域，但可能会被裁剪
            backgroundPosition: 'center', // 图片居中
            height: '200px', // 高度设置为150px
            width: '100%', // 宽度设置为100%
            // 如果需要，还可以添加其他样式，如padding, margin等
        }}>
            {/* 这里可以添加更多的内容，比如文本、图片等，它们将显示在背景图片之上 */}
        </div>
    );
}

export default BackgroundImage;