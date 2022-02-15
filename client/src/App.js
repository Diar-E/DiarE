import './App.css';
import Header from './components/Header/Header.jsx';
import CalendarView from './components/CalendarView/CalendarView.jsx';
import LoginView from './components/LoginView/LoginView.jsx';
import EntryView from './components/EntryView/EntryView.jsx';
import EntryList from './components/EntryView/EntryList.jsx';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/calendarView" element={<CalendarView/>}/>
            <Route path="/loginView" element={<LoginView/>}/>
            <Route path="/entryList" element={<EntryList/>}/>
            <Route path="/entryEdit" element={<EntryView id="" date="" text="" users="1"/> }/>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;