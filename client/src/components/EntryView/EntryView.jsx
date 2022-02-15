import { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container, FormGroup, Label, Button, Form, Input } from 'reactstrap';
import { Link } from  'react-dom';
import axios from 'axios';
class EntryView extends Component {
    emptyItem = {
        date: '',
        text: '',
        users: 1
    };



    constructor(props) {
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

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit Entry' : 'Add Entry'}</h2>
        return(
            <div className="entryView">
                <Container>
                {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="date">Date YYYY-MM-DD</Label>
                            <Input type="text" name="date" id="date" value={item.date || ''}
                                onChange={this.handleChange} autoComplete="2022-02-08"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="text">Text</Label>
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