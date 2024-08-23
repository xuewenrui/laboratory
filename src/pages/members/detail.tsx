import React, {Fragment, useEffect, useState} from 'react';
import {Layout, Card, Tabs} from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout"; // 假设这是Ant Design的组件，您需要根据实际库调整
import './MemberCard.css'
import {BookOutlined, CodeFilled, MailOutlined, UserOutlined} from "@ant-design/icons";
import {useParams} from "react-router";
import axios from "axios";
import LoadingPage from "@/components/LoadingPage";
import BackgroundImage from "@/components/BackgroundImage";
import ContentLayout from "@/components/ContentLayout";
const {TabPane} = Tabs;
const MemberDetail = () => {

    const [member, setMember] = useState(null); // 使用 useState 管理成员状态

    const [activeTab, setActiveTab] = useState('education');

    const handleTabChange = (key) => {
        setActiveTab(key);
    };

    //自定义tabPane
    // 想要更灵活地控制TabPane的tab，可自定义的TabPane组件
    const CustomTabPane = ({tab, key, children}) => (
        <TabPane tab={<span className="custom-tab-label">{tab}</span>} key={key}>
            {children}
        </TabPane>
    );
    //!利用useParams获取路由参数
    const {id}=useParams()
    async function fetchMemberData() {
        try{
            const response = await axios.get(`/api/member/getMember/${id}`)
            const data = response.data
            setMember(data)
        }catch (error)
        {   //TODO
            console.error('Error fetching member data:', error);
            alert('Failed to fetch member data: ' + error.message);
            history.back()
        }
    }

    useEffect(() => {
            fetchMemberData()
    }, [id])
    if (!member) return <Fragment>
        <LoadingPage/>
    </Fragment>; // 如果成员数据未加载，显示加载中
    return (
        <GlobalLayout>
            <Layout>
                <BackgroundImage/>
                <div style={{width: 1200, margin: 'auto'}}>
                    <ContentLayout>
                        <Layout.Content style={{margin: '5px'}}>
                            <Card
                                style={{
                                    width: '100%',
                                    margin: 'auto',
                                    padding: '20px',
                                    borderRadius: 12,
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                                    backgroundColor: '#fff',
                                    overflow: 'hidden'
                                }}
                            >
                                <div className="member-card">
                                    <img src={member.imageUrl} alt={member.name}/>
                                    <div className="member-info">
                                        <h2>
                                            <UserOutlined style={{marginRight: '8px'}}/>
                                            {member.name}
                                        </h2>
                                        <p>
                                            <BookOutlined style={{marginRight: '4px'}}/>
                                            <span>职位:</span> {member.position}
                                        </p>
                                        <p>
                                            <CodeFilled style={{marginRight: '4px'}}/>
                                            <span>研究方向:</span> {member.reSearchArea}
                                        </p>
                                        <p>
                                            <MailOutlined style={{marginRight: '4px'}}/>
                                            <span>邮箱: </span>{member.email}
                                        </p>
                                    </div>
                                </div>
                                {/*根据该栏目的内容是否为空动态显示内容*/}
                                <Tabs
                                    activeKey={activeTab}
                                    onChange={handleTabChange}
                                    tabBarStyle={{marginTop: '20px'}}
                                >
                                    {/* 教育背景 */}
                                    {member.educations && member.educations.length > 0 ? (
                                        <CustomTabPane tab="教育背景" key="education">
                                            {member.educations.map((p, index) => (
                                                <p key={index} className="tab-paragraph">{p.degree}</p>
                                            ))}
                                        </CustomTabPane>
                                    ) : null}

                                    {/* 工作经历 */}
                                    {member.workExperiences && member.workExperiences.length > 0 ? (
                                        <CustomTabPane tab="工作经历" key="workExperience">
                                            {member.workExperiences.map((p, index) => (
                                                <p key={index} className="tab-paragraph">{p.description}</p>
                                            ))}
                                        </CustomTabPane>
                                    ) : null}

                                    {/* 发表期刊 */}
                                    {member.publications && member.publications.length > 0 ? (
                                        <CustomTabPane tab="发表期刊" key="publications">
                                            {member.publications.map((p, index) => (
                                                <p key={index} className="tab-paragraph">{p.page}</p>
                                            ))}
                                        </CustomTabPane>
                                    ) : null}

                                    {/* 个人经历 */}
                                    {member.experiences && member.experiences.length > 0 ? (
                                        <CustomTabPane tab="个人经历" key="experience">
                                            {member.experiences.map((p, index) => (
                                                <p key={index} className="tab-paragraph">{p.description}</p>
                                            ))}
                                        </CustomTabPane>
                                    ) : null}
                                </Tabs>
                            </Card>
                        </Layout.Content>
                    </ContentLayout>
                </div>
            </Layout>
        </GlobalLayout>
    );
};

export default MemberDetail;
