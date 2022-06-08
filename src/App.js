import { useEffect, useReducer } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
// Context
import { AppContext } from './utility/context';
// Pages Components
import About from './components/pages/About/About';
import Game from './components/pages/Game/Game';
import Landing from './components/pages/Landing/Landing';
import Rules from './components/pages/Rules/Rules';
// Components
import NavigationBar from './components/navigation/NavigationBar';
// modals
import CreateGame from './components/modals/CreateGame';
import EnterUsername from './components/modals/EnterUsername';
import JoinGame from './components/modals/JoinGame';
import Message from './components/modals/Message';
// socketio
import socket from './utility/socket';
// reducer constants
import {
  CLOSEMODAL,
  SETSESSIONINFO,
  SHOWENTERUSERNAME,
  SHOWGAMESETUP,
  SHOWJOINGAME,
  SHOWMESSAGE,
} from './utility/actionConstants';

// Styling
import GlobalStyle from './components/styled_components/GlobalStyle';
const Main = styled.main`
  margin: 3rem auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  max-width: 1052px;
  min-width: 300px;
  height: 100vh;
  background-color: rgb(40, 40, 40);
`

// reducer and initial state
const initialState = {
  showEnterUsername: false,
  showGameSetup: false,
  showJoinGame: false,
  showMessage: false,
  sessionInfo: null,
};
const reducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case CLOSEMODAL:
      newState.showEnterUsername = false;
      newState.showGameSetup = false;
      newState.showJoinGame = false;
      newState.showMessage = false;
      break;
    case SHOWGAMESETUP:
      newState.showGameSetup = true;
      break;
    case SETSESSIONINFO:
      newState.sessionInfo = action.sessionInfo;
      break;
    case SHOWENTERUSERNAME:
      newState.showEnterUsername = true;
      break;
    case SHOWJOINGAME:
      newState.showJoinGame = true;
      break;
    case SHOWMESSAGE:
      newState.showMessage = true;
      newState.message = action.message
      break;
    default:
      throw new Error('action type not found');
  }
  return newState;
};

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    socket.on('session', (sessionInfo) => {
      const sessionId = sessionInfo.sessionId;
      socket.auth = { sessionId };
      localStorage.setItem('sessionId', sessionId);
      dispatch({ type: SETSESSIONINFO, sessionInfo});
    });
  });

  return (
    <ThemeProvider theme={appState}>
      <GlobalStyle />
      <BrowserRouter>
        <NavigationBar
          connected={socket.connected}
          dispatch={dispatch}
          username={appState.sessionInfo?.username}
        />
        <Main>
          <Routes>
            <Route path='/' element={<Landing dispatch={dispatch} socket={socket} />} />
            <Route path='/about' element={<About />} />
            <Route path='/rules' element={<Rules />} />
            <Route
              path='/game'
              element={<Game appState={appState} socket={socket} dispatch={dispatch} />}
            />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Main>
        <AppContext.Provider value={[appState, dispatch]}>
          {appState.showEnterUsername && <EnterUsername socket={socket} dispatch={dispatch} />}
          {appState.showGameSetup && <CreateGame socket={socket} dispatch={dispatch} />}
          {appState.showJoinGame && <JoinGame dispatch={dispatch} />}
          {appState.showMessage && <Message message={appState.message} />}
        </AppContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
