import React from 'react';
import { connect } from 'react-redux';

import PlayerMatches from '../components/PlayerMatches';

const mapStateToProps = (state, ownProps) => {
    return {
        matches: ownProps.matches,
        wordcloud: ownProps.wordcloud
    };
};

export default connect(mapStateToProps)(PlayerMatches);