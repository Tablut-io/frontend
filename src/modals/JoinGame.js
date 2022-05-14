import { useState } from 'react';

import Modal from './Modal';

const JoinGame = () => {
  const [gameId, setGameId] = useState('');
  const handleChange = (event) => {
    setGameId(event.target.value);
  };
  return (
    <Modal>
      <h1>Join game</h1>
      <form>
        <label>
          Find game by username
          <input type="text" value={gameId} onChange={handleChange} />
        </label>
      </form>
    </Modal>
  )
};

export default JoinGame;