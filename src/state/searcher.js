const FILTER_VALUE = 'searcher/FILTER_VALUE'
const FILTER_COMPLETE = 'searcher/FILTER_COMPLETE'

export const onFilterValueHandlerAction = (value) => ({
    type: FILTER_VALUE,
    value
})

export const onFilterCompleteHandlerAction = (value) => ({
    type: FILTER_COMPLETE, 
    value
})

const initialState = {
    filterValue: '', 
    filterComplete: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case FILTER_VALUE:
        return {
            ...state,
            filterValue: action.value
        }
        case FILTER_COMPLETE:
        return {
            ...state, 
            filterComplete: action.value
        }
        default:
    return state
    }
}