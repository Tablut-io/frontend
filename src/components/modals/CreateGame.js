/* npm imports */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* end npm imports */

/* internal imports */
import Modal from './Modal';
import { Form, Label, Option, Select, Submit, TextInput } from '../styled_components/form';
import { CLOSEMODAL } from '../../utility/actionConstants';
/* end internal imports */

const sideOptions = ['attacker', 'defender'];

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
        <TextInput
          autoFocus
          placeholder='username (leave blank for autogen)'
          value={username}
          onChange={handleUsernameChange}
        />
        <Label>
          Side -{'>'}
          <Select value={side} onChange={handleSideChange}>
            {sideOptions.map(option => {
              return <Option key={option} value={option}>{option}</Option>
            })}
          </Select>
        </Label>
        <Submit value="To Valhalla!" />
      </Form>
    </Modal>
  )
};

export default CreateGame;