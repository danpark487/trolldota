/** Constant */
import {GET_PLAYERS} from '../action-creators/watchlist';

/** Initial State */
const initialMatchState = {
    players: []
};

/** Match reducer */
export default function (state = initialMatchState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {

        case GET_PLAYERS:
            newState.players = action.players;
            break;

        default:
            return state;
    }

    return newState;
};
