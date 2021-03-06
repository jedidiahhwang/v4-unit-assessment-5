const initialState = {
    username: "",
    picture: ""
}

const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";

export function updateUser (username) {
    return {
        type: UPDATE_USER,
        payload: username
    }
}

export function logout () {
    return {
        type: LOGOUT
    }
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {...state, username: action.payload, picture: action.payload}
        case LOGOUT: 
            return initialState
        default:
            return state
    }
}