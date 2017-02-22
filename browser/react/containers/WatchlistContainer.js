import React from 'react';
import {connect} from 'react-redux';

import Watchlist from '../components/Watchlist';

import { addPlayerToWatchlist } from '../action-creators/watchlist';

export class WatchlistContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerId: '',
            currentUser: '1'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (evt) {
        evt.preventDefault();
        this.props.addPlayerToWatchlist(this.state.currentUser, evt.target.player.value);
    }

    render () {
        return (
            <Watchlist
                handleSubmit={this.handleSubmit} 
                playerList={this.props.playerList}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        playerList: state.watchlist.players
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayerToWatchlist: function(userId, playerId) {
            dispatch(addPlayerToWatchlist(userId, playerId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistContainer);
