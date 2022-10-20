import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = ({ error }: { error: string }) => {
    const navigate = useNavigate();
    return (
        <div className="flex h-96 flex-col items-center justify-center dark:bg-dark">
            <h1 className="text-2xl font-light">{error}</h1>
            <Button type="primary" onClick={() => navigate(0)} className="mt-5">
                Reload
            </Button>
        </div>
    );
};

export default Error;
