import React from "react";
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Form } from 'reactstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import de from 'date-fns/locale/de';

const Editor = () => {
    registerLocale("de", de);
    const [value, setValue] = React.useState(""); //MDEditor
    const [startDate, setStartDate] = React.useState(new Date()); //DatePicker
    const [state, setState] = React.useState({item: {
        date: '',
        content: '',
        userid: ''
    }});

    const getDateForEntry = async () => {
        const res = await fetch(`http://localhost:8080/api/${window.userid}/specific?date=${startDate.toLocaleDateString()}`);
        if (res.status >= 200 && res.status <= 299) {
            const response = await res.json();
            let item = {...state.item};
            item.content = response.content;
            item.date = response.date;
            item.userid = response.userid;
            setState({item});
            setValue(response.text);
        }
        else if (res.status === 400) {
            let item = {...state.item};
            item.content = "";
            item.date = startDate;
            item.userid = window.userid;
            setState({item});
            setValue(item.content);
        }
    }

    const handleSubmit = () => {
        let item = {...state.item};
        item.content = value;
        item.date = startDate.toLocaleDateString();
        item.userid = window.userid;
        setState({item});
        fetch(`http://localhost:8080/api/${item.userid}/specific`, {
            method: "PATCH",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .catch(() => {
            fetch(`http://localhost:8080/api/${item.userid}/new/entry`, {
                method: "POST",
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        })
    }
    const handleReset = async () => {
        let item = {...state.item};
        const res = await fetch(`http://localhost:8080/api/${window.userid}/specific?date=${startDate.toLocaleDateString()}`);
        if (res.status >= 200 && res.status <= 299) {
            const response = await res.json();
            item.content = response.content;
            item.date = response.date;
            item.userid = response.userid;
            fetch(`http://localhost:8080/api/${item.date}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setValue("");
            
        }
    }
    return (
        <div className="container" id="editorpage">
            <Form onSubmit={handleSubmit} onReset={handleReset} >
                <DatePicker name="date" id="date" selected={startDate} onChange={setStartDate} onCalendarClose={getDateForEntry} locale="de" dateFormat="P"/>
                <ReactQuill value={value} onChange={setValue}/>
                <Button color="primary" type="submit">Save</Button>{' '}
                <Button color="secondary" type="reset">Delete</Button>{' '}
            </Form>
        </div>
    );
}

export default Editor;

/*
<MDEditor
id="mdeditor"
value={value}
onChange={setValue}
previewOptions={{
    rehypePlugins: [[rehypeSanitize]],
}}
/>
*/