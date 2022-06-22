import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--dark-bg-color);
  display: flex;
  height: fit-content;
  align-items: center;
  padding: 0.2em;
  border-radius: 3px;
`
const LabelAndId = styled.div`
  margin-right: 0.5em;
`
const CopyButton = styled.button`
  cursor: pointer;
  background: white;
  color: black;
  border-radius: 3px;
  padding: 0.1em 0.2em;
  margin: 0.2em;
`

const GameId = ({ gameId }) => {
  const handleOnClick = () => {
    navigator.clipboard.writeText(gameId).then(() => {
      alert('Game Id copied to clipboard!');
    });
  };

  return (
    <Container>
      <LabelAndId>Game Id: {gameId}</LabelAndId>
      <CopyButton onClick={handleOnClick}>Copy</CopyButton>
    </Container>
  )
};

export default GameId;