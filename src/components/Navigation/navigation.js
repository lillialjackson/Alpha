import React from 'react';
import './navigation.css';



const Navigation = ({onRouteChange}) => {
  return(
      <div>
        <nav>
            <p onClick={() => this.onRouteChange('home')}>Home</p>
            <p>Find A Partner</p>
            <p>Profile</p>
            <p>Chat</p>
        </nav>

      </div>

  );
}

export default Navigation;
