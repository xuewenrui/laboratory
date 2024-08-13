import React, { useState } from 'react';
import {Card, Menu, Layout, List, Avatar, Typography} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import GlobalLayout from "@/layouts/GlobalLayout";
const {Title, Paragraph} = Typography;
const TeamCard = () => {
    const teamMembers = [
        { name: 'Alice', position: 'Developer', info: 'Alice is an experienced developer.', avatar: 'path/to/alice/avatar' },
        { name: 'Bob', position: 'Designer', info: 'Bob is our lead designer.', avatar: 'path/to/bob/avatar' },
        // ...
    ];
    // 自定义标题样式
    const customTitleStyle = {
        fontWeight: 'bold',
        color: '#133da7',
        marginBottom: 20, // 增加底部间距
    };
    // 添加状态来追踪当前选中的成员
    const [selectedMember, setSelectedMember] = useState(null);

    const handleSelect = (e) => {
        // 当菜单项被选中时，设置当前选中的成员
        setSelectedMember(teamMembers.find(member => member.name === e.key));
    };

    return (
        <GlobalLayout>
            <Layout style={{ margin: '20px' }}>
                <Card
                    style={{
                        width: '1000px',
                        margin: 'auto',
                        padding: '20px',
                        borderRadius: 8,
                        boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                        backgroundColor: '#fff',
                    }}
                >
                    <Title level={3} style={customTitleStyle}>团队成员</Title>
                    <div style={{
                        flex: '0 0 20%',
                        padding: '0 20px',
                        borderRight: '1px solid #e8e8e8',
                        overflowY: 'auto',
                        height: 'calc(100% - 40px)',
                    }}>
                        <Menu mode="inline" selectedKeys={[selectedMember ? selectedMember.name : '']} onSelect={handleSelect} style={{ height: '100%' }}>
                            {teamMembers.map(member => (
                                <Menu.Item key={member.name} icon={<UserOutlined />}>{member.name}</Menu.Item>
                            ))}
                        </Menu>
                    </div>
                    <div style={{
                        flex: '1',
                        padding: '0 20px',
                    }}>
                        {selectedMember ? (
                            <List
                                grid={{ gutter: 16, column: 1 }}
                                dataSource={[selectedMember]} // 只渲染选中的成员
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.avatar} size="large" />}
                                            title={<h3>{item.name}'s Profile</h3>}
                                            description={
                                                <>
                                                    <p><strong>Position:</strong> {item.position}</p>
                                                    <p><strong>Info:</strong> {item.info}</p>
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
                </Card>
            </Layout>
        </GlobalLayout>
    );
};

export default TeamCard;