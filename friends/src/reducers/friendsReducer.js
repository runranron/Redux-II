import {
    FETCHED,
    ERROR,
    DELETE_FRIEND,
} from '../actions/friendsActions';

export default (friends=[], action) => {
    switch(action.type) {
        case FETCHED:
            return action.friends;
        case ERROR:
            alert(action.errorMessage);
            return friends;
        case DELETE_FRIEND:
            return friends;
        default:
            return friends;
    }
}