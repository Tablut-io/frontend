import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';

import { socket, SocketContext } from './Context/SocketContext';
// pages components
import Game from './Pages/Game';
import Landing from './Pages/Landing';

// other components
import NavigationBar from './Components/NavigationBar';

const Wrapper = styled.main`
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  border: 1px solid black;
`

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter>
        <NavigationBar />
        <Wrapper>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path="/game/:gameId" element={<Game />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
