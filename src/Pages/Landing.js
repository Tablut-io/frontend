import { useNavigate } from 'react-router-dom';

import { Button } from '../styled_components/userInterface';
import { SHOWJOINGAME } from '../utility/actionConstants';

const Landing = ({ dispatch, socket }) => {
  const navigate = useNavigate();
  const handleJoinGame = () => {
    dispatch({ type: SHOWJOINGAME });
  };
  const handleCreateGame = () => {
    socket.emit('initialize game');
    socket.on('game initialized', (gameId) => {
      navigate(`/game/${gameId}`);
    });
  };
  return (
    <>
      <Button onClick={handleCreateGame}>Create game</Button>
      <Button onClick={handleJoinGame}>Join game</Button>
    </>
  )
};

export default Landing;