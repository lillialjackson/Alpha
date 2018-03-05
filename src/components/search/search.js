import React from 'react';
import ReactTable from 'react-table';
import './search.css';


// const matchedUserTable = [{
//  username: '',
//  location: '',
//  experiencelevel: {},
//  email: ''
// }]
//
// const columns = [{
//  Header: 'Username',
//  accessor: 'username'
// }, {
//  Header: 'Email',
//  accessor: 'email'
// }]


class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      experiencelevel: {},
      location: '',
      matchedUserTable: [{
        username: '',
        email: '',
        location: '',
        experiencelevel: {}
      }]
    };
  }


  onEmailChange = (event) => {
    console.log("Detected a email change!!!")
    this.setState({email: event.target.value})
  }

  onExperienceLevelChange = (event) => {
    console.log(event.target.value);
    this.setState({experiencelevel: event.target.value})
  }

  onLocationChange = (event) => {
    this.setState({location: event.target.value.toLowerCase()})
      console.log(this.state.location);
  }

  searchResultData = (data) => {
    this.setState({matchedUserTable: [{
      username: data.username,
      email: data.email,
      experienceLevel: data.experiencelevel,
      location: data.location
    }]})
  }

  onSearch = () => {
    fetch(`http://localhost:3000/search?experiencelevel=${this.state.experiencelevel}&location=${this.state.location}`)
    .then(response => response.json())
    .then( data => {
     console.log({matchedUserTable : data});
     if (data){
       console.log(data);
      return this.searchResultData(data);
  }})
    .catch(err => {
      console.log(err);
      return alert('Could not find climbers in your area at this time');
    })
  }

  onEmailSearch= () => {
    fetch(`http://localhost:3000/emailsearch?email=${this.state.email}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log(err);
      alert('No users registered with that email!');
    })
  }
  render() {
    // const matchedUserTable = this.state.matchedUserTable;
    // [{
    //  username: 'patrick',
    //  location: 'bikini bottom',
    //  experiencelevel: {},
    //  email: 'star@gmail.com'
    // }]

    const columns = [
      {
        Header: 'Username',
        accessor: 'username'
      }, {
     Header: 'Email',
     accessor: 'email'
    }]
  return (
    <div className = 'form'>
        <h1> Find a Partner! </h1>
          <div>
            <label htmlFor="location"> Location: </label>
            <input type="text"
               name="location"
              onChange= {this.onLocationChange}
              required /><br />
            <label htmlFor="experience"> Experience Level: </label>
            <select
              onChange = {this.onExperienceLevelChange}>
              <option value="none">--</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="advanced+">Advanced+</option>
            </select> <br />
            <button className= 'modalButton'
              onClick ={this.onSearch}>
               Find a Partner!
             </button> <br />

            <ReactTable data={this.state.matchedUserTable} columns={columns} />

         </div>
         <div>
            <label htmlFor="quickSearch"> Quick Search: </label>
            <input type="email"
               name="quickSearch"
               placeholder='Enter email'
               onChange={this.onEmailChange}
               required /><br />
            <button className= 'modalButton'
              onClick ={this.onEmailSearch}>
               Find my Friends!
             </button>
         </div>

    </div>
  )}
}

export default Search;
