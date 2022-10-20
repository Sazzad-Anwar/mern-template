import { FC } from 'react';
import useSWR from 'swr';
import Fetcher from '../../utils/Fetcher';
import type { ColumnsType } from 'antd/es/table';
import { DataType } from './posts.interface';
import { Button, Table, Breadcrumb, Input, Tooltip } from 'antd';
import { AiFillEye } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';
import Error from '../../components/Error/Index';
import { AiOutlinePlus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;

const Posts: FC = () => {
    const { data, isValidating, error, mutate } = useSWR('/posts', Fetcher);
    const navigate = useNavigate();

    const columns: ColumnsType<DataType> = [
        {
            title: 'Post ID',
            dataIndex: 'id',
            key: 'id',
            width: 80,
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
            width: 100,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Body',
            dataIndex: 'body',
            key: 'body',
            render: (body) => <span className="line-clamp-2">{body}</span>,
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (actions, record) => (
                <div className="flex items-center">
                    <Tooltip title="View Post">
                        <Button
                            type="primary"
                            className="flex justify-center items-center mr-1"
                            icon={<AiFillEye size={20} />}
                        />
                    </Tooltip>
                    <Tooltip title="Delete Post">
                        <Button
                            type="primary"
                            danger
                            onClick={() => {
                                mutate('/posts', {
                                    populateCache: (updatedPost, data) => {
                                        const filteredPosts: any = data.filter(
                                            (post: any) => post.id !== record.id,
                                        );
                                        return [...filteredPosts, updatedPost];
                                    },
                                    revalidate: false,
                                });
                                toast.success('Item is deleted');
                            }}
                            className="flex justify-center items-center"
                            icon={<ImBin size={20} />}
                        />
                    </Tooltip>
                </div>
            ),
        },
    ];

    return (
        <>
            <Breadcrumb className="mb-4">
                <Breadcrumb.Item>Posts</Breadcrumb.Item>
            </Breadcrumb>
            <div className="bg-white p-4 shadow-lg">
                <div className="flex w-full md:w-96 md:ml-auto  mb-2">
                    <Tooltip title="Create Post">
                        <Button
                            icon={<AiOutlinePlus />}
                            className="flex justify-center items-center mr-3"
                            type="primary"
                            onClick={() => navigate('/posts/create')}
                        />
                    </Tooltip>
                    <Search
                        allowClear
                        className="search-input"
                        placeholder="Search..."
                        onSearch={() => {}}
                    />
                </div>
                {error ? (
                    <Error
                        error={
                            error.response?.data.message
                                ? error.response.data.message
                                : error.message
                        }
                    />
                ) : (
                    <Table
                        scroll={{
                            x: 991,
                        }}
                        loading={isValidating}
                        columns={columns}
                        dataSource={data?.map((post: any) => ({ ...post, key: post.id }))}
                        className="rounded-md"
                    />
                )}
            </div>
        </>
    );
};

export default Posts;
