/** Constants. */
import { SET_CURRENT_USER } from '../action-creators/currentuser';

/** Initial State */
const initialUserState = {
    currentUser: {}
};

/** Match reducer */
export default function (state = initialUserState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {

        case SET_CURRENT_USER:
            newState.currentUser = action.currentUser;
            break;

        default:
            return state;
    }

    return newState;
}
