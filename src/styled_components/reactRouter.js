import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageLink = styled(Link)`
  background: ${props => props.primary ? "gray" : "white"};
  color: ${props => props.primary ? "white" : "gray"};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
  cursor: pointer;
  width: fit-content;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

const StyledNavLink = styled(NavLink)`
`

export { PageLink, StyledNavLink };