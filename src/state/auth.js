import { auth as firebaseAuth } from '../firebaseConfig'

import { fetchTasksAction } from './tasksList'

const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'
const SET_USER = 'auth/LOGIN'

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

    firebaseAuth.signInWithEmailAndPassword(auth.email, auth.password)
        .then(() => console.log('LoginOk'))
        .catch(function (error) {
            const errorMessage = error.message;
            alert(errorMessage)
        })
}

const initialState = {
    email: '',
    password: '',
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
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
