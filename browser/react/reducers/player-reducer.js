/** Constant */
import { SET_PLAYER, SET_WIN_LOSS, SET_PLAYER_MATCHES, SET_PLAYER_WORDCLOUD } from '../action-creators/player';

/** Initial State */
const initialPlayerState = {
    playerinfo: {},
    winloss: {},
    matches: {},
    wordcloud: {}
};

/** Player reducer */
export default function (state = initialPlayerState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {

        case SET_PLAYER:
            newState.playerinfo = action.playerinfo;
            newState.winloss = action.winloss;
            newState.matches = action.matches;
            newState.wordcloud = action.wordcloud;
            break;

        default:
            return state;
    }

    return newState;
}
