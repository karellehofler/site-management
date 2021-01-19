import { GET_LINKS, ADD_LINK, UPDATE_LINK, DELETE_LINK} from '../actions/types';

const initialState = {
    links: [],
    loading: false
}

export default function linkReducer(state=initialState, action) {
    switch(action.type) {
        case GET_LINKS:
            return {
                ...state,
                links: action.payload
            }
        case DELETE_LINK:
            return {
                ...state,
                links: state.links.filter(link => link._id !== action.payload)
            }
        case ADD_LINK:
            return {
                ...state,
                links: [ action.payload, ...state.links ]
            }
        case UPDATE_LINK:
            return {
                ...state,
                links: state.links.filter(link => link._id !== action.payload)
            }
        default: 
            return state;
    }
}