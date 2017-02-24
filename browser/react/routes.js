import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import store from './store';

/** Importing components and containers */
import App from './components/App';

import WatchlistContainer from './containers/WatchlistContainer';
import PlayerContainer from './containers/PlayerContainer';

/** Importing thunk actions */
import { loadWatchlistPlayers } from './action-creators/watchlist';
import { loadCurrentPlayer } from './action-creators/player';

/** onEnter hooks */
const onWatchlistEnter = function (nextRouterState) {
  store.dispatch(loadWatchlistPlayers(nextRouterState.params.userId));
};

const onPlayerEnter = function (nextRouterState) {
  store.dispatch(loadCurrentPlayer(nextRouterState.params.playerId));
};

/** Routes */
export default function Root () {
  return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/watchlist/:userId" component={WatchlistContainer} onEnter={onWatchlistEnter} />
          <Route path="/player/:playerId" component={PlayerContainer} onEnter={onPlayerEnter} />
        </Route>
      </Router>
  );
}
