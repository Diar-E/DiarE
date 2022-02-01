import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import './EntryView.css';

const EntryView = () => {
    const [value, setValue] = useState('');
    const url = 'localhost:9000/api/'
    axios.post(url ,value).then(() => {
        console.log('Data sent!')
    })
    return(
        <>
            <div className="entryView">
                <h2>Datum: </h2>
                <ReactQuill theme="snow" value={value} onChange={setValue}/>
                
            </div>
            
        </>
        
    )
}


export default EntryView