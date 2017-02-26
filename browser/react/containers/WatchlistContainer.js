import React from 'react';
import {connect} from 'react-redux';

import Watchlist from '../components/Watchlist';

import { addPlayerToWatchlist, loadLoggedInPlayer } from '../action-creators/currentuser';
import { LOGIN_MODAL } from '../modals/modaltypes';
import { loadModal } from '../action-creators/modal';

export class WatchlistContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderWatchlist = this.renderWatchlist.bind(this);
    }

    handleSubmit (evt) {
        evt.preventDefault();
        this.props.addPlayerToWatchlist(this.props.currentUser.id, evt.target.player.value);
    }

    componentDidMount () {
        if (!this.props.currentUser) this.props.loadModal(LOGIN_MODAL);
    }
    
    render () {
        return this.props.currentUser ? this.renderWatchlist() : null;
    }

    renderWatchlist () {
        return (
            <Watchlist
                handleSubmit={this.handleSubmit}
                currentUser={this.props.currentUser}
            />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayerToWatchlist: function(userId, playerId) {
            dispatch(addPlayerToWatchlist(userId, playerId));
        },
        loadModal: function(modalType) {
            dispatch(loadModal(modalType));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistContainer);
