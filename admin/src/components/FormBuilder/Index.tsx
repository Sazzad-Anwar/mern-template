import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Radio, Select, Checkbox, InputNumber, DatePicker } from 'antd';
import { FormBuilderPropsType, FormBuilderType, InputTypes } from './formBuilder.type';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import { LOGIN } from '../../context/constants/Auth.constants';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';
import { toast } from 'react-toastify';
const { TextArea, Password } = Input;
const { RangePicker } = DatePicker;

const FormBuilder = ({ formDetails, className }: FormBuilderPropsType) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { authDispatch } = useGlobalContext();
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        setIsLoading(true);

        try {
            let resData;
            if (formDetails.method === 'POST') {
                // Post all the data to the route
                // resData = await axiosInstance.post(formDetails.submitApi, values);

                if (formDetails.type === 'login') {
                    authDispatch({
                        type: LOGIN,
                        payload: {
                            name: values.email.split('@')[0],
                            email: 'admin@gmail.com',
                            role: 'admin',
                            isLoggedIn: true,
                        },
                    });
                    if (values.remember) {
                        localStorage.setItem('email', values.email);
                        localStorage.setItem('password', values.password);
                        localStorage.setItem('remember', String(values.remember));
                    } else {
                        localStorage.removeItem('email');
                        localStorage.removeItem('password');
                        localStorage.removeItem('remember');
                    }
                }
                formDetails.type === 'regular' ? toast.success('Item has been created') : null;
            } else {
                // Put all the data to the route
                await axiosInstance.put(formDetails.submitApi, values);

                // If the data need to be mutated then pass the mutate function of useSWR from component and call the mutate function here
                formDetails.mutateFn ? formDetails?.mutateFn() : null;
            }
            setIsLoading(false);

            // If the form details has navigate route
            formDetails.navigateRoute ? navigate(formDetails.navigateRoute) : null;
        } catch (error: any) {
            toast.error(
                error?.response?.data
                    ? error.response?.data.message
                    : error?.message
                    ? error?.message
                    : 'Error occurred',
            );
            setIsLoading(false);
        }
    };

    let initialValues: any = {};

    formDetails.fields.map((input) => {
        initialValues[input.name] = input.defaultValue;
    });

    return (
        <>
            <Form
                layout="vertical"
                name={formDetails.name}
                initialValues={initialValues}
                onFinish={onFinish}
                className={className}
            >
                {formDetails.fields.map((input) => {
                    switch (input.type) {
                        case InputTypes.Text:
                            return (
                                <Form.Item
                                    key={formDetails.name + '-' + input.label}
                                    label={input.label}
                                    name={input.name}
                                    rules={input.rules}
                                >
                                    <Input size={input.size} prefix={input.icon} allowClear />
                                </Form.Item>
                            );
                        case InputTypes.Password:
                            return (
                                <Form.Item
                                    key={formDetails.name + '-' + input.label}
                                    label={input.label}
                                    name={input.name}
                                    rules={input.rules}
                                >
                                    <Password size={input.size} prefix={input.icon} allowClear />
                                </Form.Item>
                            );
                        case InputTypes.Number:
                            return (
                                <Form.Item
                                    key={formDetails.name + '-' + input.label}
                                    label={input.label}
                                    name={input.name}
                                    rules={input.rules}
                                >
                                    <InputNumber size={input.size} prefix={input.icon} />
                                </Form.Item>
                            );
                        case InputTypes.TextArea:
                            return (
                                <Form.Item
                                    key={formDetails.name + '-' + input.label}
                                    label={input.label}
                                    name={input.name}
                                    rules={input.rules}
                                >
                                    <TextArea rows={4} allowClear />
                                </Form.Item>
                            );
                        case InputTypes.DatePicker:
                            return (
                                <Form.Item
                                    key={formDetails.name + '-' + input.label}
                                    label={input.label}
                                    name={input.name}
                                    rules={input.rules}
                                >
                                    <DatePicker size={input.size} allowClear />
                                </Form.Item>
                            );
                        case InputTypes.DateRangePicker:
                            return (
                                <Form.Item
                                    key={formDetails.name + '-' + input.label}
                                    label={input.label}
                                    name={input.name}
                                    rules={input.rules}
                                >
                                    <RangePicker size={input.size} allowClear />
                                </Form.Item>
                            );
                        case InputTypes.Radio:
                            return (
                                <Form.Item
                                    key={formDetails.name + '-' + input.label}
                                    label={input.label}
                                    name={input.name}
                                    rules={input.rules}
                                >
                                    <Radio.Group>
                                        {input.options?.map((option) => (
                                            <Radio
                                                className="checked:accent-primary-60"
                                                key={
                                                    formDetails.name +
                                                    '-' +
                                                    input.label +
                                                    '-' +
                                                    option.value
                                                }
                                                value={option.value}
                                            >
                                                {' '}
                                                {option.name}{' '}
                                            </Radio>
                                        ))}
                                    </Radio.Group>
                                </Form.Item>
                            );
                        case InputTypes.Select:
                            return (
                                <Form.Item
                                    key={formDetails.name + '-' + input.label}
                                    label={input.label}
                                    name={input.name}
                                    rules={input.rules}
                                >
                                    <Select size={input.size}>
                                        {input.options?.map((option) => (
                                            <Select.Option
                                                key={
                                                    formDetails.name +
                                                    '-' +
                                                    input.label +
                                                    '-' +
                                                    option.value
                                                }
                                                value={option.value}
                                            >
                                                {option.name}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            );
                        case InputTypes.Checkbox:
                            return (
                                <Form.Item
                                    key={formDetails.name + '-' + input.label}
                                    name={input.name}
                                    rules={input.rules}
                                    valuePropName="checked"
                                >
                                    <Checkbox>{input.label}</Checkbox>
                                </Form.Item>
                            );
                        default:
                            break;
                    }
                })}
                <Form.Item>
                    <Button
                        loading={isLoading}
                        className={formDetails.submitButton.className}
                        type="primary"
                        htmlType="submit"
                        size={formDetails.submitButton.size}
                    >
                        {formDetails.submitButton.label}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default FormBuilder;
