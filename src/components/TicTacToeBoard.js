
import TicTacToeSquare from './TicTacToeSquare'

import Center from './util/Center';
import './TicTacToeBoard.css';
import { useState } from 'react';

const TicTacToeBoard = () => {
  const N = 3;
  const [winner, setWinner] = useState("")
  const [board, setBoard] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  const [currPlayer, setCurrPlayer] = useState("X");
  let [killSquares, setKillSquares] = useState([]);

  let squares = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let kill = false;
      for (const [x, y] of killSquares) {
        if (x === i && y === j)
          kill = true;
      }
      squares.push(<TicTacToeSquare 
        key={3*i + j} 
        active={winner === ""} 
        owner={board[i][j]} 
        onValidClick={() => makeMoveAt(i, j)}
        winning={kill}
      />);
    }
  }

  let emptySquares = 0;
  for (const row of board)
    for (const item of row)
      if (item === "")
        emptySquares++;


  let message = (winner !== "") ? `${winner} won!` :
    (emptySquares === 0) ? `It's a draw` :
    `${currPlayer}'s turn`;

  const makeMoveAt = (x, y) => {
    const lines = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[2, 0], [1, 1], [0, 2]],
    ];

    let newBoard = [...board];
    newBoard[x][y] = currPlayer; // TODO
    setBoard(newBoard);
    setCurrPlayer((currPlayer === "X") ? "O" : "X");

    for (const [[i1, j1], [i2, j2], [i3, j3]] of lines) {
      if (board[i1][j1] === "")
        continue;
      if (board[i1][j1] === board[i2][j2] && board[i2][j2] === board[i3][j3]) {
        setWinner(board[i1][j1]);
        killSquares = [...killSquares, [i1, j1], [i2, j2], [i3, j3]];
        setKillSquares([...killSquares]);
      }
    }
  };

  return (
    <div className='TicTacToeBoard'>
      <div className='TicTacToeGrid'>
        {squares}
      </div>
      <div className='TicTacToeFooter'>
        <Center>
          {message}
        </Center>
        <br/>
        <Center>
          <button onClick={() => {
            setCurrPlayer("X");
            setBoard([["", "", ""], ["", "", ""], ["", "", ""]]);
            setWinner("");
            setKillSquares([]);
          }}>
            New Game
          </button>
        </Center>
      </div>
    </div>
  )
}

export default TicTacToeBoard;