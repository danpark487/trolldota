import {combineReducers} from 'redux';

import playerReducer from './player-reducer';
import matchReducer from './match-reducer';
import watchlistReducer from './watchlist-reducer';
import currentUserReducer from './currentuser-reducer';
import modalReducer from './modal-reducer';

export default combineReducers({
  player: playerReducer,
  match: matchReducer,
  watchlist: watchlistReducer,
  currentUser: currentUserReducer,
  modal: modalReducer
});

