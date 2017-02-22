import React from 'react';

import PlayerInfoContainer from '../containers/PlayerInfoContainer';
import PlayerMatchesContainer from '../containers/PlayerMatchesContainer';

export default function (props) {
    return (
        <div className="flex-container">
            <div className="flex-container">
                <PlayerInfoContainer />
            </div>
            <div className="flex-container">
                <PlayerMatchesContainer />
            </div>
        </div>
    );
}
