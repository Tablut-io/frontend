import { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  border: 1px solid black;  
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 50px;
  max-width: 400px;
  min-height: 4rem;
  padding: 10px;
  background-color: lightgray;
  margin: 1rem 0;
`
const Messages = styled.ol`
  height: 100%;
`;

const Message = styled.li`
`;

const NewMessageForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NewMessage = styled.input.attrs({ type: 'text'})`
  color: black;
  border: 1px solid black;
  width: 100%;
`;

const SendButton = styled.input.attrs({ type: 'submit' })`
  width: fit-content;
  padding: 0 5px;
  background-color: green;
  color: white;
  cursor: pointer;
`;

const Chat = ({ messages, onSend }) => {
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
    <ChatContainer>
      <Messages>
        {messages.map((message, i) => {
          return (<Message key={i}>
                    {message.username + ': ' + message.message}
                  </Message>)}
        )}
      </Messages>
      <NewMessageForm onSubmit={handleSubmit}>
        <NewMessage placeholder='Enter message' onChange={handleChange} value={message} />
        <SendButton value='Send' />
      </NewMessageForm>
    </ChatContainer>
  )
};

export default Chat;