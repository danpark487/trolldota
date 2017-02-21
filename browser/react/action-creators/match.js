/** Constants for Match */
export const SET_MATCH = 'SET_MATCH';

/** Action-creators */
const settingMatch = (matchId) => {
    return {
        type: SET_MATCH,
        currentMatch: matchId
    };
};
