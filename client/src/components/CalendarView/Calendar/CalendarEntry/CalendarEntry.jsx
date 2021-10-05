import React, {useState} from 'react'
import './CalendarEntry.css'

const CalendarEntry = ({value}) => {

    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
    setActive(!isActive);
  };

    return (
        <div className={`calendarEntry ${isActive ? 'active' : null}`} onClick={toggleClass} onDoubleClick={null}>
            {value}
        </div>
    )
}

export default CalendarEntry