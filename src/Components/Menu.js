import styled from 'styled-components';

import { CloseIcon } from '../styled_components/userInterface';
import { PageLink } from "../styled_components/reactRouter";

const Wrapper = styled.div`
 height: 100%;
 width:100%;
 z-index: 10;
 position: absolute;
 top: 0;
 left: 0;
 background-color: ${props => props.theme.lightTheme ? 'white' : 'black'};
`


const Menu = ({ onClose }) => {
  return (
    <Wrapper>
      <PageLink onClick={() => onClose()} to="/about">About</PageLink>
      <PageLink onClick={() => onClose()} to="/rules">Rules</PageLink>
      <CloseIcon onClick={() => onClose()} />
    </Wrapper>
  )
};

export default Menu;