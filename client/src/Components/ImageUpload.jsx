import React, { useState } from 'react';
import { useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import shortid from 'shortid';

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 150,
    height: 150,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

const ImageUpload = ({ children }) => {

    const [files, setFiles] = useState([]); 

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        },
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
            <img
                src={file.preview}
                style={img}
                alt='pic'
            />
            </div>
        </div>
    ));

    const fileData = new FormData();
    fileData.append('code',shortid);
    files.map(single =>{
        return fileData.append('images',single);
    });

    useEffect(()=>{
        files.forEach(file => URL.revokeObjectURL(file.preview));
    },[files])

    return (<>
        {/* <div {...getRootProps({className: 'dropzone'})}>
            <input style={{cursor:'pointer'}} name="profile-pic" {...getInputProps()} />
            <span className="px-1 " >Drag 'n' drop or click to select image</span>
        </div>
        <aside style={thumbsContainer}>
            {thumbs}
        </aside> */}
        {children}
</>)}

export default ImageUpload;
