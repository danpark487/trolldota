import axios from 'axios';

/** Constants for Player */
export const SET_PLAYER = 'SET_PLAYER';

/** Action-creators */
const settingPlayer = (player, winloss, matches, wordcloud) => {
    return {
        type: SET_PLAYER,
        playerinfo: player,
        winloss: winloss,
        matches: matches,
        wordcloud: wordcloud
    };
};

/** Thunk actions */
export const loadCurrentPlayer = (playerId) => {
    return dispatch => {
        Promise.all([
            axios.get(`http://api.opendota.com/api/players/${playerId}`),
            axios.get(`http://api.opendota.com/api/players/${playerId}/wl`),
            axios.get(`http://api.opendota.com/api/players/${playerId}/matches?limit=25`),
            axios.get(`http://api.opendota.com/api/players/${playerId}/wordcloud`)
        ])
            .then(results => results.map(r => r.data))
            .then(results => {
                dispatch(settingPlayer(...results));
            });
    };
};
