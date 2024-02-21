import { useState } from 'react';
import './App.css';
import { End } from './components/end/End';
import { Game } from './components/game/Game';
import { Start } from './components/start/Start';

function App() {
  const [statusGame, setStatusGame] = useState(null);

  const handleChangeStatusGame = (status) => {
    setStatusGame(status);
  }

  let layout;

  switch (statusGame) {
    case 'playGame':
      layout = <Game/>
      break;
    case 'endGame':
      layout = <End/>
      break;
    default:
      layout = <Start onGame={handleChangeStatusGame}/>
      break;
  }

  return (
    <div className="App">
      {layout}
    </div>
  );
}

export default App;
