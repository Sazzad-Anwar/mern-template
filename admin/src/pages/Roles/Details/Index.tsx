import { Breadcrumb, Checkbox, Collapse, Tag } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { RouteEnums } from '../../../routes/routes.types';
let { Panel } = Collapse;

const RoleDetails = () => {
    const { id } = useParams();

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={RouteEnums.AdminUtilities}>Utilities</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={RouteEnums.Roles}>Roles</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{id} - Access Routes</Breadcrumb.Item>
            </Breadcrumb>
            <div className="p-5 mt-5 bg-white">
                <Collapse defaultActiveKey={['1']} accordion>
                    <Panel header="Post" key="1">
                        <Checkbox>
                            <Tag color="green">Get</Tag> Post
                        </Checkbox>
                        <Checkbox>
                            <Tag color="blue">Create</Tag> Post
                        </Checkbox>
                        <Checkbox>
                            <Tag color="purple">Update</Tag> Post
                        </Checkbox>
                        <Checkbox>
                            <Tag color="red">Delete</Tag> Post
                        </Checkbox>
                    </Panel>
                    <Panel header="Category" key="2">
                        <Checkbox>
                            <Tag color="green">Get</Tag> Category
                        </Checkbox>
                        <Checkbox>
                            <Tag color="blue">Create</Tag> Category
                        </Checkbox>
                        <Checkbox>
                            <Tag color="purple">Update</Tag> Category
                        </Checkbox>
                        <Checkbox>
                            <Tag color="red">Delete</Tag> Category
                        </Checkbox>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <Checkbox>Checkbox</Checkbox>
                    </Panel>
                </Collapse>
            </div>
        </>
    );
};

export default RoleDetails;
