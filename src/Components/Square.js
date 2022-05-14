import styled from 'styled-components';

const SquareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  background-color: gray;
`
const Piece = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 8px;
  background-color: ${props => props.piece === 'attacker' ? 'black' : 'white'}
`

const Square = ({ position, piece }) => {
  const [row, column] = position;
  return (
    <SquareContainer row={row+1} column={column+2}>
      {piece && <Piece piece={piece} />}
    </SquareContainer>
  )
}

export default Square;