import React from 'react';
import ReactDOM from 'react-dom';
// key 
// key 帮助 React 识别哪些元素改变了，比如添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。
function ListItem(props) {
  const value = props.value;
  return (
    // 错误！你不需要再这里制定 key:
    // <li key={value.toString()}>
    //   {value}
    // </li>
  <li>{value}</li>
  )
}

function NumberList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) => 
    // 错误！ 元素的 key 应该在这里指定：
    // <ListItem value={number} /> 
    <ListItem 
      key={number.toString()}  
      value={number} 
    />
  )
  return (
    <ul>
      {listItems}
    </ul>
  )
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
)