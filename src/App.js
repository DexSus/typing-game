import { useEffect, useState } from 'react';
import './App.css';
import { End } from './components/end/End';
import { Game } from './components/game/Game';
import { Start } from './components/start/Start';

function App() {
  const [statusGame, setStatusGame] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
      if(statusGame === 'playGame') {
        setScore({
          right: 0,
          wrong: 0
        });

        const timeOutGame = setTimeout(() =>{
          setStatusGame('endGame')
        }, 60000);

        return () => clearTimeout(timeOutGame);
      }
    }, [statusGame])

  const handleChangeStatusGame = (status) => {
    setStatusGame(status);
  }

  const handleChangeScore = (type) => {
    if(type === 'right') {
      setScore({
        ...score,
        right: score.right + 1
      });
    } else {
      setScore({
        ...score,
        wrong: score.wrong + 1
      });
    }
  }

  let layout;

  switch (statusGame) {
    case 'playGame':
      layout = <Game onChangeScore={handleChangeScore}/>
      break;
    case 'endGame':
      layout = <End score={score} onGame={handleChangeStatusGame}/>
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
