// external imports
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

// internal imports
import Board from '../Components/Board';
import { SocketContext } from '../Context/SocketContext';

// constants
const GameContainer = styled.div`
`
const Game = () => {
  const [positions, setPositions] = useState(Array.from(Array(11), () => new Array(11).fill(null)));
  const socket = useContext(SocketContext);
  useEffect(() => {
    socket.connect();
    socket.on('update positions', (newPositions) => {
      setPositions(newPositions);
    });
    return () => {
      socket.disconnect();
    }
  }, [socket])

  return (
    <GameContainer>
      <Board positions={positions}/>
    </GameContainer>
  )
}

export default Game;