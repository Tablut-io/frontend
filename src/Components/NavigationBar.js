import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const StyledHeader = styled.header`
  background-color: gray;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
`
const StyledH1 = styled.h1`
  color: white;
`

const NavigationBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleOnClickLogin = () => {
    setShowLogin(true);
  };

  const handleOnClickSignUp = () => {
    setShowSignUp(true);
  };

  return ReactDOM.createPortal(
    <Fragment>
      <StyledHeader>
        <StyledH1><Link to="/">Tablut.io</Link></StyledH1>
        <div>
          <Button onClick={handleOnClickSignUp}>Sign up</Button>
          <Button onClick={handleOnClickLogin}>Login</Button>
        </div>
      </StyledHeader>
      {showLogin && <Login />}
      {showSignUp && <SignUp />}
    </Fragment>
  , document.getElementById('modal-root'))
}

export default NavigationBar;