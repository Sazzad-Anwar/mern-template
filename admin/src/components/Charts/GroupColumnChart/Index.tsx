import React, { useEffect, useState, memo } from 'react';
import { Column } from '@ant-design/plots';
import { ColorTheme } from '../../../shared/ColorTheme';

const GroupColumnChart = () => {
    const data = [
        {
            name: 'London',
            month: 'Jan.',
            rainfall: 18.9,
        },
        {
            name: 'London',
            month: 'Feb.',
            rainfall: 28.8,
        },
        {
            name: 'London',
            month: 'Mar.',
            rainfall: 39.3,
        },
        {
            name: 'London',
            month: 'Apr.',
            rainfall: 81.4,
        },
        {
            name: 'London',
            month: 'May',
            rainfall: 47,
        },
        {
            name: 'London',
            month: 'Jun.',
            rainfall: 20.3,
        },
        {
            name: 'London',
            month: 'Jul.',
            rainfall: 24,
        },
        {
            name: 'London',
            month: 'Aug.',
            rainfall: 35.6,
        },
        {
            name: 'Berlin',
            month: 'Jan.',
            rainfall: 12.4,
        },
        {
            name: 'Berlin',
            month: 'Feb.',
            rainfall: 23.2,
        },
        {
            name: 'Berlin',
            month: 'Mar.',
            rainfall: 34.5,
        },
        {
            name: 'Berlin',
            month: 'Apr.',
            rainfall: 99.7,
        },
        {
            name: 'Berlin',
            month: 'May',
            rainfall: 52.6,
        },
        {
            name: 'Berlin',
            month: 'Jun.',
            rainfall: 35.5,
        },
        {
            name: 'Berlin',
            month: 'Jul.',
            rainfall: 37.4,
        },
        {
            name: 'Berlin',
            month: 'Aug.',
            rainfall: 42.4,
        },
    ];
    const config = {
        data,
        isGroup: true,
        xField: 'month',
        yField: 'rainfall',
        seriesField: 'name',

        /** 设置颜色 */
        color: [ColorTheme['primary-500'], '#f88c24'],

        /** 设置间距 */
        marginRatio: 0.1,
    };
    return <Column {...config} />;
};

export default memo(GroupColumnChart);
