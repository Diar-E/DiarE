import React from 'react';
import './Navbar.css'
import CalendarIcon from '../../../../res/calendar_edit.svg'
import Users from '../../../../res/users.svg'
import AddEntry from '../../../../res/add_entry.svg'
import CalendarEntry from '../../../CalendarView/Calendar/CalendarEntry/CalendarEntry.jsx';

const Navbar = () => {

    return (
        <nav>
           <p className="calenderPreview"><img src={CalendarIcon} alt=""/> </p>
           <p><img src={AddEntry}  alt="#"/></p>
           <p><img src={Users}  alt="#"/></p>

           <div><CalendarEntry/></div>
        </nav>
    )
}

export default Navbar
