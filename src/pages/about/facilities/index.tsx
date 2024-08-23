import React from "react";
import {Layout, Typography, Divider, Card} from 'antd';

const {Title, Paragraph} = Typography;
const Index = () => {
    // !自定义标题样式
    const customTitleStyle = {
        fontWeight: 'bold',
        color: '#133da7',
        marginBottom: 20, // 增加底部间距
    };

    // !自定义段落样式
    const customParagraphStyle = {
        lineHeight: 1.8, // 调整行高
        marginBottom: 20, // 增加底部间距
    };
    // !自定义段落容器样式（用于缩进）
    const customParagraphContainerStyle = {
        paddingLeft: '2em', // 添加左内边距以实现缩进效果
        marginBottom: 20, // 增加底部间距
    };

    return (
        <>
            <Title level={3} style={customTitleStyle}>实验室介绍</Title>
            <div style={customParagraphContainerStyle}>
                <Paragraph style={customParagraphStyle}>
                    数基生命与智能健康实验室位于电子科技大学基础与前沿研究院，
                    主要研究方向主要为人类疾病等复杂性状的因果标志物解析。团队围绕“健康中国”国家战略需求，
                    以AI+Science 新范式为指导，重点探究疾病遗传易感性差异形成的遗传机制，
                    为东亚人群相关疾病的精准预测提供理论依据
                </Paragraph>
            </div></>
    )
}
export default Index