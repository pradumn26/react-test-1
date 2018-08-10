import axios from 'axios';
import {CURRENT_USER_ACTION} from "./types";

export const fetchUser = () => dispatch => {
    axios.get('/auth/currentUser')
        .then((res) => {
            dispatch({
                type: CURRENT_USER_ACTION,
                payload: res.data
            })
        });
};