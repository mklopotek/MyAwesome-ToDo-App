import { auth as firebaseAuth } from '../firebaseConfig'
import { CLEAR_STATE } from './auth'

const EMAIL_LOGIN_CHANGE = 'logInAuth/EMAIL_LOGIN_CHANGE'
const PASSWORD_LOGIN_CHANGE = 'logInAuth/PASSWORD_LOGIN_CHANGE'
const EMPTY_LOGIN_EMAIL = 'logInAuth/EMPTY_LOGIN_EMAIL'
const EMPTY_LOGIN_PASSWORD = 'logInAuth/EMPTY_LOGIN_PASSWORD'



export const onEmailLoginChangeAction = value => ({
    type: EMAIL_LOGIN_CHANGE,
    email: value
})

export const onPasswordLoginChangeAction = value => ({
    type: PASSWORD_LOGIN_CHANGE,
    password: value
})

export const onEmptyLoginEmailClick = () => ({
    type: EMPTY_LOGIN_EMAIL
})

export const onEmptyLoginPasswordClick = () => ({
    type: EMPTY_LOGIN_PASSWORD
})

export const onLogInClickAction = () => (dispatch, getState) => {
    const { logInAuth } = getState()

    if (logInAuth.emailLogin === '') {
        dispatch(onEmptyLoginEmailClick())
    }
    if (logInAuth.passwordLogin === '') { dispatch(onEmptyLoginPasswordClick()) }
    else {
        firebaseAuth.signInWithEmailAndPassword(logInAuth.emailLogin, logInAuth.passwordLogin)
            .then(() => console.log('LoginOk'))
            .catch(function (error) {
                const errorMessage = error.message;
                alert(errorMessage)
            })
    }
}

const initialState = {
    emailLogin: '',
    passwordLogin: '',
    errorTextEmailLogin: '',
    errorTextPasswordLogin: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_LOGIN_CHANGE:
            return {
                ...state,
                emailLogin: action.email
            }
        case PASSWORD_LOGIN_CHANGE:
            return {
                ...state,
                passwordLogin: action.password
            }
        case EMPTY_LOGIN_EMAIL:
            return {
                ...state,
                errorTextEmailLogin: 'This field is required'
            }
        case EMPTY_LOGIN_PASSWORD:
            return {
                ...state,
                errorTextPasswordLogin: 'This field is required'
            }
        case CLEAR_STATE:
            return initialState
        default:
            return state
    }
}
