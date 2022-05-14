import io from 'socket.io-client';

const socket = io('http://localhost:8080', { autoConnect: false });
socket.onAny((event, ...args) => {
  console.log('socket event: ', event, args);
});
const sessionId = localStorage.getItem('sessionId');
if (sessionId) socket.auth = { sessionId };
socket.connect();
export default socket;