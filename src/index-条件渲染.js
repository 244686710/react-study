import React from 'react';
import ReactDOM from 'react-dom';

/*
function UserGreeting(props) {
  return <h1>Welcome back!</h1> 
}

function GuesGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuesGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login     
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

function Mailbox(props) {
  const unreadMessage = props.unreadMessage;
  return (
    <div>
      <h1>Hello !</h1>
      {unreadMessage.length > 0 && 
        <h2>
          You have {unreadMessage.length} unread messages.
        </h2>
      }
    </div>
  )
}

const messages = ['React', 'Re React']

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false}
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <Mailbox unreadMessage={messages}/>
      </div>
    )
  }
}

*/
// 阻止组件渲染
function WarningBanner(props) {
  if(!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }
  handleToggleClick() {
    this.setState( state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}          
        </button>
      </div>
    )
  }
}
ReactDOM.render(
  <Page />,
  document.getElementById('root')
)
