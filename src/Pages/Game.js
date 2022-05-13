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
const Game = ({ state }) => {
  const [positions,] = useState(Array.from(Array(11), () => new Array(11).fill(null)));
  const [attacker, ] = useState(null);
  const [defender, ] = useState(null);
  // const [, ] = useState(null);
  const socket = state.socket;
  useEffect(() => {
  }, [])
  return (
    <GameContainer>
      <Button onClick={() => socket.emit('hello')}>Say hello to server</Button>
      <PlayerContainer>
        <div>
          Attacker:{attacker || <Button>Join</Button>}
        </div>
        <div>vs.</div>
        <div>
          Defender:{defender || <Button>Join</Button>}
        </div>
      </PlayerContainer>
      <Board positions={positions}/>
    </GameContainer>
  )
}

export default Game;