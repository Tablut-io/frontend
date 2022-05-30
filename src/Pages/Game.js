// external imports
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// internal imports
import Board from '../components/Board';
import PlayerContainer from '../components/PlayerContainer';


// styled components
const GameContainer = styled.div`
`
// component responsible for managing the socket
// from here data received from the socket can send updates to respective components
// from here data will be sent over the socket to the server
const Game = ({ socket, appState }) => {
  const navigate = useNavigate()
  const userId = appState.sessionInfo?.userId;
  const { state } = useLocation();
  const gameId = state?.gameId;

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
    socket.on('game not found', () => navigate('/'));
    socket.emit('join game', gameId);
  }, [socket, gameId, navigate]);

  const handleJoin = (side) => {
    socket.emit('join side', side);
  };

  let startPos;
  const handleDrop = (endPos) => {
    socket.emit('make move', { startPos, endPos });
  };

  return (
    <GameContainer>
      <div>{gameId}</div>
      <PlayerContainer />
      <Board
        amDefender={defender?.userId === userId}
        turn={turn}
        positions={positions}
        onDragStart={(position) => startPos = position}
        onDrop={handleDrop}
      />
    </GameContainer>
  );
}

export default Game;