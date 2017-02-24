export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    currentUser: user
});

export const login = (credentials) => {
    return dispatch => {
        axios.put('/api/login')
            .then(res => res.data)
            .then(user => dispatch(setCurrentUser(user)))
    };
};
