import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Loader
