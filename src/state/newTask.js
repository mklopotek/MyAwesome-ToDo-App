const TASK_CHANGE = 'newTask/TASK_CHANGE'
const CATEGORY_CHANGE = 'newTask/CATEGORY_CHANGE'
const SET_TASK = 'newTask/SET_TASK'

export const onTaskChangeAction = (event, value) => ({
    type: TASK_CHANGE,
    task: value
})

export const onCategoryChangeAction = (event, index, choosenCategory) => ({
    type: CATEGORY_CHANGE,
    category: choosenCategory
})

// export const onSetTaskClick

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
        default:
            return state
    }
}