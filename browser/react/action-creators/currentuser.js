import axios from 'axios';
import { browserHistory } from 'react-router';

/** Constants */
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';

/** Action-creators */
const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    currentUser: user
});

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

/** Thunk dispatchers */
export const login = (credentials) => {
    return dispatch => {
        axios.put('/api/login', credentials)
            .then(res => res.data)
            .then(user => {
                dispatch(setCurrentUser(user));
                browserHistory.push(`/${user.id}/watchlist`);
            })
    };
};

export const signup = (credentials) => {
    return dispatch => {
        axios.post('/api/login', credentials)
            .then(res => res.data)
            .then(user => {
                dispatch(setCurrentUser(user));
                browserHistory.push(`/${user.id}/watchlist`);
            })
    }
};

export const logout = () => dispatch => {
    dispatch(removeCurrentUser());
    axios.delete('/api/login')
        .then(() => {
            browserHistory.push('/');
        });
};

export const addPlayerToWatchlist = (userId, playerId) => {
    return dispatch => {
        return axios.put(`/api/user/${userId}/watchlist/add`, { playerId })
            .then(res => res.data)
            .then(updatedUser => {
                dispatch(setCurrentUser(updatedUser));
                browserHistory.push(`/${userId}/watchlist`);
            });
    };
};

export const loadLoggedInPlayer = () => {
    return dispatch => {
        return axios.get('/api/login')
            .then(res => res.data)
            .then((currentUser) => dispatch(setCurrentUser(currentUser)))
    };
};
