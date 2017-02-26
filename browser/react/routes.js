import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { connect } from 'react-redux';

/** Importing components and containers */
import App from './components/App';
import LoginModal from './modals/components/LoginModal';

import WatchlistContainer from './containers/WatchlistContainer';
import PlayerContainer from './containers/PlayerContainer';

/** Importing thunk actions */
import { loadCurrentPlayer } from './action-creators/player';
import { loadLoggedInPlayer } from './action-creators/currentuser';

/** Routes */
export function Root (props) {
  return (
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={props.onAppEnter}>
          <Route path="watchlist" component={WatchlistContainer}/>
          <Route path=":userId/watchlist" component={WatchlistContainer}/>
          <Route path="players/:playerId" component={PlayerContainer} onEnter={props.onPlayerEnter} />
        </Route>
      </Router>
  );
}

/** Dispatching onEnter hooks */
const mapDispatchToProps = { 
  onPlayerEnter: (nextRouterState) => loadCurrentPlayer(nextRouterState.params.playerId),
  onAppEnter: () => loadLoggedInPlayer()
};

export default connect(null, mapDispatchToProps)(Root);
