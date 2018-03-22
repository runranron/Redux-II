import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => (dispatch) => {
    dispatch({ type: FETCHING });
    axios
        .get(`http://localhost:5000/api/friends`)
        .then((response) => {
            console.log(response);
            dispatch({ type: FETCHED, friends: response.data });
        })
        .catch((err) => {
            dispatch({ type: ERROR, errorMessage: "YOU DON'T HAVE ANY FRIENDS!" });
        });
};

let id = 6;
export const addFriend = (friend) => (dispatch) => {
    axios.post('http://localhost:5000/api/friends', {
        id: ++id,
        name: friend.name,
        age: friend.age,
        email: friend.email
    }).then(result => dispatch({type: ADD_FRIEND})).catch(
        err => dispatch({type: ADD_FRIEND}));
}

export const deleteFriend = (friend) => (dispatch) => {
    dispatch({type: DELETE_FRIEND});
}
