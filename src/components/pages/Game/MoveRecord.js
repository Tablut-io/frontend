import styled from 'styled-components';

import MovePair from './MovePair';

const OrderedList = styled.ol`
  font-family: sans-serif;
  background-color: lightgray;
  min-width: 50px;
  max-width: 30rem;
  min-height: 4rem;
  background-color: lightgray;
  padding: 10px;
`

const formatMoves = (moves) => {
  const movePairs = [];
  let currPair = [];
  for (const move of moves) {
    if (currPair.length === 2) {
      movePairs.push(currPair);
      currPair = [move];
    } else {
      currPair.push(move);
    }
  }
  if (currPair.length > 0) movePairs.push(currPair);
  return movePairs;
}

const MoveRecord = ({ moves }) => {
  const movePairs = formatMoves(moves);

  return (
    <OrderedList>
      {movePairs.length === 0 ? 
      <div>1: </div>
      :
      movePairs.map((pair, idx) => {
        return <MovePair key={idx} idx={idx + 1} pair={pair} />
      })}
    </OrderedList>
  )
};

export default MoveRecord;