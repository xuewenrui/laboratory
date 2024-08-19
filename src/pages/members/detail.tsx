import React, {Fragment, useEffect, useState} from 'react';
import {Layout, Card, Tabs} from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout"; // 假设这是Ant Design的组件，您需要根据实际库调整
import './MemberCard.css'
import {BookOutlined, CodeFilled, MailOutlined, UserOutlined} from "@ant-design/icons";
import {useParams} from "react-router";
import axios from "axios";
import LoadingPage from "@/components/LoadingPage";
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
            <Layout.Content style={{margin: '20px'}}>
                <Card
                    style={{
                        width: '100%',
                        maxWidth: '1000px',
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
        </GlobalLayout>
    );
};

export default MemberDetail;

{/*完全静态*/}
{/*<Tabs
                        activeKey={activeTab}
                        onChange={handleTabChange}
                        tabBarStyle={{ marginTop: '20px' }}
                    >
                        <CustomTabPane tab="教育背景" key="education">
                            <p className="tab-paragraph">{member.education}</p>
                        </CustomTabPane>
                        <CustomTabPane tab="工作经历" key="workExperience">
                            {member.workExperience.map((p,index)=>
                                <p key={index} className="tab-paragraph">{p}</p>)
                            }
                        </CustomTabPane>
                        <CustomTabPane tab="发表期刊" key="publications">
                            {member.publications.map((p,index)=>
                                <p key={index} className="tab-paragraph">{p}</p>)
                            }
                        </CustomTabPane>
                        <CustomTabPane tab="个人经历" key="personalExperience">
                            {member.personalExperience.map((p,index)=>
                                <p key={index} className="tab-paragraph">{p}</p>)
                            }
                        </CustomTabPane>
                    </Tabs>*/}


// ?成员数据
// member = {
//     name: "Mao，Xiaowei",
//     position: " Professor",
//     reSearchArea: "Computation biology, Statistical genetics, Phenomics, Molecular epidemiology",
//     email: "xiaowei.mao@uestc.edu.cn",
//     educations: ["2012-2016Aarhus University, Denmark Ph.D. in Genetics"],
//     workExperiences: ['2023–Now Professor, UESTC, P. R. China', '2019–2023 Assistant/Associate Professor, Chinese Academy of Sciences, P. R. China', '2018–2019 Postdoc, Cornell University, United States'],
//     publications: [
//         'Mao X, Zhang H, Qiao S, Liu Y, Chang F, Xie P, Zhang M, Wang T, Li M, Cao P, and Yang R et al. The deep population history of northern East Asia from the Late Pleistocene to the Holocene.Cell, 2021, 184(12):3256–3266 (highlighted inSciencenews).',
//         'Liu Y*,Mao X*, Krause J, and Fu Q. Insights into human history from the first decade of ancient human genomics.Science, 2021, 373(6562):1479–1484.',
//         'Wang T*, Wang W*, Xie G*, Li Z*, Fan X*, Yang Q*, Wu X, Cao P, Liu Y, Yang R, Liu F, and ...Mao Xet al. Human population history at the crossroads of east and southeast Asia since 11,000 years ago.Cell, 2021, 184(14):3829–3841.',
//         'Liu J*, Zeng W*, Sun B*,Mao X*, Zhao Y, Wang F, Li Z, Luan F, Guo J, Zhu C, and Wang Z et al. Maternal genetic structure in ancient Shandong between 9500 and 1800 years ago.Science Bulletin, 2021, 66(11):1129–1135.',
//         'Wang D*, Guadagno C*,Mao X*, Mackay DS, Pleban JR, Baker RL, Weinig C, Jannink JL, and Ewers BE. A framework for genomics-informed ecophysiological modeling in plants.Journal of Experimental Botany, 2019, 70(9):2561–2574.'
//     ],
//     experiences: ['Professor Mao is mainly engaged in the research of decoding the genetic causal factors for complex traits. His major research interests include detecting causal factors for human disease related complex traits such as female fertility and psychiatric disease. His main academic achievements include unveiling the first evolutionary mechanisms of fertility related adaptive traits for East Asians during the ice age utilizing time-series genomes, revealing the global population history and adaptive trend, establishing animal models for human disease, and developing statistical/computational tools for big data in life science. He has authored academic publications in internationally prominent journals, such asCell, Science, Science Bulletin, etc.', 'The Mao lab (Lab of Digital Life and Smart Health) is recruiting ambitious and talented undergraduate, master, Ph.D. students, and post-docs. If you are interested in the research of our lab, please feel free to get in touch.'],
//     imageUrl: `${image3}`
// };
