import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import newTask from './state/newTask'
import tasksList from './state/tasksList'
import searcher from './state/searcher'
import signUpAuth from './state/signUpAuth'

import auth, { initAuthStateListening } from './state/auth'

const reducer = combineReducers({
    newTask,
    tasksList,
    auth, 
    searcher, 
    signUpAuth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initAuthStateListening())