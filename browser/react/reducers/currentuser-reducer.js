/** Constants. */
import { SET_CURRENT_USER, REMOVE_CURRENT_USER } from '../action-creators/currentuser';

/** Initial State */
const initialUserState = {
    currentUser: null
};

/** Match reducer */
export default function (state = initialUserState, action) {
    const newState = Object.assign({}, state);

    switch (action.type) {

        case SET_CURRENT_USER:
            newState.currentUser = action.currentUser;
            break;

        case REMOVE_CURRENT_USER:
            return initialUserState;
            break;

        default:
            return state;
    }
    
    return newState;
}
