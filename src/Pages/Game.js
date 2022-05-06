import { Fragment } from 'react';
import styled from 'styled-components';

import Board from '../Components/Board';

const BoardContainer = styled.div`
`

const Game = () => {
  return (
    <Fragment>
      <BoardContainer>
        <Board />
      </BoardContainer>
    </Fragment>
  )
}

export default Game;