import { 
    FETCH_COLLECTIONS_FAILURE, 
    FETCH_COLLECTIONS_START, 
    FETCH_COLLECTIONS_SUCCESS 
} from "./shop.types";

const INITIAL_STATE = {
    isFetching: false,
    collections: null,
    errorMessage: undefined
}

const shopReducer = ( state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            }
        
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: payload
            }
        
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            }
        default:
            return state;
    }
}

export default shopReducer