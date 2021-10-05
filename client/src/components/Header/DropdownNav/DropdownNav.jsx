import React, { useState } from 'react'
import './DropdownNav.css'
import Navbar from './Navbar/Navbar.jsx'
import Menu from '../../../res/menu.svg'


const DropdownNav = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
    setActive(!isActive);
  };
    return (
        <div className={`dropDown ${isActive ? 'collapsible' : null}`}> 
            <img src={Menu} className="collBtn" onClick={toggleClass} />
            <Navbar/>
        </div>
    )
}

export default DropdownNav