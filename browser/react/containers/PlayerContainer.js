import React from 'react';
import { connect } from 'react-redux';

import Player from '../components/Player';

const mapStateToProps = (state) => {
    return {
        currentPlayer: state.player.currentPlayer
    };
};

export default connect(mapStateToProps)(Player);
