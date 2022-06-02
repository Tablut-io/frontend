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
import About from './pages/About';
import Game from './pages/Game';
import Landing from './pages/Landing';
import Rules from './pages/Rules';
// Components
import NavigationBar from './components/NavigationBar';
// modals
import CreateGame from './modals/CreateGame';
import EnterUsername from './modals/EnterUsername';
import JoinGame from './modals/JoinGame';
// socketio
import socket from './utility/socket';
// reducer
import { initialState, reducer } from './utility/reducer';
import { SETSESSIONINFO } from './utility/actionConstants';

// Styling
import GlobalStyle from './styled_components/GlobalStyle';
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
        </AppContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
