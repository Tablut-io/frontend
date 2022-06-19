import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Menu from './Menu';
import { PageLink } from '../styled_components/reactRouter';
import GithubLink from './GithubLink';
import socket from '../../utility/socket';

const Header = styled.header`
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: rgb(0, 50, 0);
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
`;
const Icon = styled.img.attrs({
  height: '34rem',
  width: '35rem',
})`
`
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`
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
  font-family: norse-kawl;
  background: 'gray';
  color: ${props => props.primary ? 'white' : 'white'};
  font-size: 2.5rem;
  cursor: pointer;
  margin-left: 1rem;
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
      <LeftContainer>
        <Icon src='images/icons8-viking-helmet-96.png' />
        <HomeLink to="/">Tablut.io</HomeLink>
      </LeftContainer>
      {!socket.connected && <div>connecting...</div>}
      <RightContainer>
        <DesktopOnly>
          {/* <PageLink to="/rules">Rules</PageLink> */}
          <GithubLink />
        </DesktopOnly>
      </RightContainer>
      {showMenu && <Menu onClose={() => setShowMenu(false)}/>}
    </Header>
  )
}

export default NavigationBar;