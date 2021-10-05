import React from 'react'
import './Calendar.css'
import CalendarEntry from './CalendarEntry/CalendarEntry.jsx'
//import CurrentMonth from ..

const Calendar = () => {

    var rows = [];

    function monthCheck(){
            //rechnung und int wert returnen

            // 28, 29, 30, 31
            return 31;
    }

    for (var i = 1; i <= monthCheck(); i++){
        rows.push((<CalendarEntry value={i}/>))
    }

    return (
        <div className="calendar">
            {rows}
        </div>
    )
}

export default Calendar