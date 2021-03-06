import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// 函数组件
// 如果你想写的组件只包含一个render方法，并且不包含state，那么使用函数组件更为简单。
function Square(props) {
  return (
    <button className="square"
      onClick={props.onClick}
      key={props.indexKey}
    >
      {props.value}
    </button>
  )
}
// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     }
//   }
//   render() {
//     return (
//       <button className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }
  
  class Board extends React.Component {
    renderSquare(i) {
      return(
        <Square 
          indexKey={i}
          value={this.props.squares[i]} 
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true
      }
    }
    handleClick(i) {
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if(calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] =this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext

      })
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      })
    }
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move ? 
        'Go to move #' + move :
        'Go to game start';
        return (
          <li>
      <button onClick={() => this.jumpTo(move)}>{desc}</button>  
          </li>  
        )
      })
      let status;
      if(winner) {
        status = 'Winner ' + winner 
      } else {
        status = 'Next player ' + (this.state.xIsNext ? 'X': '0') 
      }
      return (
        <div className="game">
          
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );

  // function tick() {
  //   const element = (
  //     <div>
  //       <h1>Hello world</h1>
  //   <h2>It is {new Date().toLocaleTimeString()}</h2>  
  //     </div> 
  //   )
  //   ReactDOM.render(element, document.getElementById('root'))
  // }
  // setInterval(tick, 1000)


  