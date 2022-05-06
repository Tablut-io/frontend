import Button from '../Components/Button';
import Modal from '../Components/Modal';

const Login = () => {
  return (
    <Modal>
      <div>
        <h2>Login</h2>
        <input type="text" />
        <Button>Login</Button>
        <Button>Cancel</Button>
      </div>
    </Modal>
  )
}

export default Login;