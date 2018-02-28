import React from 'react';


const FindAPartner = () => {
  return (
    <div className = 'form'>
      <h1> Find a Partner! </h1>
      <label htmlFor="search"> Search: </label>
      <input type="text" name="search" required /><br />
      <button className= 'modalButton'> Find a Partner!</button> <br />
      <label htmlFor="quickSearch"> Quick Search: </label>
      <input type="text" name="quickSearch" placeholder='Enter Username' required /><br />
      <button className= 'modalButton'> Find my friends!</button>
    </div>
  )
}

export default FindAPartner;
