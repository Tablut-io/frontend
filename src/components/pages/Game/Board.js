import { Fragment } from 'react';
import styled from 'styled-components';

import Square from './Square';

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(10, auto);
  grid-template-rows: repeat(10, auto);
  background-color: var(--dark-board-color);
  aspect-ratio: 1;
  max-width: 600px;
`

const Board = ({ positions, turn, onDragStart, onDrop, amDefender }) => {
  return (
    <StyledBoard>
      {positions.map((row, i) => {
        return (
          <Fragment key={i}>
            {row.map((piece, j) => {
              return <Square
                        key={'' + i + j}
                        position={[i, j]}
                        piece={piece}
                        onDragStart={onDragStart}
                        onDrop={onDrop}
                        turn={turn}
                        amDefender={amDefender}
                      />
            })}
          </Fragment>
        )
      })}
    </StyledBoard>
  )
}

export default Board;