import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import newTask from './state/newTask'
import tasksList from './state/tasksList'

import auth, { initAuthStateListening } from './state/auth'

const reducer = combineReducers({
    newTask,
    tasksList,
    auth
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initAuthStateListening())