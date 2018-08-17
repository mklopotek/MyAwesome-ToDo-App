import { database } from '../firebaseConfig'

const SET_TASKS = 'tasksList/SET_TASK'

export const setTasksAction = (data) => ({
    type: SET_TASKS,
    data
})


export const fetchTasksAction = () => (dispatch, getState) => {
    const state = getState()
    const user = state.auth.user.uid
    database
        .ref(`${user}/tasks`)
        .on('value', snapshot => {
            const firebaseData = Object.entries(snapshot.val() || {}).map(([id, value]) => {
                value.id = id
                return value
            })

            dispatch(setTasksAction(firebaseData))
        })
}

const initialState = {
    tasks: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.data
            }
        default:
            return state
    }

}