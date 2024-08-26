import GlobalLayout from "@/layouts/GlobalLayout";
import {Divider, Layout, Typography} from "antd";
import BackgroundImage from "@/components/BackgroundImage";
import ContentLayout from "@/components/ContentLayout";
import React from "react";
const {Title, Paragraph} = Typography;
const Index=()=>{

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
    return(
        <GlobalLayout>
            <Layout>
                <BackgroundImage/>
                <div style={{width: 1200, margin: 'auto'}}>
                    <ContentLayout>
                        <Title level={3} style={customTitleStyle}>博士生申请条件</Title>
                        <ul style={customParagraphStyle}>
                            <li>遵纪守法，身心健康，热爱钻研，思想活跃，性格好、乐于交流，具有良好的团队合作精神；</li>
                            <li>即将取得或具有国内外高校与计算机科学与技术专业相关的硕士学位、熟悉C/C++语言/Python等编程语言，具有较强的算法和数据结构功底；</li>
                            <li>具有良好的英文写作与交流能力，可熟练检索、阅读英文专业文献；</li>
                            <li>具有较强的学习及科研能力，已发表/接收第一作者原创性高水平论文者或能展现出特别优异学术研究潜力者优先。</li>
                        </ul>
                        <Divider/>
                        <Title level={3} style={customTitleStyle}>应聘材料及方式</Title>
                        <div style={customParagraphContainerStyle}>
                            <Paragraph style={customParagraphStyle}>
                                1、联系邮箱地址：AIhealth_uestc@163.com；<br/>
                                2、请者须提交个人详细简历（PDF），简历应包括主要学习与工作经历、研究背景经历、发表论文、获奖情况及其他能体现申请者科研潜力的相关材料；邮件主题请标注为“博士研究生申请+姓名+研究方向“
                            </Paragraph>
                        </div>
                    </ContentLayout>
                </div>
            </Layout>
        </GlobalLayout>
    )
}


export default Index