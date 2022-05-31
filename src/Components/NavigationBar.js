import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Menu from './Menu';
import { PageLink } from '../styled_components/reactRouter';
import socket from '../utility/socket';

const Header = styled.header`
  background-color: gray;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
`;
const RightContainer = styled.div`
  display: flex;
`;
const DesktopOnly = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 400px) {
    display: none;
  };
`;
const Bar = styled.div`
  height: 0.5em;
  width: 4em;
  background-color: black;
`;
const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 3em;
  @media screen and (min-width: 400px) {
    display: none;
  };
`;
const HomeLink = styled(Link)`
  background: 'gray';
  color: ${props => props.primary ? 'white' : 'white'};
  font-size: 1.5em;
  margin: 0.5em;
  padding: 0.25em 1em;
  cursor: pointer;
  width: fit-content;
  border-radius: 10px;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  @media screen and (max-width: 400px) {
    display: none;
  };
`;

const NavigationBar = ({ username, dispatch }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Header>
      <MenuIcon onClick={() => setShowMenu(true)}>
        <Bar />
        <Bar />
        <Bar />
      </MenuIcon>
      <HomeLink to="/">Tablut.io</HomeLink>
      {!socket.connected && <div>SERVER OFFLINE</div>}
      <RightContainer>
        <DesktopOnly>
          <PageLink to="/about">About</PageLink>
          <PageLink to="/rules">Rules</PageLink>
        </DesktopOnly>
      </RightContainer>
      {showMenu && <Menu onClose={() => setShowMenu(false)}/>}
    </Header>
  )
}

export default NavigationBar;