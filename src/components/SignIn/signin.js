import React from 'react';
import './signin.css';

const SignIn = ({
  onRouteChange,
  isSignedIn
}) => {

  if (isSignedIn) {
    return ( <
      div className = 'authenticate' >
      <
      div >
      <
      p onClick = {
        () => onRouteChange('signout')
      } > Sign Out < /p> <
      /div> <
      /div>
    );
  } else {
    return ( <
      div className = 'authenticate' >
      <
      div >
      <
      p onClick = {
        () => onRouteChange('signin')
      } > Sign In < /p> <
      /div> <
      div >
      <
      p onClick = {
        () => onRouteChange('register')
      } > Register < /p> <
      /div> <
      /div>

    );

  }

}

export default SignIn;
