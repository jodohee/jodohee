import Board from "./Borad";

import { useState } from 'react';
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}


function App(){

  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };


  return(
   
<div class="App">
      <div>
        <img class="App-logo" src="logo.png" alt="주사위게임 로고" />
        <h1 class="App-title">주사위게임</h1>
        <div>
          <button class="Button blue App-button" onClick={handleRollClick}>던지기</button>
          <button class="Button red App-button"onClick={handleClearClick}>처음부터</button>
        </div>
        
      </div>
      <div class="App-boards">
        <div class="Board App-board">
          <Board name="나" color="blue"  gameHistory={myHistory} />
        </div>
        <div class="Board App-board">
         <Board name="상대" color="red" gameHistory={otherHistory} />
        </div>
      </div>
    </div>

  );

}

export default App;