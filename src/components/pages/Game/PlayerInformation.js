import styled from 'styled-components';

const PlayerInformationContainer = styled.div`
  display: flex;
`
const TurnString = styled.div`
  background-color: var(--dark-bg-color);
  margin: 0.5rem;
  border-radius: 3px;
  padding: 0.5em;
  width: fit-content;
`
const Name = styled.div`
  background-color: var(--dark-bg-color);
  padding: 0.5em;
`
const PlayersContainer = styled.div`
  display: flex;
`
const Player = styled.div`
  margin: 0.5rem;
  padding: 0.5em 0.3em;
  width: fit-content;
  border-radius: 3px;
  display: flex;
  align-items: center;
`

const Piece = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 2px;
  margin-right: 0.25em;
  background-color: ${({attacker}) => attacker ? 'black' : 'white'};
`

const PlayerInformation = ({ attacker, defender, gameId, turn, userId }) => {
  const isDefender = userId === defender?.userId;
  const isAttacker = userId === attacker?.userId;
  let turnString;
  if (!attacker || !defender) {
    turnString = `Game Id: ${gameId}`
  } else {
    
  }
  return (
    <PlayerInformationContainer>
      <TurnString>{turnString}</TurnString>
      <PlayersContainer>
        <Player>
          <Piece attacker />
          <Name>
            {attacker ? attacker.username : 'waiting...'}
            {isAttacker && ' (you)'}
          </Name>
        </Player>
        <Player>
          <Piece />
          <Name>
            {defender ? defender.username : 'waiting...'}
            {isDefender && ' (you)'}
          </Name>
        </Player>
      </PlayersContainer>
    </PlayerInformationContainer>
  )
};

export default PlayerInformation;