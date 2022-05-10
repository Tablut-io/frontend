// external imports
import { useState } from 'react';
import styled from 'styled-components';

// internal imports
import Board from '../Components/Board';

// constants
const GameContainer = styled.div`
`
const Game = () => {
  const [positions, setPositions] = useState(Array.from(Array(11), () => new Array(11).fill(null)));

  return (
    <GameContainer>
      <Board positions={positions}/>
    </GameContainer>
  )
}

export default Game;