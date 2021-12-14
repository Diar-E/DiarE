import './App.css';
import Header from './components/Header/Header.jsx';
import CalendarView from './components/CalendarView/CalendarView.jsx';
import LoginView from './components/LoginView/LoginView.jsx';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



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
        

        <Router>
          <Header />
          <Routes>
            <Route path="/calendarView" element={<CalendarView/>}/>
            <Route path="/loginView" element={<LoginView/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}


export default App;