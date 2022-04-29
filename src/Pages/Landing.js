import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Components/Button';

const Landing = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    console.log('clicked');
    navigate('/game/new');
  }
  return (
    <Fragment>
      <Button primary onClick={onClickHandler}>Create game</Button>
      <Button>Join game</Button>
    </Fragment>
  )
}

export default Landing;