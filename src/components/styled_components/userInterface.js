import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? 'rgb(127, 166, 80, 0.85)' : 'rgb(255, 255, 255, 0.85)'};
  color: ${props => props.primary ? 'white' : 'gray'};
  font-size: ${props => props.large ? '1.4em' : '1em'};
  margin: 0.5em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  width: fit-content;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
  &:hover {
    background: ${({primary}) => primary ? 'rgb(127, 166, 80, 1)' : 'rgb(255, 255, 255, 1)'};
    box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: ${props => props.theme.lightTheme ? 'black' : 'white'};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`

const ThemeToggle = styled.button`
  height: 2rem;
  width: 2rem;
  background-color: ${props => props.theme.lightTheme ? 'white' : 'black'};
  border-radius: 0.5rem;
  cursor: pointer;
`

export { Button, CloseIcon, ThemeToggle };