import React from 'react';
import ReactDOM from 'react-dom';

/*
  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({
        value: event.target.value.toUpperCase()
      })
    }

    handleSubmit(event) {
      alert('提交的名字：' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            名字：
            <input type="text" value={this.state.value} onChange={this.handleChange} /> 
          </label>
          <input type="submit"  value="提交" />
        </form>
      )
    }
  }

  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  )

*/ 
// 处理多个输入
// 当需要处理多个 input 元素是，我们可以给每个元素添加 name 属性，并让处理函数根据
// event.target.name 的值选着要执行的操作
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与：
          <input 
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          来宾人数：
          <input name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    )
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
)