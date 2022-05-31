import {
  CLOSEMODAL,
  SETSESSIONINFO,
  SHOWENTERUSERNAME,
  SHOWGAMESETUP,
  SHOWJOINGAME,
  TOGGLETHEME
} from '../utility/actionConstants';

const initialState = {
  lightTheme: false,
  showEnterUsername: false,
  showGameSetup: false,
  showJoinGame: false,
  sessionInfo: null,
};
const reducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case CLOSEMODAL:
      newState.showEnterUsername = false;
      newState.showGameSetup = false;
      newState.showJoinGame = false;
      break;
    case SHOWGAMESETUP:
      newState.showGameSetup = true;
      break;
    case SETSESSIONINFO:
      newState.sessionInfo = action.sessionInfo;
      break;
    case SHOWENTERUSERNAME:
      newState.showEnterUsername = true;
      break;
    case SHOWJOINGAME:
      newState.showJoinGame = true;
      break;
    case TOGGLETHEME:
      newState.lightTheme = !newState.lightTheme;
      break;
    default:
      throw new Error('action type not found');
  }
  return newState;
};

export { initialState, reducer };