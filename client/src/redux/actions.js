export const TEST_ACTION = 'TEST_ACTION';
export const testAction = payload => dispatch => {
    return dispatch({
        type: TEST_ACTION,
        location: payload,
        payload: 'Test'
    })
}