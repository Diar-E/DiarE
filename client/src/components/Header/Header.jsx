import React from 'react'
import './Header.css';
import DropdownNav from './DropdownNav/DropdownNav.jsx'
//import CurrentMonth from dfsdfsdf;
//import UserIcon from '../../res/UserIcon.svg'


const Header = () => {
    return (
        <header>
            <div className="first">
                <DropdownNav/>
            </div >

            <div className="second">
                
                <div className="links">links</div>
                <div className="month">Oktober//DIARE</div>
                <div className="rechts">rechts</div>
            </div>

            <div className="third">
                Icon Dingens
            </div>
        </header>
    )
}

export default Header