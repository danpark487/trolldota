import React from 'react';
import {connect} from 'react-redux';
import Players from '../components/Players';

const mapStateToProps = (state, ownProps) => {
    return {
        playerList: ownProps.playerList
    };
};

export default connect(mapStateToProps)(Players);
