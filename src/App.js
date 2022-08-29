import './App.css';
import TicTacToeBoard from './components/TicTacToeBoard';

function App() {
  return (
    <div className='App-outer'>
      <div className='App-header'> 
        <p>Welcome to Tic Tac Toe</p>
      </div>
      <div className='App-inner'>
        <TicTacToeBoard/>
      </div>
    </div>
  );
}

export default App;
