import React from 'react'
import e from '../event-bus'

export default class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name:"",
      password:"",
      display: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  sendMessage(){
    e.emit('message', { text: 'loggedIn' })
    this.setState({display: false});
  }

  render() {
    return (
      <div style={{marginTop: '10px'}}>
       {this.state.display &&
        <div>
        <h1>Sign in</h1>

        <p>
          <div>
            Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div>
            Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
          </div>

          <button onClick={this.sendMessage}>
            Login
          </button>
        </p>
        </div>
        }
      </div>
    )
  }
}
