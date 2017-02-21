/** Constant */
import {SET_PLAYER} from '../action-creators/player';

/** Initial State */
const initialPlayerState = {
    currentPlayer: ''
};

/** Player reducer */
export default function (state = initialPlayerState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {

        case SET_PLAYER:
            newState.currentPlayer = action.currentPlayer;
            break;

        default:
            return state;
    }

    return newState;
};
