import { Component } from 'react';
import './EntryView.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container, FormGroup, Label, Button, Form, Input } from 'reactstrap';
import { Link } from  'react-dom';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';

class EntryView extends Component {
    emptyItem = {
        date: '',
        text: '',
        users: 1
    };

    constructor(props) {
        registerLocale("es", es);
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.id !== 'new') {
            const entry = await (await fetch(`/entries/${this.props.id}`)).json();
            this.setState({item: entry});
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    handleEditorChange = (text) => {
        let item = {...this.state.item, text};
        this.setState({item});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {item} = this.state;
        console.log(item)
        const headers = {'Content-Type': 'application/json'};
        const res = await axios.post("http://localhost:8080/entries/new", JSON.stringify(item), {headers})
        alert(res.status);
    }
    handlePickerChange = (date) => {
        let item = {...this.state.item, date}
        this.setState({item});
    }
    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Entry' : 'Add Entry'}</h2>

        return(
            <div className="entryView">
                <Container>
                {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="date">
                                Date
                                <DatePicker name="date" id="date" selected={item.date || ''} onSelect={(date) => this.handlePickerChange(date)} locale="es"/>
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <ReactQuill name="text" id="text" value={item.text || ''}
                            onChange={this.handleEditorChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/entries">Cancel</Button>
                        </FormGroup>
                     </Form>
                </Container>
            </div>
        )
    }
}
export default EntryView;