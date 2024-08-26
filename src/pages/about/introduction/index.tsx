import React from 'react';
import {Layout, Typography, Divider, Card} from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout";
import BackgroundImage from "@/components/BackgroundImage";
import ContentLayout from "@/components/ContentLayout";

const {Title, Paragraph} = Typography;

function Index() {
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
        <GlobalLayout>
            <Layout>
                <BackgroundImage/>
                <div style={{width: 1200, margin: 'auto'}}>
                    <ContentLayout>
                        <Title level={3} style={customTitleStyle}>实验室介绍</Title>
                        <div style={customParagraphContainerStyle}>
                            <Paragraph style={customParagraphStyle}>
                                数基生命与智能健康实验室位于电子科技大学基础与前沿研究院，
                                主要研究方向主要为人类疾病等复杂性状的因果标志物解析。团队围绕“健康中国”国家战略需求，
                                以AI+Science 新范式为指导，重点探究疾病遗传易感性差异形成的遗传机制，
                                为东亚人群相关疾病的精准预测提供理论依据
                            </Paragraph>
                        </div>

                        <Divider/>
                        <Title level={3} style={customTitleStyle}>导师介绍</Title>
                        <div style={customParagraphContainerStyle}>
                            <Paragraph style={customParagraphStyle}>
                                毛晓伟，研究员、博士生导师。主要研究领域为复杂性状的因果标志物解析。近年来主要从事人类疾病及相关性状的因果标志物解析，以第一作者或通讯作者（含共同）于Cell、Science、Science
                                Bulletin等高水平学术期刊发表SCI论文，并入选中科院率先行动人才计划和北京市科技新星计划（医学方向）。研究成果包括了解锁东亚人群典型疾病相关复杂性状重要基因的适应及受选择过程、系统揭示全球人群格局的形成历史和适应趋势、动物疾病模型的构建和生命大数据相关计算生物学方法的开发等。主持国家自然科学基金交叉学部优秀青年科学基金、四川省留学回国人员科技活动项目择优资助、科技部国家重点研发计划项目课题等重要科研项目。
                                个人主页：https://www.iffs.uestc.edu.cn/info/1018/5129.htm
                            </Paragraph>
                        </div>

                        <Divider/>
                    </ContentLayout>
                </div>
            </Layout>
        </GlobalLayout>
    );
}

export default Index;