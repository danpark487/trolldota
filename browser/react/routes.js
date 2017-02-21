import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

/** Importing components and containers */
import App from './components/App';

import WatchlistContainer from './containers/WatchlistContainer';
import PlayersContainer from './containers/PlayersContainer';
import PlayerContainer from './containers/PlayerContainer';

/** Importing thunk actions */
import { loadWatchlistPlayers } from './action-creators/watchlist';

/** onEnter hooks */
const onWatchlistEnter = function (nextRouterState) {
  store.dispatch(loadWatchlistPlayers(nextRouterState.params.userId));
};

/** Routes */
export default function Root () {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/watchlist/:userId" component={WatchlistContainer} onEnter={onWatchlistEnter} />
          <Route path="/player" component={PlayerContainer} />
        </Route>
      </Router>
    </Provider>
  );
}
