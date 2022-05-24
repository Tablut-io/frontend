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
const Game = ({ socket, state }) => {
  const userId = state.sessionInfo?.userId;
  const [positions, setPositions] = useState(Array.from(Array(11), () => new Array(11).fill(null)));
  const [attacker, setAttacker] = useState(null);
  const [defender, setDefender] = useState(null);
  const [turn, setTurn] = useState(null);
  useEffect(() => {
    socket.on('updated game state', ({ positions, turn, attacker, defender }) => {
      setPositions(positions);
      setAttacker(attacker);
      setDefender(defender);
      setTurn(turn);
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
          {turn === 'attacker' ? '(Turn)' : null}
          Attacker:{attacker?.username || defender?.userId === userId || <Button onClick={() => handleJoin('attacker')}>Join</Button>}
          {attacker?.userId === userId && <Button>Leave</Button>}
        </div>
        <div>vs.</div>
        <div>
          {turn === 'defender' ? '(Turn)' : null}
          Defender:{defender?.username || attacker?.userId === userId || <Button onClick={() => handleJoin('defender')}>Join</Button>}
          {defender?.userId === userId && <Button>Leave</Button>}
        </div>
      </PlayerContainer>
      <Board amDefender={defender?.userId === userId} turn={turn} positions={positions} />
    </GameContainer>
  );
}

export default Game;