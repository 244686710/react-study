import React from 'react';
import ReactDOM from 'react-dom';
// 函数组件与class组件
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

function App() {
  return (
    <div>
      <Welcome name="Sufei" />
      <Welcome name="Yufei" />
      <Welcome name="Xufei" />
    </div> 
  )
}

// Props的只读性
// 组件无论是使用函数声明还说通过class申明，都决不能修改自身的props。
ReactDOM.render(<App />, document.getElementById('root'))