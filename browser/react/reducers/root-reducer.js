import {combineReducers} from 'redux';

import playerReducer from './player-reducer';
import matchReducer from './match-reducer';
import watchlistReducer from './watchlist-reducer';

export default combineReducers({
  player: playerReducer,
  match: matchReducer,
  watchlist: watchlistReducer
});

