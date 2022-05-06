import { Fragment, useState } from 'react';
import styled from 'styled-components';

import Square from './Square';

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(11, auto) 8%;
  grid-template-rows: repeat(11, auto) 8%;
  background-color: gray;
  aspect-ratio: 1;
  max-width: 600px;
`

const Board = (props) => {
  const [positions] = useState(Array.from(Array(11), () => new Array(11).fill(null)));

  return (
    <StyledBoard>
      {positions.map((row, i) => {
        return (
          <Fragment key={i}>
            {row.map((square, j) => <Square key={'' + i + j} position={[i, j]} square={square} />)}
          </Fragment>
        )
      })}
    </StyledBoard>
  )
}

export default Board;