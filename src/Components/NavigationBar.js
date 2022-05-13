import styled from 'styled-components';

import { PageLink } from '../styled_components/reactRouter';

const Header = styled.header`
  background-color: gray;
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
`

const NavigationBar = () => {
  return (
    <Header>
      <PageLink to="/">Tablut.io</PageLink>
      <div>
        <PageLink to="/about">About</PageLink>
        <PageLink to="/rules">Rules</PageLink>
      </div>
    </Header>
  )
}

export default NavigationBar;