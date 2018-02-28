import React from 'react';
import './home.css'



const Home = () => {
  return (
    <div className='form'>
      <span className='homecontainer infocontainer'>
        <h3> Climb, Explore, Connect! </h3>
        <p className='hometext'>  Welcome Climber! This is Alpha! Make connections in the climbing community! Chat with climbers in your area, connect with friends, and find new partners!</p>
      </span>
      <span className='homecontainer profilecontainer'>
        <p className='hometext'>DB Profile content will appear here</p>
      </span> <br />
      <div className='footercontainer'>
        <h5> First comes Alpha, then comes Beta </h5>
        <h6> An App by Lillia</h6>
      </div>
    </div>

  )
}

export default Home;
