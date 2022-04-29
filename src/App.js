import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';

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
`

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/game/:gameId" element={<Game />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
