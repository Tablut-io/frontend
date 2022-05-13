import { useReducer } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import io from 'socket.io-client';

// Context
import Context from './utility/context';
// Pages Components
import Game from './pages/Game';
import Landing from './pages/Landing';
// Components
import NavigationBar from './components/NavigationBar';
import { CLOSEMODAL, SETUSERNAME, SHOWENTERUSERNAME, SHOWGAMESETUP, SHOWJOINGAME } from './utility/actionConstants';
// modals
import EnterUsername from './modals/EnterUsername';
import GameSetup from './modals/GameSetup';
import JoinGame from './modals/JoinGame';
// Styled Components
const Wrapper = styled.main`
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  min-width: 300px;
  border: 1px solid black;
`
// State and Reducer
const initialState = {
  lightTheme: true,
  showEnterUsername: false,
  showGameSetup: false,
  showJoinGame: false,
  socket: null,
};
function reducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case CLOSEMODAL:
      newState.showEnterUsername = false;
      newState.showGameSetup = false;
      newState.showJoinGame = false;
      break;
    case SETUSERNAME:
      newState.socket.auth = { username: action.username };
      break;
    case SHOWENTERUSERNAME:
      newState.showEnterUsername = true;
      break;
    case SHOWGAMESETUP:
      newState.showGameSetup = true;
      break;
    case SHOWJOINGAME:
      newState.showJoinGame = true;
      break;
    default:
      throw new Error('action type not found');
  }
  return newState;
}

function App() {
  // setup socketio
  const socket = io('http://localhost:8080', { autoConnect: false });
  socket.onAny((event, ...args) => {
    console.log(event, args);
  });
  socket.on('session', ({ sessionId, userId }) => {
    socket.auth = { sessionId };
    localStorage.setItem('sessionId', sessionId);
    socket.userId = userId;
  });

  // setup initial state and dispatch
  initialState.socket = socket;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
        <BrowserRouter>
          <NavigationBar dispatch={dispatch} username={state.socket.username} />
          <Wrapper>
            <Routes>
              <Route path='/' element={<Landing dispatch={dispatch}/>} />
              <Route path="/game" element={<Game state={state} dispatch={dispatch} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Wrapper>
          {state.showEnterUsername && <EnterUsername dispatch={dispatch} />}
          {state.showGameSetup && <GameSetup dispatch={dispatch} />}
          {state.showJoinGame && <JoinGame dispatch={dispatch} />}
        </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
