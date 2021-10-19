import './App.css';
import Header from './components/Header/Header.jsx'
import CalendarView from './components/CalendarView/CalendarView.jsx'
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  
  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <Header />
        <CalendarView />
      </div>
    );
  }
}


export default App;