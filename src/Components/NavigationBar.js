import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: gray;
  height: 4em;
  display: flex;
  align-items: center;
  padding-left: 1em;
`
const StyledH1 = styled.h1`
  color: white;
`

const NavigationBar = () => {
  return (
    <StyledHeader>
      <StyledH1><Link to="/">Tablut.io</Link></StyledH1>
    </StyledHeader>
  )
}

export default NavigationBar;