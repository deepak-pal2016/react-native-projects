import { GET_MOVIES } from './actions'

const initialState = {
    movies: [],
    favorites: [],
    loader: false
}

function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loader: true
            };
        default:
            return state;
    }
}

export default moviesReducer;

