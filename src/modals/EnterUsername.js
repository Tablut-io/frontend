import { useContext, useState } from 'react';

import Context from '../utility/context';
import Modal from './Modal';
import { CLOSEMODAL, SETUSERNAME } from '../utility/actionConstants';
// styled components
import { TextInput, Submit } from '../styled_components/form';

const EnterUsername = () => {
  const [state, dispatch] = useContext(Context);
  const [usernameInput, setUsernameInput] = useState(state.socket.username || '');
  const handleUsernameInputChange = (event) => {
    setUsernameInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ 
      type: SETUSERNAME,
      username: usernameInput,
    });
    dispatch({ type: CLOSEMODAL });
  }
  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <h1>{state.socket.username ? 'Change username' : 'Enter username'}</h1>
        <label>
          Username:
          <TextInput value={usernameInput} onChange={handleUsernameInputChange}/>
        </label>
        <Submit value="Accept" />
      </form>
    </Modal>
  )
}

export default EnterUsername;