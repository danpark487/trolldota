/** Constants for Player */
export const SET_PLAYER = 'SET_PLAYER';

/** Action-creators */
const settingPlayer = (playerId) => {
    return {
        type: SET_PLAYER,
        currentPlayer: playerId
    };
};

