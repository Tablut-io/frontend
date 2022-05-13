import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Context from '../utility/context';
import Modal from './Modal';
import { CLOSEMODAL } from '../utility/actionConstants';

import { Checkbox, Label, Submit } from '../styled_components/form';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const GameSetup = () => {
  const navigate = useNavigate();
  const [, dispatch] = useContext(Context);
  const [password, setPassword] = useState('');
  const [requirePassword, setRequirePassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: CLOSEMODAL })
    navigate('/game/asdf');
  }
  return (
    <Modal>
      <h2>Game Setup</h2>
      <StyledForm onSubmit={handleSubmit}>
        <Label>
          vs.
          <select>
            <option>Human</option>
            <option>Computer</option>
          </select>
        </Label>
        <Label>
          Require password
          <Checkbox  
            checked={requirePassword}
            onChange={(event) => setRequirePassword(event.target.checked)}
          />
        </Label>
        <Label>
          Password
          <input
            type="text"
            value={password}
            disabled={requirePassword}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label>
        <Submit value="Accept" />
      </StyledForm>
    </Modal>
  )
}

export default GameSetup;