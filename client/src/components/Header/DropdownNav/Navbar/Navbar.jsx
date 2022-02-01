import React from 'react';
import './Navbar.css'
import CalendarIcon from '../../../../res/calendar_edit.svg'
import Users from '../../../../res/users.svg'
import AddEntry from '../../../../res/add_entry.svg'
import CalendarEntry from '../../../CalendarView/Calendar/CalendarEntry/CalendarEntry.jsx';

import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <nav>
           <Link to="/calendarView" className="calenderPreview styleDropdown"><img src={CalendarIcon} alt=""/> </Link>
           <Link to="/entryView" className="styleDropdown"><img src={AddEntry}  alt="#"/></Link>
           <Link to="/loginView" className="styleDropdown"><img src={Users}  alt="#"/></Link>
           
        </nav>
    )
}

export default Navbar