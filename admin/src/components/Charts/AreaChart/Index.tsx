import React, { useEffect, useState, memo } from 'react';
import { Area } from '@ant-design/plots';

const AreaChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let data = await fetch(
                'https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json',
            );
            let chartData = await data.json();
            setData(chartData);
        };
        getData();
    }, []);

    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };

    return <Area {...config} />;
};

export default memo(AreaChart);
