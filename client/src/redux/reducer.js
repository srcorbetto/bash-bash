import { TEST_ACTION } from './actions';

const initialState = {
    test: 'test'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TEST_ACTION:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer;