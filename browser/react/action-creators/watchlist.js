import axios from 'axios';
import {hashHistory} from 'react-router';

/** Constants for Player */
export const GET_PLAYERS = 'GET_PLAYERS';

/** Action-creators */
const gettingWatchlistPlayers = (players) => {
    return {
        type: GET_PLAYERS,
        players: players
    };
};

/** Thunk Actions */
export const addPlayerToWatchlist = (userId, playerId) => {
    return dispatch => {
        return axios.post(`/api/watchlist/${userId}/add/${playerId}`, {
            userId: userId,
            playerId: playerId
        })
            .then(res => res.data)
            .then(watchlist => {
                dispatch(gettingWatchlistPlayers(watchlist.playerList));
                hashHistory.push(`/watchlist/${userId}`);
            });
    };
};

export const loadWatchlistPlayers = (userId) => {
    return dispatch => {
        return axios.get(`/api/watchlist/${userId}`, {
            userId: userId
        })
            .then(res => res.data)
            .then(watchlist => {
                dispatch(gettingWatchlistPlayers(watchlist.playerList));
            });
    }
}
