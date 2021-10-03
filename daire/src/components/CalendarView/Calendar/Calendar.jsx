import React from 'react'
import './Calendar.css'
import CalendarEntry from './CalendarEntry/CalendarEntry.jsx'
//import ViewMode from ''

const Calendar = () => {

    var rows = [];
    for (var i = 1; i < 31; i++){
        rows.push(<CalendarEntry value={i}/>)
    }

    return (
        <div className="calendar">
            {rows}
        </div>
    )
}

export default Calendar
