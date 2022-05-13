import styled from 'styled-components';

const Button = styled.button`
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

export { Button };