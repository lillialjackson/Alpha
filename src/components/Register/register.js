import React from 'react';
import './register.css'

class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      username: ''
    };
  }

  onUsernameChange = (event) => {
    console.log("Detected a username change!!!")
    this.setState({username: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3002/register',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user){
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      } else{
        alert('Could not register user!');
      }
    })
  }

  render(){
    const {onRouteChange} = this.props;
  return (
    // begin registration form
      <div className = 'form'>

        <h1> Setup Your Profile! </h1>

          <div className = 'basicinfo'>
           Pick a Profile Picture : <input name="myFile" type="file" />
          <div> <br />
          {/* include later error alert if username is not unique in DB */}
            <label htmlFor="username"> Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange = {this.onUsernameChange}
              required
              />
              <br />
              <label htmlFor="email"> Email: </label>
              <input type="email" name="email"
                onChange = {this.onEmailChange} required /><br />
              <label htmlFor="password">Password: </label>
              <input type="password" name="psw" id = 'password'
                 onChange = {this.onPasswordChange} required /> <br />
           </div>
          <div>
            {/* will want interactive location api */}
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              name="location"
              id="location"
              />
          </div> <br />


          <div>
            <label htmlFor="experience"> Experience Level: </label>
            <select>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="advanced+">Advanced+</option>
            </select>
          </div><br />

          <div>
            <label htmlFor="bio"> Bio: </label> <br />
            <textarea rows="5" cols="50" placeholder="Tell when, what, who, why you love climbing!"></textarea>
          </div>
        </div>
          <div>
            <h2> Preferences </h2>
            <div>
              <label htmlFor="Trad"> Trad: </label>
              <select>
                <option value="experieneced">Experienced</option>
                <option value="intermediate">Intermediate</option>
                <option value="beginner">Beginner</option>
                <option value="interested">Interested</option>
                <option value="notmything">Not My Thing</option>
              </select>
            </div><br />
            <div>
              <label htmlFor="sport">Sport: </label>
              <select>
                <option value="experieneced">Experienced</option>
                <option value="intermediate">Intermediate</option>
                <option value="beginner">Beginner</option>
                <option value="interested">Interested</option>
                <option value="notmything">Not My Thing</option>
              </select> <br />
              <input type="checkbox" name="indoor" /> Indoor
              <input type="checkbox" name="outdoor" /> Outdoor
            </div><br />
            <div>
              <label htmlFor="bouldering">Bouldering: </label>
              <select>
                <option value="experieneced">Experienced</option>
                <option value="intermediate">Intermediate</option>
                <option value="beginner">Beginner</option>
                <option value="interested">Interested</option>
                <option value="notmything">Not My Thing</option>
              </select> <br />
              <input type="checkbox" name="indoor" /> Indoor
              <input type="checkbox" name="outdoor" /> Outdoor
            </div> <br />
            <div>
              <label htmlFor="toprope"> Top Rope: </label>
              <select>
                <option value="experieneced">Experienced</option>
                <option value="intermediate">Intermediate</option>
                <option value="beginner">Beginner</option>
                <option value="interested">Interested</option>
                <option value="notmything">Not My Thing</option>
              </select> <br />
              <input type="checkbox" name="indoor" /> Indoor
              <input type="checkbox" name="outdoor" /> Outdoor
            </div> <br />
          </div>
          <div>
            <h2> Knowledgable in Safety Techniques </h2>
            <label htmlFor="belay">Belay: </label>
            <select>
              <option value="toprope">Top Rope</option>
              <option value="lead">Lead</option>
              <option value="both">Both</option>
            </select> <br />
            Spot: <input type="checkbox" name="spot" /> <br />
            <label htmlFor="othertech">Other: </label>
            <input
              type="text"
              name="othertech"
              id="othertech"
              placeholder="other techniques"
              />
          </div>
          <div className='gearitems'>
            <h2> Gear </h2>
            <input type="checkbox" name="harness" />  Harness<br />
            <input type="checkbox" name="shoes" />  Shoes<br />
            <input type="checkbox" name="belayDevice" /> Belay Device:
              <input
                type="text"
                name="typeOfDevice"
                id="typeOfDevice"
                placeholder="type?"
                /> <br />
            <input type="checkbox" name="pas" />  PAS<br />
            <input type="checkbox" name="lockers" /> Lockers:
              <input type="number" name="lockers" min="1" max="15" /> <br />

            <input type="checkbox" name="quickdraws" /> Quickdraws:
              <input type="number" name="quickdraws" min="1" max="30" /><br />
            <input type="checkbox" name="rope" /> Rope:
              <input
                type="text"
                name="rope"
                id="rope"
                placeholder="length, condition..."
                /><br />
            <input type="checkbox" name="tradrack" /> Trad Rack:
              <input
                type="text"
                name="tradrack"
                id="tradrack"
                placeholder="list your pieces..."
                /> <br />
                <div>
                  <button onClick ={this.onSubmitSignIn} className= 'button'> Submit </button>
                  {/* <input className= 'button' type='reset' /> */}
                </div>

          </div>


      </div>




  )

}



}
export default Register;
