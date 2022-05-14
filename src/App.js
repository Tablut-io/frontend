import { useEffect, useReducer } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';

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
// socketio
import socket from './utility/socket';
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

// initial state and reducer function
function reducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case CLOSEMODAL:
      newState.showEnterUsername = false;
      newState.showGameSetup = false;
      newState.showJoinGame = false;
      break;
    case SETUSERNAME:
      newState.username = action.username;
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
const initialState = {
  lightTheme: true,
  showEnterUsername: false,
  showGameSetup: false,
  showJoinGame: false,
  username: null,
  socket,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    socket.on('session', ({ sessionId, username}) => {
      socket.auth = { sessionId };
      localStorage.setItem('sessionId', sessionId);
      dispatch({ type: SETUSERNAME, username });
    });
  });
  return (
    <Context.Provider value={[state, dispatch]}>
        <BrowserRouter>
          <NavigationBar dispatch={dispatch} username={state.username} />
          <Wrapper>
            <Routes>
              <Route path='/' element={<Landing dispatch={dispatch}/>} />
              <Route path="/game" element={<Game state={state} dispatch={dispatch} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Wrapper>
          {state.showEnterUsername && <EnterUsername socket={socket} dispatch={dispatch} />}
          {state.showGameSetup && <GameSetup dispatch={dispatch} />}
          {state.showJoinGame && <JoinGame dispatch={dispatch} />}
        </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
