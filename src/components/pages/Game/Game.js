// external imports
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// internal imports
import Board from './Board';
import PlayerInformation from './PlayerInformation';
import MoveRecord from './MoveRecord';
import Chat from './Chat';
import { SHOWMESSAGE } from '../../../utility/actionConstants';

// styled components
const GameContainer = styled.div`
  display: grid;
`
const GameId = styled.div`
`

const ServerMessage = styled.div`
  color: red;
`

// component responsible for managing the socket
// from here data received from the socket can send updates to respective components
// from here data will be sent over the socket to the server
const Game = ({ appState, dispatch, socket }) => {
  const navigate = useNavigate()
  const userId = appState.sessionInfo?.userId;
  const { state } = useLocation();
  const gameId = state?.gameId;
  const username = state?.username;

  // state
  const [positions, setPositions] = useState(Array.from(Array(11), () => new Array(11).fill(null)));
  const [attacker, setAttacker] = useState(null);
  const [defender, setDefender] = useState(null);
  const [turn, setTurn] = useState(null);
  const [serverMessage, setMessage] = useState(null);
  const [moves, setMoves] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('updated game state', ({ moves, positions, turn, attacker, defender }) => {
      setPositions(positions);
      setAttacker(attacker);
      setDefender(defender);
      setTurn(turn);
      setMessage(null);
      setMoves(moves);
    });
    socket.on('server message', (message) => {
      setMessage(message);
    });
    socket.on('game not found', () => {
      navigate('/');
    });
    socket.on('player message', (message) => {
      setMessages((prev) => {
        const newMessages = prev.slice();
        newMessages.push(message);
        return newMessages;
      });
    });
    socket.on('cannot join', (message) => {
      dispatch({ type: SHOWMESSAGE, message });
      navigate('/');
    });
    socket.emit('join game', { gameId, username });
  }, [dispatch, gameId, navigate, socket, username]);

  // event handlers
  let startPos;
  const handleDragStart = (position) => startPos = position;
  const handleDrop = (endPos) => socket.emit('make move', { startPos, endPos });
  const handleSend = (message) => socket.emit('player message', message);

  return (
    <GameContainer>
      <GameId>Game ID: {gameId}</GameId>
      {serverMessage && <ServerMessage>{serverMessage}</ServerMessage>}
      <PlayerInformation attacker={attacker} defender={defender} turn={turn} />
      <Board
        amDefender={defender?.userId === userId}
        turn={turn}
        positions={positions}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
      />
      <MoveRecord moves={moves} />
      <Chat onSend={handleSend} messages={messages} />
    </GameContainer>
  );
}

export default Game;