import React from 'react'
import './Header.css';
import DropdownNav from './DropdownNav/DropdownNav.jsx'
//import UserIcon from '../../res/UserIcon.svg'


const Header = () => {
    return (
        <header>
            <div className="first">
                <DropdownNav/>
            </div >

            <div className="second">
                DIAR-E
            </div>

            <div className="third">
                Icon Dingens
            </div>


        </header>
    )
}

export default Header
