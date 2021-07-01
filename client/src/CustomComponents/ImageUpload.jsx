/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Grid, IconButton, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: '100%',
    height: 250,
    objectFit: 'cover',
    padding: 4,
    boxSizing: 'border-box',
    position: 'relative',
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};

const removePhoto = {
    position: 'absolute',
    top: 0,
    right: 0,
};

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Upload = () => {
    const [image, setImage] = useState([]);
    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const uploadFile = async (e) => {
        const formData = new FormData();
        files.map((file) => formData.append('uploads', file));
        const { data } = await axios.post('/api/v1/upload', formData);
        setImage((preImage) => [...preImage, data.filePath]);
        console.log(typeof files, files);
    };

    const removeFile = async (id) => {
        const uploadId = id.split('/uploads/')[1];
        await axios.delete(`/api/v1/upload/${uploadId}`);
        setImage(image.filter((singleImage) => singleImage !== id));
        console.log(uploadId);
        setOpen(true);
    };

    return (
        <div>
            <Snackbar
                open={open}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success">
                    Picture Deleted
                </Alert>
            </Snackbar>
            <section>
                <Grid container>
                    <Grid item xs={12} md={4} />
                    <Grid item xs={12} md={4}>
                        <input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={uploadFile}
                            multiple
                        />
                        <label
                            htmlFor="icon-button-file"
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: 'white' }}
                        >
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                id="icon-button-file"
                            >
                                <PhotoCamera />
                            </IconButton>
                            <Typography variant="h6" color="primary">
                                Upload File/photo
                            </Typography>
                        </label>
                    </Grid>
                    <Grid item xs={12} md={4} />
                    {image &&
                        image.map((singleImage) => (
                            <Grid item xs={12} md={3}>
                                <div style={thumb} key={image}>
                                    <div style={thumbInner}>
                                        <img
                                            src={singleImage}
                                            alt={singleImage}
                                            height={250}
                                            width="auto"
                                        />
                                    </div>
                                    <IconButton
                                        style={removePhoto}
                                        onClick={() => removeFile(singleImage)}
                                    >
                                        <BackspaceIcon color="primary" />
                                    </IconButton>
                                </div>
                            </Grid>
                        ))}
                </Grid>
            </section>
        </div>
    );
};

export default Upload;
