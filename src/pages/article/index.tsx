import React, { useState } from 'react';
import { Layout, Card, Input, List, Button, Pagination } from 'antd';
import GlobalLayout from "@/layouts/GlobalLayout";
import { Link } from "umi";

const { Content } = Layout;

const ArticleList = () => {
    // 更新文章数据，包含作者和被引用率
    const articles = [];
    for (let i = 1; i <= 100; i++) {
        articles.push({
            id: i,
            title: `文章标题${i}`,
            author: `作者${i}`,
            citationCount: Math.floor(Math.random() * 100), // 随机生成被引用率
            createTime: '2024-8-13'
        });
    }

    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize,setPageSize] = useState(10);

    // 计算总页数
    const totalPages = Math.ceil(articles.length / pageSize);

    // 过滤和分页
    const filteredArticles = articles
        .filter(article => article.title.toLowerCase().includes(searchText.toLowerCase()))
        .slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // 处理搜索
    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setCurrentPage(1); // 重置页码
    };

    //! 处理页码和pageSize的变化
    const handlePageChange = (page,pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize)
    };
    return (
        <GlobalLayout>
            <Layout style={{ margin: '20px' }}>
                <Card style={{
                    width: '100%',
                    maxWidth: '1000px', // 稍微增加宽度以适应更多内容
                    margin: '20px auto', // 水平和垂直居中
                    padding: '20px',
                    borderRadius: 12, // 更大的边框半径
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)', // 更明显的阴影
                    backgroundColor: '#fff',
                    overflow: 'hidden', // 防止内容溢出
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Input
                            placeholder="请输入文章标题"
                            style={{ width: '300px', marginRight: '10px' }}
                            value={searchText}
                            onChange={handleSearch}
                        />
                        <Button type="primary" onClick={() => setSearchText('')}>重置</Button>
                    </div>
                    <List
                        itemLayout="horizontal"
                        dataSource={filteredArticles}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={
                                        <Link to={`/article/${item.id}?id=${item.id}`}>{item.title}</Link>
                                    }
                                    description={
                                        <div>
                                            作者: {item.author}, 被引用率: {item.citationCount}
                                            {<div>文章发布时间:{item.createTime}</div>}
                                        </div>
                                    }

                                />
                            </List.Item>
                        )}
                    />
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={articles.length}
                        onChange={handlePageChange}
                    />
                </Card>
            </Layout>
        </GlobalLayout>
    );
};

export default ArticleList;