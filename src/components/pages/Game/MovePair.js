import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
`

const formatPosition = (position) => {
  return String.fromCharCode(position[0] + 97) + position[1];
};

const MovePair = ({ idx, pair }) => {
  const [moveOne, moveTwo] = pair;
  const moveOneString = `${idx}: ${formatPosition(moveOne.startPos)} to ${formatPosition(moveOne.endPos)}`;
  const moveTwoString = moveTwo ? `, ${formatPosition(moveTwo.startPos)} to ${formatPosition(moveTwo.endPos)}` : '';
  const moveString = moveOneString + moveTwoString;

  return <ListItem>{moveString}</ListItem>
};

export default MovePair;