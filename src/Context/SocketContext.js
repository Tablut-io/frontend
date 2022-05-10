import { createContext } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8080', { autoConnect: false });
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export { socket };
export const SocketContext = createContext(null);