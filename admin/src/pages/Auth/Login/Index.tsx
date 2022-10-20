import { Button, Checkbox, Form, Input, Select } from 'antd';
import { FC, lazy, Suspense, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../context/constants/Auth.constants';
import { useGlobalContext } from '../../../context/GlobalContextProvider';
import { AiFillLock } from 'react-icons/ai';
import { FiKey } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { LoginDto } from './login.type';
import { Config } from '../../../shared/Config';
import { FormBuilderType, InputTypes } from '../../../components/FormBuilder/formBuilder.type';
const FormBuilder = lazy(() => import('../../../components/FormBuilder/Index'));
import Loader from '../../../components/Loader/Index';

const Login: FC = () => {
    const { auth } = useGlobalContext();

    let loginFormBuilder: FormBuilderType = {
        name: 'Login',
        submitApi: '',
        method: 'POST',
        type: 'login',
        submitButton: {
            label: 'Login',
            className: 'w-full',
            size: 'large',
        },
        navigateRoute: '/',
        fields: [
            {
                name: 'email',
                label: 'Email',
                type: InputTypes.Text,
                icon: <MdEmail size={25} />,
                size: 'large',
                defaultValue: localStorage.getItem('email') ? localStorage.getItem('email') : '',
                rules: [
                    {
                        required: true,
                        message: 'Email is required',
                    },
                ],
            },
            {
                name: 'password',
                label: 'Password',
                type: InputTypes.Password,
                icon: <FiKey size={25} />,
                size: 'large',
                defaultValue: localStorage.getItem('password')
                    ? localStorage.getItem('password')
                    : '',
                rules: [
                    {
                        required: true,
                        message: 'Password is required',
                    },
                ],
            },
            {
                name: 'remember',
                label: 'Remember me',
                type: InputTypes.Checkbox,
                defaultValue: localStorage.getItem('remember')
                    ? localStorage.getItem('remember')
                    : '',
            },
        ],
    };

    if (auth.user?.isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <div className="absolute inset-0 z-10">
                <div className="relative grid h-screen w-screen grid-cols-1 overflow-hidden lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="relative hidden lg:col-span-2 lg:block xl:col-span-3 2xl:col-span-4">
                        <img
                            className="h-full w-auto brightness-50"
                            src={Config.LoginImage}
                            alt={Config.LoginImage}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-md">
                            <img className="h-20 w-auto" src={Config.Logo} alt="logo" />
                        </div>
                    </div>

                    <div className="flex h-full w-full items-center px-5 backdrop-blur-lg">
                        <div className="w-full">
                            <h1 className="flex items-center justify-center text-2xl font-semibold dark:text-white">
                                <div className="flex justify-center items-center p-2">
                                    <img className="h-10 w-auto" src={Config.Logo} alt="logo" />
                                </div>
                            </h1>
                            <Suspense fallback={<Loader />}>
                                <FormBuilder className="mt-3" formDetails={loginFormBuilder} />
                            </Suspense>
                            <Link to="/forgot-password">
                                <p className="normal-transition text-center text-base underline">
                                    Forgot Password
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
