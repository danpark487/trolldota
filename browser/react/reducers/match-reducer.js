/** Constant */
import {SET_MATCH} from '../action-creators/match';

/** Initial State */
const initialMatchState = {
    currentMatch: ''
};

/** Match reducer */
export default function (state = initialMatchState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {

        case SET_MATCH:
            newState.currentMatch = action.currentMatch;
            break;

        default:
            return state;
    }

    return newState;
};
