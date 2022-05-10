import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalContent = styled.div`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
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

const Modal = ({children}) => {
  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalWrapper>
  , document.getElementById('modal-root'));
};

export default Modal;