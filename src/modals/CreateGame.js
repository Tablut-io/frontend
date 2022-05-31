/* npm imports */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
/* end npm imports */

/* internal imports */
import Modal from './Modal';
import { Label, TextInput, Submit } from '../styled_components/form';
import { CLOSEMODAL } from '../utility/actionConstants';
/* end internal imports */

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const sideOptions = ['random', 'attacker', 'defender'];

const CreateGame = ({ dispatch, socket }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [side, setSide] = useState(sideOptions[0]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSideChange = (event) => {
    setSide(event.target.value);
  };
  const handleSubmit = (event) => {
    socket.emit('initialize game', { username, side });
    socket.on('game initialized', (gameId) => {
      navigate(`/game`, { state: { gameId }});
    });
    dispatch({ type: CLOSEMODAL });
    event.preventDefault();
  };

  return (
    <Modal>
      <Form onSubmit={handleSubmit}>
        <Label>
          Who is this?
          <TextInput
            autoFocus
            placeholder=''
            value={username}
            onChange={handleUsernameChange}
          />
        </Label>
        <Label>
          Side
          <select value={side} onChange={handleSideChange}>
            {sideOptions.map(option => {
              return <option key={option} value={option}>{option}</option>
            })}
          </select>
        </Label>
        <Submit value="To Valhalla!" />
      </Form>
    </Modal>
  )
};

export default CreateGame;