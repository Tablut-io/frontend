import { Button } from '../styled_components/userInterface';
import { SHOWGAMESETUP, SHOWJOINGAME } from '../utility/actionConstants';

const Landing = ({ dispatch }) => {
  const handleJoinGame = () => {
    dispatch({ type: SHOWJOINGAME });
  };
  const handleCreateGame = () => {
    dispatch({ type: SHOWGAMESETUP });
  };

  return (
    <>
      <Button primary onClick={handleCreateGame}>Create game</Button>
      <Button onClick={handleJoinGame}>Join game by ID</Button>
    </>
  )
};

export default Landing;