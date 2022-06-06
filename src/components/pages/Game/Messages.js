import { useState } from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  background-color: white;
  min-width: 100px;
  min-height: 100px;
  border: 1px solid black;  
  color: black;
`
const OrderedList = styled.ol`
  height: 100%;
`;

const Message = styled.li`
`;

const Form = styled.form`
`;

const TextInput = styled.input.attrs({ type: 'text'})`
  color: black;
  border: 1px solid black;
`;

const Submit = styled.input.attrs({ type: 'submit' })`
  color: black;
`;

const Messages = ({ messages, onSend }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) =>  {
    setMessage(event.target.value);
  }
  const handleSubmit = (event) => {
    if (message !== '') onSend(message);
    setMessage('');
    event.preventDefault();
  };

  return (
    <MessageContainer>
      messages
      <OrderedList>
        {messages.map((message, i) => {
          return (<Message key={i}>
                    {message.username + ': ' + message.message}
                  </Message>)}
        )}
      </OrderedList>
      <Form onSubmit={handleSubmit}>
        <TextInput placeholder='Enter message' onChange={handleChange} value={message} />
        <Submit value='Send' />
      </Form>
    </MessageContainer>
  )
};

export default Messages;