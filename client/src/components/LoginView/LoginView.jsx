import React from 'react';
import './LoginView.css';

const LoginView = () => {
    return (
        <>
        <div className="loginView">
            <div className="cont">
                
                <div className="bigpoint active"></div>

                <div className="bigpoint"></div>
            
                <div className="bigpoint"></div>
            </div>


            <label for="username">Username <br></br></label>
            <input name="username" type="textfield"></input>

            <br></br>

            <label for="nachname">Password <br></br></label>
            <input name="nachname" type="password"></input>

            <div className="cont">
                <div className="button back">Previous</div>
                <div className="button next">Next</div>
            </div>
        </div>
        </>
    )
}

export default LoginView
