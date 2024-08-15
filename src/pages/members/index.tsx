import {Typography} from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout";
const {Title} = Typography;
import React from 'react';
import {Card, Row, Col} from 'antd';
import {Link} from 'react-router-dom'; //使用react-router-dom进行路由管理
import image1 from '../../assets/a.jpg'
import image2 from '../../assets/b.jpg'
//!老师信息列表
const teachers = [
    {id: 1, name: '毛晓伟', position: '教授', imageUrl: `${image1}`, detailUrl: `/teacher/1`},
    {id: 2, name: '明老师', position: '教授', imageUrl: `${image1}`, detailUrl: `/teacher/2`},
    {id: 3, name: '王老师', position: '教授', imageUrl: `${image1}`, detailUrl: `/teacher/3`},
];
//!学生信息列表
const students = [
    // ... 其他学生数据
];
for (let i = 1; i <= 20; i++) {
    students.push({
        id: i,
        name: '小明' + i,
        position: '学生',
        imageUrl: `${image2}`,
        detailUrl: `/student/${i}`
    })
}
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
            <Link to={member.detailUrl} style={{textDecoration: 'none', color: 'inherit'}}>
            <CustomCoverCard member={member} />
            </Link>
        </Col>
    );
};
const TeamCard = () => {
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
                    {teachers.map(teacher => (
                        <TeamMember member={teacher} key={teacher.id} />
                    ))}
                </Row>
                <hr style={{ marginTop: 30, marginBottom: 20 }} /> {/* 增加顶部和底部的间距 */}
                <Title level={3} style={{ marginTop: 20, fontSize: 24, fontWeight: 'bold', color: '#333' }}>学生</Title>
                <Row gutter={[24, 24]}>
                    {students.map(student => (
                        <TeamMember member={student} key={student.id} />
                    ))}
                </Row>
            </Card>
        </GlobalLayout>
    );
};

export default TeamCard;