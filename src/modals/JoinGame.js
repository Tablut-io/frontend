import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from './Modal';
import { Submit, TextInput } from '../styled_components/form';
import { CLOSEMODAL } from '../utility/actionConstants';

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
      <h1>Join game</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Game Id
          <TextInput value={gameId} onChange={handleChange} />
        </label>
        <Submit value="Join" />
      </form>
    </Modal>
  )
};

export default JoinGame;