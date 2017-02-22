import React from 'react';
import { connect } from 'react-redux';

import Player from '../components/Player';

const mapStateToProps = (state) => {
    return {
        playerinfo: state.player.playerinfo,
        winloss: state.player.winloss,
        matches: state.player.matches,
        wordcloud: state.player.wordcloud
    };
};

export default connect(mapStateToProps)(Player);
