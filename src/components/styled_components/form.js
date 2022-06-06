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
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  align-items: center;
`;
const TextInput = styled.input.attrs({ type: 'text'})`
  margin: 10px 0px;
  background: gray;
  border-radius: 3px;
`;
const Submit = styled.input.attrs({ type: 'submit' })`
  background: green;
  color: white;
  font-size: 1em;
  margin: 0.5em 0;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  width: fit-content;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;
const Select = styled.select`
  background-color: gray;
`
const Option = styled.option`
  background-color: gray;
`
export { Checkbox, Form, Label, Option, TextInput, Select, Submit };