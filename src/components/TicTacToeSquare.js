
import { useState } from 'react';
import './TicTacToeSquare.css'

const TicTacToeSquare = ({owner, onValidClick, active, winning}) => {
  owner = owner ?? "?";
  const [hovering, setHovering] = useState(false);
  if (hovering && (owner !== "" || !active)) 
    setHovering(false);

  return (
    <div 
        className={
          hovering ? "TicTacToeSquare ClickMe" : 
          winning ? "TicTacToeSquare Winning" :
          "TicTacToeSquare" 
        }   
        onMouseEnter={() => setHovering(owner ===  "" && active)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => {
          if (owner === "" && active) {
            onValidClick()
          }
        }}
    >
      <p>{owner}</p>
    </div>
  );
}


export default TicTacToeSquare;