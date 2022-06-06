import styled from 'styled-components';

const ListItem = styled.li`
  color: black;
  display: flex;
`

const formatPosition = (position) => {
  return String.fromCharCode(position[0] + 97) + position[1];
};

const MovePair = ({ pair, idx }) => {
  console.log('pair', pair);
  const moveOne = pair[0];
  const moveOneString = `${idx}: ${formatPosition(moveOne.startPos)} to ${formatPosition(moveOne.endPos)}`;
  const moveTwo = pair[1];
  const moveTwoString = moveTwo ? `, ${formatPosition(moveTwo.startPos)} to ${formatPosition(moveTwo.endPos)}` : '';
  const moveString = moveOneString + moveTwoString;
  return (
    <ListItem>
      {moveString}
    </ListItem>
  )
};

export default MovePair;