import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from './Modal';
import { Form, Submit, TextInput } from '../styled_components/form';
import { CLOSEMODAL } from '../../utility/actionConstants';

const JoinGame = ({ dispatch }) => {
  const navigate = useNavigate();
  const [gameId, setGameId] = useState('');
  const handleChange = (event) => {
    setGameId(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/game`, { state: { gameId }});
    dispatch({ type: CLOSEMODAL });
  }
  return (
    <Modal>
      <Form onSubmit={handleSubmit}>
        <TextInput value={gameId} onChange={handleChange} placeholder='Enter Game Id' />
        <Submit value="Join" />
      </Form>
    </Modal>
  )
};

export default JoinGame;