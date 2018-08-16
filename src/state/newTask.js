import { database } from '../firebaseConfig'

const TASK_CHANGE = 'newTask/TASK_CHANGE'
const CATEGORY_CHANGE = 'newTask/CATEGORY_CHANGE'
const CLEAR_ADDTASKFORM = 'newTask/CLEAR_ADDTASKFORM'

export const onTaskChangeAction = (event, value) => ({
    type: TASK_CHANGE,
    task: value
})

export const onCategoryChangeAction = (event, index, choosenCategory) => ({
    type: CATEGORY_CHANGE,
    category: choosenCategory
})

export const clearAddTaskFormAction = () => ({
    type: CLEAR_ADDTASKFORM
})

export const onAddTaskClickAction = () => (dispatch, getState) => {
    const state = getState()

    console.log(state) //this function is not working sth weird with obj in push()

    database.ref('tasks').push({
        task: state.task,
        category: state.category,
        isComplete: false
    })

    dispatch(clearAddTaskFormAction())
}

const initialState = {
    task: '',
    category: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TASK_CHANGE:
            return {
                ...state,
                task: action.task
            }
        case CATEGORY_CHANGE:
            return {
                ...state,
                category: action.category
            }
        case CLEAR_ADDTASKFORM:
            return {
                ...state,
                initialState
            }
        default:
            return state
    }
}