import './Footer.css';
import React from 'react'
import FooterButton from './FooterButton/FooterButton'
import Calendar_Decline from '../../../res/calendar_accept.svg'
import Calendar_Accept from '../../../res/calendar_cancel.svg'
import Calendar_Edit from '../../../res/calendar_edit.svg'
import View_Month from '../../../res/view_month.svg'
import View_Week from '../../../res/view_week.svg'

const Footer = () => {
    return (
        <div className ="footer">
            <FooterButton imgSrc={Calendar_Edit} />
            <FooterButton imgSrc={Calendar_Accept} />
            <FooterButton imgSrc={Calendar_Decline} />
            <FooterButton imgSrc={View_Month} />
            <FooterButton imgSrc={View_Week} />
        </div>
    )
}

export default Footer
