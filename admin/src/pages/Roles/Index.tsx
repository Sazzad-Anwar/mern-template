import { Breadcrumb, Button } from 'antd';
import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { MdSupervisedUserCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Error from '../../components/Error/Index';
import PointDetailsCard from '../../components/PointDetailsCard/Index';
import { RouteEnums } from '../../routes/routes.types';
import { RoleType } from './roles.types';

const Roles = () => {
    const [roles, setRoles] = useState<RoleType>([
        {
            id: '1',
            name: 'Super Admin',
            count: 1,
        },
        {
            id: '2',
            name: 'Admin',
            count: 2,
        },
        {
            id: '3',
            name: 'Manager',
            count: 5,
        },
        {
            id: '4',
            name: 'Moderator',
            count: 8,
        },
    ]);

    const deleteRole = (id: string) => {
        setRoles(roles.filter((role) => role.id !== id));
    };

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/utilities">Utilities</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Roles</Breadcrumb.Item>
            </Breadcrumb>
            <div className="mt-5 p-5 bg-white">
                <Link className="flex justify-end mb-2" to={RouteEnums.CreateRoles}>
                    <Button type="primary" size="middle">
                        Create Role
                    </Button>
                </Link>
                {!roles.length && <Error error="No data found !" />}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-3">
                    {roles.map((role) => (
                        <div className="pt-3 pr-3 relative">
                            <Link to={RouteEnums.Roles + `/${role.id}/access-routes`}>
                                <PointDetailsCard
                                    key={role.id}
                                    icon={<MdSupervisedUserCircle size={30} />}
                                    title={role.count.toString()}
                                    subTitle={role.name}
                                />
                            </Link>
                            <Button
                                icon={<IoCloseOutline />}
                                onClick={() => deleteRole(role.id)}
                                className="absolute right-1 top-1 z-10 flex justify-center items-center h-5 w-5 rounded-full border-primary-500 text-primary-500 bg-white"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Roles;
