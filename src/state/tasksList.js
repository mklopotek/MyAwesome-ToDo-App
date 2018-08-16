import { database } from '../firebaseConfig'

// const TASKS_STARTED_LOADING = 'tasksArray/TASKS_START_LOADING'
// const TASKS_STOPPED_LOADING = 'tasksArray/TASKS_STOP_LOADING'
const SET_TASKS = 'tasksList/SET_TASK'


// export const tasksStartedLoadingAction = () => ({type: TASKS_STARTED_LOADING})
// export const tasksStoppedLoadingAction = () => ({type: TASKS_STOPPED_LOADING})

export const setTasksAction = (data) => ({
    type: SET_TASKS
})

export const fetchTasksAction = () => (dispatch, getState) => {
    database
        .ref('tasks')
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
                tasks: action.tasks
            }
        default:
            return state
    }

}