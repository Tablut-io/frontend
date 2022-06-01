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

const Message = styled.div`
  color: red;
`
// component responsible for managing the socket
// from here data received from the socket can send updates to respective components
// from here data will be sent over the socket to the server
const Game = ({ dispatch, socket, appState }) => {
  const navigate = useNavigate()
  const userId = appState.sessionInfo?.userId;
  const { state } = useLocation();
  const gameId = state?.gameId;

  const [positions, setPositions] = useState(Array.from(Array(11), () => new Array(11).fill(null)));
  const [attacker, setAttacker] = useState(null);
  const [defender, setDefender] = useState(null);
  const [turn, setTurn] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    socket.on('updated game state', ({ positions, turn, attacker, defender }) => {
      setPositions(positions);
      setAttacker(attacker);
      setDefender(defender);
      setTurn(turn);
      setMessage(null);
    });
    socket.on('message', (message) => {
      setMessage(message)
    });
    socket.on('game not found', () => {
      navigate('/');
    });
    socket.emit('join game', { gameId });
  }, [socket, gameId, navigate]);

  let startPos;
  const handleDrop = (endPos) => {
    socket.emit('make move', { startPos, endPos });
  };

  return (
    <GameContainer>
      <div>Game ID: {gameId}</div>
      <div>{attacker?.username} vs. {defender?.username}</div>
      {message && <Message>{message}</Message>}
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