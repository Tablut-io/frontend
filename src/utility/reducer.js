import { CLOSEMODAL, SETUSERNAME, SHOWENTERUSERNAME, SHOWJOINGAME, TOGGLETHEME } from '../utility/actionConstants';

const initialState = {
  lightTheme: true,
  showEnterUsername: false,
  showGameSetup: false,
  showJoinGame: false,
  username: null,
};
const reducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case CLOSEMODAL:
      newState.showEnterUsername = false;
      newState.showGameSetup = false;
      newState.showJoinGame = false;
      break;
    case SETUSERNAME:
      newState.username = action.username;
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