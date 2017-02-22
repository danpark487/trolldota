import React from 'react';
import { connect } from 'react-redux';

import PlayerInfo from '../components/PlayerInfo';

const mapStateToProps = (state, ownProps) => {
    return {
        playerinfo: ownProps.playerinfo,
        winloss: ownProps.winloss
    };
};

export default connect(mapStateToProps)(PlayerInfo);
