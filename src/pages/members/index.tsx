/*import {Typography} from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout";
const {Title} = Typography;
import React, {Fragment, useEffect, useState} from 'react';
import {Card, Row, Col} from 'antd';
import {Link} from 'react-router-dom'; //使用react-router-dom进行路由管理
import axios from "axios";
import LoadingPage from "@/components/LoadingPage";


//!自定义图片、名字显示组件
const CustomCoverCard = ({ member }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden' }}>
            <img src={member.imageUrl} alt={member.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white'
            }}>
                <div>{member.name}</div>
                <div style={{ marginTop: '5px' }}>{member.position}</div>
            </div>
        </div>
    );
};

const TeamMember = ({member}) => {
    return (
        <Col span={5} key={member.id}>
            <Link to={'/member/'+member.id} style={{textDecoration: 'none', color: 'inherit'}}>
            <CustomCoverCard member={member} />
            </Link>
        </Col>
    );
};
const TeamCard = () => {

    const [members,setMembers]=useState(null)
    const [loading, setLoading] = useState(true);//加载组件
    async function fetchMembersData(){
        try{
            setLoading(true); // 开始加载前设置loading为true
            const response = await axios.get(`/api/member/getMembers`)
            const data = response.data
            setMembers(data)
            setLoading(false); // 数据加载完成后设置loading为false
        }catch (error)
        {   //TODO
            console.error('Error fetching member data:', error);
            alert('Failed to fetch member data: ' + error.message);
            history.back()
        }
    }

    useEffect(() => {
        fetchMembersData()
    }, [])
    if (loading) return <Fragment>
        <LoadingPage/>
    </Fragment>; // 如果成员数据未加载，显示加载中
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
                <Title level={3} style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>老师</Title>
                <Row gutter={[24, 24]}>
                    {members.map(member => (member.status==='0'&&
                        <TeamMember member={member} key={member.id} />
                    ))}
                </Row> {/!*member.status==='0'代表老师*!/}
                <hr style={{ marginTop: 30, marginBottom: 20 }} /> {/!* 增加顶部和底部的间距 *!/}
                <Title level={3} style={{ marginTop: 20, fontSize: 24, fontWeight: 'bold', color: '#333' }}>学生</Title>
                <Row gutter={[24, 24]}>
                    {members.map(member=> (member.status==='1'&&
                        <TeamMember member={member} key={member.id} />
                    ))}
                </Row>{/!*member.status==='1'代表学生*!/}
            </Card>
        </GlobalLayout>
    );
};

export default TeamCard;*/
import { Typography } from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout";
const { Title } = Typography;
import React, { Fragment, useEffect, useState } from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import axios from "axios";
import LoadingPage from "@/components/LoadingPage";

const customStyles = {
    cardContainer: {
        width: '100%',
        maxWidth: '1000px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: 12,
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    hr: {
        marginTop: 30,
        marginBottom: 20,
        border: '1px solid #e8e8e8',
    },
    memberCard: {
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    memberImage: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    memberInfo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        fontSize: 14,
    },
};

//! 自定义图片、名字显示组件
const CustomCoverCard = ({ member }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: 200, overflow: 'hidden' }}>
            <img src={member.imageUrl} alt={member.name} style={customStyles.memberImage} />
            <div style={customStyles.memberInfo}>
                <div>{member.name}</div>
                <div style={{ marginTop: '5px' }}>{member.position}</div>
            </div>
        </div>
    );
};

const TeamMember = ({ member }) => {
    return (
        <Col span={5} key={member.id}>
            <Link to={'/member/' + member.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={customStyles.memberCard}>
                    <CustomCoverCard member={member} />
                </div>
            </Link>
        </Col>
    );
};

const TeamCard = () => {
    const [members, setMembers] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchMembersData() {
        try {
            setLoading(true);
            const response = await axios.get(`/api/member/getMembers`);
            const data = response.data;
            setMembers(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching member data:', error);
            alert('Failed to fetch member data: ' + error.message);
            history.back();
        }
    }

    useEffect(() => {
        fetchMembersData();
    }, []);

    if (loading) return <Fragment><LoadingPage /></Fragment>;

    return (
        <GlobalLayout>
            <Card style={customStyles.cardContainer}>
                <Title style={customStyles.title}>老师</Title>
                <Row gutter={[24, 24]}>
                    {members.map(member => (member.status === '0' && <TeamMember member={member} key={member.id} />))}
                </Row>
                <hr style={customStyles.hr} />
                <Title style={customStyles.title}>学生</Title>
                <Row gutter={[24, 24]}>
                    {members.map(member => (member.status === '1' && <TeamMember member={member} key={member.id} />))}
                </Row>
            </Card>
        </GlobalLayout>
    );
};

export default TeamCard;
