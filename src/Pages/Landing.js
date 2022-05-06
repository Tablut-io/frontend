import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Components/Button';

const Landing = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/game/computer');
  }
  return (
    <Fragment>
      <Button primary>Play online</Button>
      <Button onClick={onClickHandler}>Play computer</Button>
    </Fragment>
  )
}

export default Landing;