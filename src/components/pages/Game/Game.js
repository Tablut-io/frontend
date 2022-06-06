// external imports
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// internal imports
import Board from './Board';
import PlayerContainer from './PlayerContainer';
import MoveRecord from './MoveRecord';


// styled components
const GameContainer = styled.div`
`
const GameId = styled.div`
  font-family: sans-serif;
`

const Message = styled.div`
  color: red;
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
  const [message, setMessage] = useState(null);
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    socket.on('updated game state', ({ moves, positions, turn, attacker, defender }) => {
      setPositions(positions);
      setAttacker(attacker);
      setDefender(defender);
      setTurn(turn);
      setMessage(null);
      setMoves(moves);
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
      <GameId>Game ID: {gameId}</GameId>
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
      <MoveRecord moves={moves} />
    </GameContainer>
  );
}

export default Game;