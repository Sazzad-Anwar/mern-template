import React from 'react';

type size = 'large' | 'middle' | 'small';

export type FieldType = {
    name: string;
    defaultValue?: string | null;
    type: string;
    label: string;
    rules?: any[];
    icon?: React.ReactNode;
    size?: size;
    options?: { name: string; value: string | number | boolean }[];
};

export type FormBuilderType = {
    name: string;
    submitApi: string;
    method: 'POST' | 'PUT';
    fields: FieldType[];
    type: 'login' | 'regular';
    submitButton: {
        label: string;
        className: string;
        size?: size;
    };
    navigateRoute?: string;
    mutateFn?: () => void;
};

export type FormBuilderPropsType = {
    formDetails: FormBuilderType;
    className?: string;
};

export enum InputTypes {
    Text = 'text',
    TextArea = 'textArea',
    Checkbox = 'checkbox',
    Radio = 'radio',
    Password = 'password',
    Select = 'select',
    Number = 'number',
    DatePicker = 'datePicker',
    DateRangePicker = 'dateRangePicker',
}
