import styled from 'styled-components';

import MovePair from './MovePair';

const OrderedList = styled.ol`
  background-color: white;
  min-width: 200px;
  min-height: 300px;
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
  console.log('movepairs', movePairs);
  return movePairs;
}

const MoveRecord = ({ moves }) => {
  const movePairs = formatMoves(moves);

  return (
    <OrderedList>
      {movePairs.map((pair, idx) => {
        return <MovePair key={idx} idx={idx} pair={pair} />
      })}
    </OrderedList>
  )
};

export default MoveRecord;