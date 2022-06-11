import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from './Modal';
import { Form, Submit, TextInput } from '../styled_components/form';
import { CLOSEMODAL } from '../../utility/actionConstants';

const JoinGame = ({ dispatch }) => {
  const navigate = useNavigate();
  const [gameId, setGameId] = useState('');
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setGameId(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/game`, { state: { gameId, username }});
    dispatch({ type: CLOSEMODAL });
  }
  return (
    <Modal>
      <Form onSubmit={handleSubmit}>
        <TextInput autoFocus value={gameId} onChange={handleChange} placeholder='Enter Game Id' />
        <TextInput value={username} onChange={handleUsernameChange} placeholder='Enter name (or leave blank)' />
        <Submit value="Join" />
      </Form>
    </Modal>
  )
};

export default JoinGame;