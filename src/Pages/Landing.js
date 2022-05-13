import { PageLink } from '../styled_components/reactRouter';
import { Button } from '../styled_components/userInterface';
import { SHOWGAMESETUP, SHOWJOINGAME } from '../utility/actionConstants';

const Landing = ({ dispatch }) => {
  const handleJoinGame = () => {
    dispatch({ type: SHOWJOINGAME });
  };
  return (
    <>
      <PageLink to='/game'>Create game</PageLink>
      <Button onClick={handleJoinGame}>Join game</Button>
    </>
  )
}

export default Landing;