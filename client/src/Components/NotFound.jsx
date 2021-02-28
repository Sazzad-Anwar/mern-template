import img from './404.jpg';
const NotFound = () => {
    return (
        <div style={{height:'75vh'}}>
            <img src={img} height="700" style={{position: 'absolute',transform: 'translate(-50%,-50%)',left:'50%',top:'50%',borderRadius: '50%'}} alt={img}/>
        </div>
    )
}

export default NotFound;
