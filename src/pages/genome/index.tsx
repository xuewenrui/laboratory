import React, {useState} from 'react';
import GlobalLayout from "@/layouts/GlobalLayout";
import {Card, Form, Input, message, Table, Typography} from 'antd';
import axios from "axios";

function Genome() {
    const [query, setQuery] = useState('');
    const [genomeData, setGenomeData] = useState([]);
    const [loading, setLoading] = useState(false);

    // !从服务器端获取genome数据
    const fetchGenomeData = async (query) => {
        setLoading(true) //搜索内容，table组件显示加载
        try {
            const response = await axios.get(`/api/genome/${query}`);
            if (response.data.length==0) {
                message.warning('查询基因组数据为空!请输入正确的rs号或者染色体位置!')
                setGenomeData(null)
            }
            setGenomeData(response.data)
        } catch (error) {
            message.error('从服务器获取genome数据失败！')
        } finally {
            setLoading(false)
        }

    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        if (!query.trim()) {
            message.warning('请输入查询条件！');
            return;
        }
        fetchGenomeData(query);

    };

    const columns = [
        {title: 'Chromosome Number', dataIndex: 'chromosome_number', key: 'chromosome_number'},
        {title: 'Physical Position', dataIndex: 'physical_position', key: 'physical_position'},
        {title: 'rs', dataIndex: 'rs', key: 'rs'},
        {title: 'P-Value', dataIndex: 'p_value', key: 'p_value'},
        {title: 'Reference Site', dataIndex: 'reference_site', key: 'reference_site'},
        {title: 'Variant Site', dataIndex: 'variant_site', key: 'variant_site'}
    ];


    return (
        <GlobalLayout>
            <Card
                style={{
                    width: '100%',
                    maxWidth: 1000, // 调整为更合适的宽度
                    margin: '20px auto',
                    padding: '20px',
                    borderRadius: 8, // 稍微调整圆角大小
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // 调整阴影效果
                    backgroundColor: '#fff',
                    overflow: 'hidden'
                }}
            >
                <Form layout="inline">
                    <Form.Item>
                        <Input.Search
                            placeholder="搜索rs号或者染色体位置"
                            value={query}
                            onChange={handleInputChange}
                            onSearch={handleSubmit}
                            enterButton='搜索'
                            style={{width: '300px', marginRight: '20px'}}
                        />
                    </Form.Item>
                    <Typography.Text type="secondary" style={{fontSize: '14px'}}>
                        请按示例格式搜索，示例：rs743044或者1:27710660
                    </Typography.Text>
                </Form>
                <Table
                    columns={columns}
                    dataSource={genomeData}
                    rowKey="locus_name"
                    loading={loading}
                    pagination={{pageSize: 10}}
                    bordered
                    //scroll={{ x: 1000 }} // 如果需要水平滚动，可以调整这个值
                />
            </Card>
        </GlobalLayout>
    );
}

export default Genome;