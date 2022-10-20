import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { MdSupervisedUserCircle } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import PointDetailsCard from '../../components/PointDetailsCard/Index';
import { RouteEnums } from '../../routes/routes.types';

const Utilities = () => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>Utilities</Breadcrumb.Item>
            </Breadcrumb>
            <div className="bg-white grid grid-cols-1 md:grid-cols-4 gap-5 p-5 mt-5">
                <Link to={RouteEnums.Roles}>
                    <PointDetailsCard
                        icon={<MdSupervisedUserCircle size={30} />}
                        title="0"
                        subTitle="Roles"
                    />
                </Link>
                <Link to={RouteEnums.AppSetting}>
                    <PointDetailsCard
                        icon={<IoSettingsOutline size={30} />}
                        title="Edit"
                        subTitle="Settings"
                    />
                </Link>
            </div>
        </>
    );
};

export default Utilities;
