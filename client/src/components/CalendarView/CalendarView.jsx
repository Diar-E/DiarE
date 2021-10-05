import React from 'react'
import Footer from './Footer/Footer.jsx'
import Calendar from './Calendar/Calendar.jsx'
import './CalendarView.css'


const CalendarView = () => {
    return (
        <div className="calendarView">

            <Calendar/>
            <Footer/>

        </div>
        
    )
}

export default CalendarView