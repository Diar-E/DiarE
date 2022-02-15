import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import './EntryView.css';
import axios from 'axios';

class EntryList extends Component {
    constructor(props) {
        super(props);
        this.state = {entries: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:8080/entries/")
            .then(response => response.data)
            .then(data => this.setState({entries: data}));
        
    }

    remove(id) {
        fetch(`/entries/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedEntries = [...this.state.entries].filter(i => i.id !== id);
            this.setState({entries: updatedEntries});
        });
    }
    
    render() {
        const {entries, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
    
        const entryList = entries.map(entry => {
            return <tr key={entry.id}>
                <td>{entry.entry_id}</td>
                <td>{entry.date}</td>
                <td>{entry.text}</td>
                <td>{entry.users}</td>
            </tr>
        });
    
        return (
            <div className='entryView'>
                <Container fluid>
                    <h3>Entries</h3>
                    <table>
                    <Table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Date</th>
                            <th>Text</th>
                            <th>User_Id</th>
                        </tr>
                        </thead>
                        <tbody>
                        {entryList}
                        </tbody>
                    </Table>
                    </table>
                </Container>
            </div>
        );
    }
}

export default EntryList;