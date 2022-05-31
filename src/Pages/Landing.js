import styled from 'styled-components';

import Board from '../components/Board';
import { Button } from '../styled_components/userInterface';
import { SHOWGAMESETUP, SHOWJOINGAME } from '../utility/actionConstants';

const ATT = 'attacker';
const DEF = 'defender';
const KIN = 'king';
const positions = [
  [null, null, null, ATT, ATT, ATT, ATT, ATT, null, null, null],
  [null, null, null, null, null, ATT, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null],
  [ATT, null, null, null, null, DEF, null, null, null, null, ATT],
  [ATT, null, null, null, DEF, DEF, DEF, null, null, null, ATT],
  [ATT, ATT, null, DEF, DEF, KIN, DEF, DEF, null, ATT, ATT],
  [ATT, null, null, null, DEF, DEF, DEF, null, null, null, ATT],
  [ATT, null, null, null, null, DEF, null, null, null, null, ATT],
  [null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, ATT, null, null, null, null, null],
  [null, null, null, ATT, ATT, ATT, ATT, ATT, null, null, null],
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "left right";
`
const H1 = styled.h1`
  font-size: 36px;
  margin-bottom: 2rem;
`
const Left = styled.div`
  grid-area: left;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: right;
  padding: 10px;
`

const CreateButton = styled(Button)`
  grid-area: right;
`

const Landing = ({ dispatch }) => {
  const handleJoinGame = () => {
    dispatch({ type: SHOWJOINGAME });
  };
  const handleCreateGame = () => {
    dispatch({ type: SHOWGAMESETUP });
  };

  return (
    <Grid>
      <Left>
        <Board positions={positions} />
      </Left>
      <Right>
        <H1>Play Tablut board games on Tablut.io!</H1>
        <Button
          primary
          large
          onClick={handleCreateGame}
        >
          Create game
        </Button>
        <Button large onClick={handleJoinGame}>Join game by ID</Button>
      </Right>
    </Grid>
  )
};

export default Landing;