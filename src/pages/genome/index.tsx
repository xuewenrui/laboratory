import React, {useState, useEffect, Fragment} from "react";
import GlobalLayout from "@/layouts/GlobalLayout";
import {Card, Input, Form, Table, Pagination} from "antd";
import LoadingPage from "@/components/LoadingPage";
import _ from "lodash";  //?引入防抖函数 可以使用 lodash 的 _.debounce 函数 防止用户搜索内容没输入完，钩子函数就更新了组件,从而加载组件执行
const {Search} = Input;

function Genome() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10); // 假设每页显示10条数据

    // 模拟的数据库数据
    const genomeList = [];

    for (let i = 1; i <= 10000; i++) {
        genomeList.push({id: i, name: '基因位点' + i, location: '染色体' + i + ',位置' + i})
    }
    // 模糊查询并分页
    const fetchResults = async (page = 1, pageSize = 10, searchQuery = '') => {
        setLoading(true);
        setTimeout(() => {
            const filteredResults = genomeList.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.location.toLowerCase().includes(searchQuery.toLowerCase())
            );

            const paginatedResults = filteredResults.slice((page - 1) * pageSize, page * pageSize);
            setResults(paginatedResults);
            setLoading(false);
        }, 500);
    };

    // 处理分页变化
    const handlePageChange = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize)
        fetchResults(page, pageSize, query);
    };

    // 处理搜索
    const handleSearch = () => {
        setCurrentPage(1); // 重置到第一页
        fetchResults(1, pageSize, query);
    };
    // !防抖函数，延迟执行搜索
    const debouncedSearch = _.debounce(handleSearch, 5000); // 延迟500毫秒
    // 处理查询输入变化
    const handleInputChange = (e) => {
        setQuery(e.target.value);
        debouncedSearch()//使用防抖函数
    };

    useEffect(() => {
        // 组件挂载时执行首次查询
        fetchResults(currentPage, pageSize, query);
    }, [currentPage, pageSize, query]); // 依赖数组中的值变化时重新执行
    if (loading) return <Fragment>
        <LoadingPage/>
    </Fragment>; // 如果成员数据未加载，显示加载中
    return (
        <GlobalLayout>
            <Card
                style={{
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '20px auto',
                    padding: '20px',
                    borderRadius: 12,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff',
                    overflow: 'hidden',
                }}
            >
                <Form layout="inline">
                    <Form.Item>
                        <Search
                            placeholder="输入基因位点名称或染色体位置"
                            enterButton="查询"
                            size="large"
                            value={query}
                            onChange={handleInputChange}
                            onSearch={handleSearch}
                        />
                    </Form.Item>
                </Form>

                {/* 结果展示区域 */}
                <Table
                    dataSource={results}
                    columns={[
                        {
                            title: '名称',
                            dataIndex: 'name',
                            key: 'name',
                        },
                        {
                            title: '位置',
                            dataIndex: 'location',
                            key: 'location',
                        },
                    ]}
                    bordered
                    rowKey="key"
                    pagination={false} // 我们将自定义分页
                />

                {/* 自定义分页 */}
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={genomeList.length} // 这里应该是一个从后端获取的总数
                    onChange={handlePageChange}
                />
            </Card>
        </GlobalLayout>
    );
}

export default Genome;