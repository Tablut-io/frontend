import styled from 'styled-components';

import { PageLink } from '../styled_components/reactRouter';
import { Button, ThemeToggle } from '../styled_components/userInterface';
import { SHOWENTERUSERNAME, TOGGLETHEME } from '../utility/actionConstants';
import socket from '../utility/socket';

const Header = styled.header`
  background-color: gray;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
`

const NavigationBar = ({ username, dispatch }) => {
  console.log('username', username)
  return (
    <Header>
      <PageLink to="/">Tablut.io</PageLink>
      {!socket.connected && <div>NOT CONNECTED TO SERVER</div>}
      <div>
        <ThemeToggle onClick={() => dispatch({type: TOGGLETHEME })} />
        <PageLink to="/about">About</PageLink>
        <PageLink to="/rules">Rules</PageLink>
        {<Button onClick={() => dispatch({type: SHOWENTERUSERNAME })}>username:{username}</Button>}
      </div>
    </Header>
  )
}

export default NavigationBar;