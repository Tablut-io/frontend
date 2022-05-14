import { useEffect, useReducer } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
// Context
import Context from './utility/context';
// Pages Components
import About from './pages/About';
import Game from './pages/Game';
import Landing from './pages/Landing';
import Rules from './pages/Rules';
// Components
import NavigationBar from './components/NavigationBar';
import { SETUSERNAME } from './utility/actionConstants';
// modals
import EnterUsername from './modals/EnterUsername';
import JoinGame from './modals/JoinGame';
// socketio
import socket from './utility/socket';
// reducer
import { initialState, reducer } from './utility/reducer';

// Styling
import GlobalStyle from './styled_components/GlobalStyle';
const Main = styled.main`
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  min-width: 300px;
  border: 1px solid black;
`

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
    <ThemeProvider theme={state}>
      <GlobalStyle />
      <BrowserRouter>
        <NavigationBar connected={socket.connected} dispatch={dispatch} username={state.username} />
        <Main>
          <Routes>
            <Route path='/' element={<Landing dispatch={dispatch} />} />
            <Route path='/about' element={<About />} />
            <Route path='/Rules' element={<Rules />} />
            <Route path="/game" element={<Game socket={socket} dispatch={dispatch} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Main>
        <Context.Provider value={[state, dispatch]}>
          {state.showEnterUsername && <EnterUsername socket={socket} dispatch={dispatch} />}
          {state.showJoinGame && <JoinGame dispatch={dispatch} />}
        </Context.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
