import img from './underConstruction.jpg';

const SiteUnderConstruction = () => {
    return (
        <div>
            <img src={img} style={{position: 'absolute',transform: 'translate(-50%,-50%)',left:'50%',top:'50%',height:'100%',width:'auto'}} alt={img}/>
        </div>
    )
}

export default SiteUnderConstruction;
