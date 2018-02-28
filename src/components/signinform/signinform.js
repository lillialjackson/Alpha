import React from 'react';
import './signinform.css';


class SignInForm  extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3002/signin',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id){
        this.props.loadUser(user);
        return this.props.onRouteChange('home');
      } else {
        alert('Error logging in!');
      }
    })
  }
  // must change to submit info to server

  render(){
    const {onRouteChange} = this.props;
    return(
      <div>
          <div className = 'form signInModal'>
            <p> Sign In </p>
              <div>
                  <label htmlFor="email"> Email: </label>
                  <input type="email" name="email" id = 'email'
                    onChange ={this.onEmailChange} required /><br />
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="psw" id="password"
                      onChange ={this.onPasswordChange} required /> <br />
                  <button className= 'modalButton' onClick={this.onSubmitSignIn} >
                    Submit </button>
                </div>
                </div>
              </div>
            )
          }
}

export default SignInForm;
