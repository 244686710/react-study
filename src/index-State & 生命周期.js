import React from 'react';
import ReactDOM from 'react-dom';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}。</h2>
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  // 挂载 mount
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }
  
  // 卸载 unmount
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date}/>
      </div> 
    )
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root') 
)


