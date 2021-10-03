import React from 'react'
import './FooterButton.css'

const FooterButton = ( { imgSrc }) => {
    return (
        <div className="footerButton">
            <img src={imgSrc}/>
        </div>
    )
}

export default FooterButton
