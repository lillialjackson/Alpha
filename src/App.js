import React, { Component } from 'react';
// import Navigation from './components/Navigation/navigation.js';
import SignInForm from './components/signinform/signinform.js';
import SignIn from './components/SignIn/signin.js';
import Register from './components/Register/register.js';
import FindAPartner from './components/FindAPartner/findapartner.js';
import Home from './components/home/home.js';
import './App.css';
import * as SendBird from 'sendbird';




 const sb = new SendBird({'appId': process.env.SENDBIRD_API_KEY});

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      input : '',
      route: 'signin',
      isSignedIn: false,
      user: {
        // id: '',
        username: '',
        email:'',
        joined: ''
      }
    }
  }

/* connecting to server
  componentDidMount() {
    fetch('http://localhost:3002')
      .then(response => response.json())
      .then(console.log)
  }
*/

loadUser = (data) => {
  this.setState({user: {
    // id: data.id,
    username: data.username,
    email: data.email,
    joined: data.joined
  }})
}

// form change functions
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

// begin render
  render() {
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
          <header className="App-header">
            <SignIn isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange} />
            <h1 className="App-title"><span className = 'alpha'>α</span>lpha</h1>
          </header>
          <h4 className="App-intro">
            Welcome to Alpha for Beta.
          </h4>

          {this.state.route === 'home'
            ? <div>
              <Home />
              <FindAPartner />
                <div className = 'sendBirdChat'>
                  <div id="sb_chat"></div>
                </div>
            </div>
            : (
              route === 'signin'
              ? <SignInForm loadUser={this.loadUser} onRouteChange = {this.onRouteChange} />
              : <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange} />
            )
          }

         <script src="SendBird.min.js"></script>
        <script src="build/liveChat.SendBird.js"></script>
      </div>
    );
  }
}

export default App;
