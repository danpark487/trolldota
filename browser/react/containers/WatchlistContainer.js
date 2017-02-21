import React from 'react';
import {connect} from 'react-redux';

import Watchlist from '../components/Watchlist';

const mapStateToProps = (state) => {
    return {
        playerList: state.watchlist.players
    };
};

export default connect(mapStateToProps)(Watchlist);
