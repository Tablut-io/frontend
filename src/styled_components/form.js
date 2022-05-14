import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'black' : 'papayawhip'};
  border-radius: 3px;
  border: 1px solid black;
  transition: all 150ms;
  margin-left: 2px;
`;

const Label = styled.label`
  align-items: center;
`;
const TextInput = styled.input.attrs({ type: 'text'})`
  border: 1px solid black;
`;
const Submit = styled.input.attrs({ type: 'submit' })`
  border: 1px solid black;
  cursor: pointer;
`;

export { Checkbox, Label, TextInput, Submit };