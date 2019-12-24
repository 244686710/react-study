import React from 'react';
import ReactDOM from 'react-dom';
// 组合 vs 继承
// React 有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用。
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
        <h1 className="Dialog-title">
            Welcome
        </h1>
        <p className="Dialog-message">
            Thank you for visiting our spacecraft!
        </p>
        </FancyBorder>
    );
}
ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
)