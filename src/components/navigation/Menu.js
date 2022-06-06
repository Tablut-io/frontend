import styled from 'styled-components';

import { CloseIcon } from '../styled_components/userInterface';
import { PageLink } from "../styled_components/reactRouter";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  height: 100%;
  width:100%;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.lightTheme ? '#d7d7d7' : '#383838'};
`


const Menu = ({ onClose }) => {
  return (
    <Wrapper>
      <CloseIcon onClick={() => onClose()} />
      <PageLink onClick={() => onClose()} to='/'>Home</PageLink>
      <PageLink onClick={() => onClose()} to="/about">About</PageLink>
      <PageLink onClick={() => onClose()} to="/rules">Rules</PageLink>
    </Wrapper>
  )
};

export default Menu;