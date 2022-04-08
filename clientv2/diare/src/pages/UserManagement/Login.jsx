import React from 'react';
import refreshTokenSetup from '../../utils/refreshToken.js';
import GoogleLogin from 'react-google-login';
import GoogleJsonSecret from '../../client_secret_594030658397-hfnl2vimstob15dk1jcl6jeq8f8b382e.apps.googleusercontent.com.json';

const clientId = GoogleJsonSecret.web.client_id;

const Login  = () => {
  const onSuccess = (res) => {
    refreshTokenSetup(res);
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      body: JSON.stringify(res.profileObj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    fetch("http://localhost:8080/api/token", {
      method: "POST",
      body: res.tokenObj.access_token
    });
    window.userid = res.profileObj.googleId;
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div id="gButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}/>
    </div>
  );
}

export default Login;