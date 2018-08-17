import { auth as firebaseAuth } from '../firebaseConfig'

import { fetchTasksAction } from './tasksList'

const SET_USER = 'auth/LOGIN'

const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'
const EMPTY_EMAIL = 'auth/EMPTY_EMAIL'
const EMPTY_PASSWORD = 'auth/EMPTY_PASSWORD'

export const onEmailChangeAction = value => ({
    type: EMAIL_CHANGE,
    email: value
})

export const onPasswordChangeAction = value => ({
    type: PASSWORD_CHANGE,
    password: value
})

export const setUserAction = user => ({
    type: SET_USER,
    user
})

export const onEmptyEmailClick = () => ({
    type: EMPTY_EMAIL
})

export const onEmptyPasswordClick = () => ({
    type: EMPTY_PASSWORD
})

export const initAuthStateListening = () => (dispatch, getState) => {
    firebaseAuth.onAuthStateChanged(user => {

        dispatch(setUserAction(user)) //user is null if user is logged out and user in state will be null so everything will be as initial :)

        if (user) {
            return dispatch(fetchTasksAction())
        } else {

        }
    })
    //jeśli użytkownik jest zalogowany to w onAuthStateChanged dostaje user'a
}


export const logOutAction = () => (dispatch, getState) => {
    firebaseAuth.signOut()
        .then(() => console.log('Signout'))
        .catch(() => console.log('Signout error'))
}


export const onLogInClickAction = () => (dispatch, getState) => {
    console.dir(firebaseAuth)
    const { auth } = getState()

    if (auth.email === '') {
        dispatch(onEmptyEmailClick())
    }
    if (auth.password === '') { dispatch(onEmptyPasswordClick()) }
    else {
        firebaseAuth.signInWithEmailAndPassword(auth.email, auth.password)
            .then(() => console.log('LoginOk'))
            .catch(function (error) {
                const errorMessage = error.message;
                alert(errorMessage)
            })
    }
}

const initialState = {
    email: '',
    password: '',
    errorTextEmail: '',
    errorTextPassword: '',
    user: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.email
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.password
            }
        case EMPTY_EMAIL:
            return {
                ...state,
                errorTextEmail: 'This field is required'
            }
        case EMPTY_PASSWORD:
            return {
                ...state,
                errorTextPassword: 'This field is required'
            }
        case SET_USER:
            return {
                ...initialState,
                user: action.user
            }
        default:
            return state
    }
}
