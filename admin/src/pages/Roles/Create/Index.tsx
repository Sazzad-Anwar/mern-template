import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { FormBuilderType, InputTypes } from '../../../components/FormBuilder/formBuilder.type';
import FormBuilder from '../../../components/FormBuilder/Index';
import { RouteEnums } from '../../../routes/routes.types';

const CreateRole = () => {
    let formBuilderData: FormBuilderType = {
        name: 'Create Role',
        submitApi: '/create/role',
        type: 'regular',
        navigateRoute: RouteEnums.Roles,
        method: 'POST',
        submitButton: {
            className: 'w-full mt-5',
            label: 'Save',
            size: 'large',
        },
        fields: [
            {
                label: 'Role name',
                name: 'roleName',
                type: InputTypes.Text,
                size: 'large',
                rules: [
                    {
                        required: true,
                        message: 'Role name is required',
                    },
                ],
            },
        ],
    };

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={RouteEnums.AdminUtilities}>Utilities</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={RouteEnums.Roles}>Roles</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Create Role</Breadcrumb.Item>
            </Breadcrumb>
            <div className="mt-5 py-5 bg-white w-full">
                <FormBuilder
                    formDetails={formBuilderData}
                    className="w-full mx-4 md:w-96 md:mx-auto"
                />
            </div>
        </>
    );
};

export default CreateRole;
