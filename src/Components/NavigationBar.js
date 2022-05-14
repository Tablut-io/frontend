import styled from 'styled-components';

import { PageLink } from '../styled_components/reactRouter';
import { Button } from '../styled_components/userInterface';
import { SHOWENTERUSERNAME } from '../utility/actionConstants';

const Header = styled.header`
  background-color: gray;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
`

const NavigationBar = ({ username, dispatch }) => {
  return (
    <Header>
      <PageLink to="/">Tablut.io</PageLink>
      <div>
        <PageLink to="/about">About</PageLink>
        <PageLink to="/rules">Rules</PageLink>
        {<Button onClick={() => dispatch({type: SHOWENTERUSERNAME })}>username:{username}</Button>}
      </div>
    </Header>
  )
}

export default NavigationBar;