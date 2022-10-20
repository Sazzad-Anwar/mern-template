import React from 'react';
import { ColorTheme } from '../../shared/ColorTheme';
import { Spin } from 'antd';

const Loader = () => {
    return (
        <div className="flex flex-col w-full h-96 items-center justify-center lg:mx-auto lg:h-96 lg:w-96">
            <Spin className="text-primary-500" />
        </div>
    );
};

export default Loader;
