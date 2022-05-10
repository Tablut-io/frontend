import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.header`
  background-color: gray;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
`

const NavigationBar = () => {
  return (
    <StyledHeader>
      <Link to="/">Tablut.io</Link>
      <div>
        <Link to="/about">About</Link>
        <Link to="/rules">Rules</Link>
      </div>
    </StyledHeader>
  )
}

export default NavigationBar;