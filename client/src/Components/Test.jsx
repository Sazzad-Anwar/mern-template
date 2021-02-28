import { Card, CardContent, CardMedia, Grid, IconButton } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';

const Test = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [gallery,setGallery] = useState([]);

    useEffect(()=>{
        const getGallery = async()=>{
            const {data} = await axios.get('https://pixabay.com/api/?key=15674931-a9d714b6e9d654524df198e00&q=nature&image_type=photo&pretty=true');
            setGallery(data.hits);
        }
        getGallery();
    },[]);

    const handleClick = id =>{
        const new_array = gallery.filter(pic=> pic.id !== id);
        setGallery(new_array);
    }

    return (
        <div className="p-0 m-0">
            <Card style={{minHeight:650,minWidth:400,margin:"150px 250px"}} elevation={10}>
                <IconButton className="float-right" color="primary">
                    <ClearIcon color="primary" />
                </IconButton>
                <CardContent>
                    <img src="https://picsum.photos/600" style={{height:600,width:'100%'}} alt=""/>
                </CardContent>
            </Card>
        </div>
    )
}

export default Test;
