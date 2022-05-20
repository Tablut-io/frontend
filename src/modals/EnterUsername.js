import { useState } from 'react';

import Modal from './Modal';
import { CLOSEMODAL } from '../utility/actionConstants';
// styled components
import { TextInput, Submit } from '../styled_components/form';

const EnterUsername = ({ dispatch, socket }) => {
  const [usernameInput, setUsernameInput] = useState(socket.username || '');
  const handleUsernameInputChange = (event) => {
    setUsernameInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: CLOSEMODAL });
    socket.emit('change username', usernameInput);
  }
  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <h1>Change username</h1>
        <label>
          Username:
          <TextInput value={usernameInput} onChange={handleUsernameInputChange} />
        </label>
        <Submit value="Accept" />
      </form>
    </Modal>
  )
}

export default EnterUsername;