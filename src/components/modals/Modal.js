import { useContext } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { CLOSEMODAL } from '../../utility/actionConstants';

import { AppContext} from '../../utility/context';

const ModalContent = styled.div`
  position:fixed;
  background: dimgray;
  max-width: 400px;
  width: 100%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 10px;
  display: flex;
  flex-direction: column;
`
const ModalWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const Modal = ({ children }) => {
  const [, dispatch] = useContext(AppContext);
  const onClickHandler = (event) => {
    event.preventDefault();
    dispatch({ type: CLOSEMODAL });
  }
  return ReactDOM.createPortal(
    <ModalWrapper onClick={onClickHandler}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  , document.getElementById('modal-root'));
};

export default Modal;