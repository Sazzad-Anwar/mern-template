import { Breadcrumb } from 'antd';
import { FC, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { FormBuilderType, InputTypes } from '../../../components/FormBuilder/formBuilder.type';
import { Config } from '../../../shared/Config';
import Loader from '../../../components/Loader/Index';
const FormBuilder = lazy(() => import('../../../components/FormBuilder/Index'));

const CreatePost: FC = () => {
    let formBuilderData: FormBuilderType = {
        name: 'Create Post',
        submitApi: Config.BaseUrl + '/posts',
        type: 'regular',
        method: 'POST',
        navigateRoute: '/posts',
        submitButton: {
            size: 'large',
            label: 'Create Post',
            className: 'w-full',
        },
        fields: [
            {
                name: 'title',
                defaultValue: 'Sazzad',
                type: InputTypes.Text,
                label: 'Title',
                size: 'large',
                rules: [
                    {
                        required: true,
                        message: 'Please input your title',
                    },
                ],
            },
            {
                name: 'body',
                defaultValue: 'this is body text',
                type: InputTypes.TextArea,
                label: 'Body',
                size: 'large',
                rules: [
                    {
                        required: true,
                        message: 'Please input post body',
                    },
                ],
            },
        ],
    };

    return (
        <>
            <Breadcrumb className="mb-1">
                <Breadcrumb.Item>
                    <Link to="/posts">Posts</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Create Post</Breadcrumb.Item>
            </Breadcrumb>
            <div className="w-full h-full mt-5 bg-white py-10">
                <h1 className="text-center font-medium text-xl">Create Post</h1>
                <Suspense fallback={<Loader />}>
                    <FormBuilder
                        className="mt-5 w-full px-3 md:px-0 md:w-96 mx-auto"
                        formDetails={formBuilderData}
                    />
                </Suspense>
            </div>
        </>
    );
};

export default CreatePost;
