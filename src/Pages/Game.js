// external imports
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

// internal imports
import Board from '../components/Board';
import { SHOWENTERUSERNAME } from '../utility/actionConstants';
import Context from '../utility/context';
import { Button } from '../styled_components/userInterface';
// styled components
const GameContainer = styled.div`
`
const PlayerContainer = styled.div`
`

// component responsible for managing the socket
// from here data received from the socket can send updates to respective components
// from here data will be sent over the socket to the server
const Game = ({ state, dispatch }) => {
  const [positions, setPositions] = useState(Array.from(Array(11), () => new Array(11).fill(null)));
  const [attacker, ] = useState(null);
  const [defender, ] = useState(null);
  const [turn, ] = useState(null);
  // const [state, dispatch] = useContext(Context);
  const socket = state.socket;
  useEffect(() => {
    if (!socket.auth) {
      dispatch({ type: SHOWENTERUSERNAME });
    } else if (!socket.connected) {
      console.log('connecting...', socket)
      socket.connect();
      socket.emit('initialize game');
    }
    socket.on('updated game state', (gameState) => {
      setPositions(gameState.positions);
    });
  }, [socket.auth])
  useEffect(() => {
    return () => {
      console.log('hmm')
      socket.disconnect();
    }
  }, [])
  return (
    <GameContainer>
      <Button onClick={() => socket.emit('hello')}>Say hello to server</Button>
      <PlayerContainer>
        Attacker: || Defender: 
      </PlayerContainer>
      <Board positions={positions}/>
    </GameContainer>
  )
}

export default Game;