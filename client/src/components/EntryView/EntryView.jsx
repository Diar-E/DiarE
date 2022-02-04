import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import './EntryView.css';

const EntryView = () => {
    const userID = 0;
    const date = Date.now;
    const [value, setValue] = useState('');
    const url = 'localhost:3000/entry'
    axios.post(url ,value).then(() => {
        console.log('Data sent!')
    })

    return(
        <>
            <form method='post' action='/entry'>
                <div className="entryView">
                    <ReactQuill theme="snow" value={value} onChange={setValue}/>
                    <button className='bn btn-success' type='submit'>
                        Save
                    </button>
                </div>
            </form>
        </>
        
    )
}




export default EntryView;