import styled from 'styled-components';

const SquareContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  background-color: gray;
`

const Square = ({position, piece}) => {
  const [row, column] = position;
  return <SquareContainer row={row+1} column={column+2} ></SquareContainer>
}

export default Square;