import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../Components/Button';
import GameSetup from './GameSetup';

const Landing = () => {
  const [showGameSetup, setShowGameSetup] = useState(false);
  const navigate = useNavigate();
  const playOnlineHandler = () => {
    navigate('/game/online');
  };
  return (
    <Fragment>
      <Button primary onClick={playOnlineHandler}>Play online</Button>
      <Link to='/game/computer'>Play computer</Link>
      {showGameSetup && <GameSetup />}
    </Fragment>
  )
}

export default Landing;