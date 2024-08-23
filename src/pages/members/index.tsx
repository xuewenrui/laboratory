import {Typography} from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout";

const {Title} = Typography;
import React, {Fragment, useEffect, useState} from 'react';
import {Card, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
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
const CustomCoverCard = ({member}) => {
    return (
        <div style={{position: 'relative', width: '100%', height: 200, overflow: 'hidden'}}>
            <img src={member.imageUrl} alt={member.name} style={customStyles.memberImage}/>
            <div style={customStyles.memberInfo}>
                <div>{member.name}</div>
                <div style={{marginTop: '5px'}}>{member.position}</div>
            </div>
        </div>
    );
};

const TeamMember = ({member}) => {
    return (
        <Col span={5} key={member.id}>
            <Link to={'/member/' + member.id} style={{textDecoration: 'none', color: 'inherit'}}>
                <div style={customStyles.memberCard}>
                    <CustomCoverCard member={member}/>
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

    if (loading) return <Fragment><LoadingPage/></Fragment>;

    return (
        <GlobalLayout>
            <Card style={customStyles.cardContainer}>
                <Title style={customStyles.title}>老师</Title>
                <Row gutter={[24, 24]}>
                    {members.map(member => (member.status === '0' && <TeamMember member={member} key={member.id}/>))}
                </Row>
                <hr style={customStyles.hr}/>
                <Title style={customStyles.title}>博士后</Title>
                <Row gutter={[24, 24]}>
                    {members.map(member => (member.status === '1' && <TeamMember member={member} key={member.id}/>))}
                </Row>
                <hr style={customStyles.hr}/>
                <Title style={customStyles.title}>博士</Title>
                <Row gutter={[24, 24]}>
                    {members.map(member => (member.status === '2' && <TeamMember member={member} key={member.id}/>))}
                </Row>
                <hr style={customStyles.hr}/>
                <Title style={customStyles.title}>硕士生</Title>
                <Row gutter={[24, 24]}>
                    {members.map(member => (member.status === '3' && <TeamMember member={member} key={member.id}/>))}
                </Row>
                <hr style={customStyles.hr}/>
                <Title style={customStyles.title}>科研助理</Title>
                <Row gutter={[24, 24]}>
                    {members.map(member => (member.status === '4' && <TeamMember member={member} key={member.id}/>))}
                </Row>
                <hr style={customStyles.hr}/>
            </Card>
        </GlobalLayout>
    );
};

export default TeamCard;
