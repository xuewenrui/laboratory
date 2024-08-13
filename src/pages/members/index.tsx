import React, {useState} from 'react';
import {Card, Menu, Layout, List, Avatar, Typography} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import GlobalLayout from "@/layouts/GlobalLayout";

const {Title} = Typography;
const TeamCard = () => {
    //!成员列表
    const teamMembers = [
        {
            name: 'Xiaowei Mao',
            introduce: 'Professor',
            researchDirection: 'Computational Genomics, Digital Health',
            avatar: 'path/to/alice/avatar'
        },
        {
            name: 'xiaohong1',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },
        {
            name: 'xiaohong2',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },
        {
            name: 'xiaohong3',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },
        {
            name: 'xiaohong4',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },
        {
            name: 'xiaohong5',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },
        {
            name: 'xiaohong6',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },
        {
            name: 'xiaohong7',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },
        {
            name: 'xiaohong8',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },{
            name: 'xiaohong9',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },{
            name: 'xiaohong10',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },{
            name: 'xiaohong11',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },{
            name: 'xiaohong12',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },{
            name: 'xiaohong13',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },{
            name: 'xiaohong14',
            introduce: 'Grad Student',
            researchDirection: 'Computational Biology',
            avatar: 'path/to/bob/avatar'
        },
        // ...
    ];
    // !自定义标题样式
    const customTitleStyle = {
        fontWeight: 'bold',
        color: '#133da7',
        marginBottom: 20, // 增加底部间距
    };
    // !添加状态来追踪当前选中的成员
    const [selectedMember, setSelectedMember] = useState(null);

    const handleSelect = (e) => {
        // !当菜单项被选中时，设置当前选中的成员
        setSelectedMember(teamMembers.find(member => member.name === e.key));
    };

    return (
        <GlobalLayout>
            <Layout style={{margin: '20px'}}>
                <Card
                    style={{
                        width: '1000px',
                        margin: 'auto',
                        padding: '20px', // !注意这里的padding可能会影响内部元素的高度计算
                        borderRadius: 8,
                        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                        backgroundColor: '#fff',
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'stretch',
                        width: '100%',
                    }}>
                        <div style={{
                            flex: '0 0 20%',
                            padding: '0 20px',
                            borderRight: '1px solid #e8e8e8',
                            overflowY: 'auto',
                            height: 'calc(100% - 40px)', // ?可能需要根据实际情况调整这个值
                        }}>
                            <Menu mode="inline" selectedKeys={[selectedMember ? selectedMember.name : '']}
                                  onSelect={handleSelect} style={{height: '100%'}}>
                                {teamMembers.map(member => (
                                    <Menu.Item key={member.name} icon={<UserOutlined/>}>{member.name}</Menu.Item>
                                ))}
                            </Menu>
                        </div>
                        <div style={{
                            flex: '1',
                            padding: '0 10px',
                        }}>
                            {selectedMember ? (
                                <List
                                    grid={{gutter: 16, column: 1}}
                                    dataSource={[selectedMember]}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar} size="large"/>} //!显示头像
                                                title={<h3>{item.name}</h3>}
                                                description={
                                                    <>
                                                        <p><strong>Introduce:</strong> {item.introduce}</p>
                                                        <p><strong>Research Direction:</strong> {item.researchDirection}
                                                        </p>
                                                    </>
                                                }
                                            />
                                        </List.Item>
                                    )}
                                />
                            ) : (
                                <p>Please select a team member from the left menu.</p>
                            )}
                        </div>
                    </div>
                </Card>
            </Layout>
        </GlobalLayout>
    );
};

export default TeamCard;