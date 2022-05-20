// external imports
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// internal imports
import Board from '../components/Board';
import { Button } from '../styled_components/userInterface';
// styled components
const GameContainer = styled.div`
`
const PlayerContainer = styled.div`
`

// component responsible for managing the socket
// from here data received from the socket can send updates to respective components
// from here data will be sent over the socket to the server
const Game = ({ socket }) => {
  const [positions, setPositions] = useState(Array.from(Array(11), () => new Array(11).fill(null)));
  const [attacker,] = useState(null);
  const [defender,] = useState(null);
  useEffect(() => {
    socket.on('updated game state', ({ positions, players, turn }) => {
      setPositions(positions);
    });
    socket.emit('initialize game');
  }, [socket]);

  const handleJoin = (side) => {
    socket.emit('join side', side);
  };

  return (
    <GameContainer>
      <PlayerContainer>
        <div>
          Attacker:{attacker || <Button onClick={() => handleJoin('attacker')}>Join</Button>}
        </div>
        <div>vs.</div>
        <div>
          Defender:{defender || <Button onClick={() => handleJoin('defender')}>Join</Button>}
        </div>
      </PlayerContainer>
      <Board positions={positions} />
    </GameContainer>
  );
}

export default Game;