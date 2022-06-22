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
  grid-column: start / sixty;
  @media screen and (max-width: 500px) {
    grid-column: start / end;
  };
`

const highlight = (pos, start, end) => {
  if (!start || !end) return false;
  return (pos[0] === start[0] && pos[1] === start[1]) || (pos[0] === end[0] && pos[1] === end[1]);
};

const Board = ({ positions, turn, onDragStart, onDrop, amDefender, lastMove }) => {
  const lastStart = lastMove?.startPos;
  const lastEnd = lastMove?.endPos;

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
                        highlight={highlight([i, j], lastStart, lastEnd)}
                      />
            })}
          </Fragment>
        )
      })}
    </StyledBoard>
  )
}

export default Board;