import styled from 'styled-components';

const restrictedSquares = [[0, 0], [0, 10], [10, 0], [10, 10], [5, 5]];

const SquareContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  background-color: ${({restricted}) => restricted ? 'green' : '#966F33'}
`
const Piece = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 8px;
  background-color: ${({piece}) => piece === 'attacker' ? 'black' : 'white'};
  background-color: ${({piece}) => piece === 'king' ? 'gold' : ''};
  cursor: ${({draggable}) => draggable ? 'pointer': 'default'};
`

const Square = ({ position, piece, onDragStart, onDrop, turn, amDefender }) => {
  const [row, column] = position;
  const restricted = restrictedSquares.some(([restrictedRow, restrictedCol]) => {
    return restrictedRow === row && restrictedCol === column;
  });

  let draggable;
  if (amDefender) {
    draggable = (piece === 'defender' || piece === 'king') && turn === 'defender';
  } else {
    draggable = piece === 'attacker' && turn === 'attacker';
  }
  const handleDrop = (event) => {
    event.preventDefault();
    onDrop(position);
  }
  return (
    <SquareContainer
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
      row={row+1}
      column={column+1}
      restricted={restricted}
    >
      {piece &&
        <Piece
          piece={piece}
          draggable={draggable}
          onDragStart={() => onDragStart(position)}
        />}
    </SquareContainer>
  )
}

export default Square;