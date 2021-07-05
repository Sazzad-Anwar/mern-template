import { Spinner } from 'react-bootstrap';

const Loader = () => (
    <div className="height_width_100">
        <div className="d-flex flex-column element-center align-items-center">
            <Spinner animation="grow" className="text-primary" />
            <h3 className="text-primary text-center">Loading...</h3>
        </div>
    </div>
);

export default Loader;
