import axios from 'axios';

/** Constants for Player */
export const SET_PLAYER = 'SET_PLAYER';

/** Action-creators */
const settingPlayer = (player) => {
    return {
        type: SET_PLAYER,
        currentPlayer: player
    };
};

export const loadCurrentPlayer = (playerId) => {
    return dispatch => {
        return axios.get(`http://api.opendota.com/api/players/${playerId}`)
            .then(res => res.data)
            .then(playerData => {
                dispatch(settingPlayer(playerData));
            });
    };
};
