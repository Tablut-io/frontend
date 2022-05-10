import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';

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
  return (
    <Fragment>
      <StyledHeader>
        <StyledH1><Link to="/">Tablut.io</Link></StyledH1>
        <div>
          <Button>About</Button>
          <Button>Rules</Button>
        </div>
      </StyledHeader>
    </Fragment>
  )
}

export default NavigationBar;