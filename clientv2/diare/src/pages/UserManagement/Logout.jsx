import React from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleJsonSecret from '../../client_secret_594030658397-hfnl2vimstob15dk1jcl6jeq8f8b382e.apps.googleusercontent.com.json';

const clientId = GoogleJsonSecret.web.client_id;

const Logout  = () => {
  const onSuccess = () => {
    console.log('Logout made successfully');
  };

  return (
    <div id="gButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}/>
    </div>
  );
}

export default Logout;