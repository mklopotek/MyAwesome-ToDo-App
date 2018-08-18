import { auth as firebaseAuth } from '../firebaseConfig'
import { CLEAR_STATE } from './auth'

const EMAIL_SIGN_UP_CHANGE = 'signUpAuth/EMAIL_SIGN_UP_CHANGE'
const PASSWORD_SIGN_UP_CHANGE = 'signUpAuth/PASSWORD_SIGN_UP_CHANGE'
const EMPTY_SIGN_UP_EMAIL = 'signUpAuth/EMPTY_SIGN_UP_EMAIL'
const EMPTY_SIGN_UP_PASSWORD = 'signUpAuth/EMPTY_SIGN_UP_PASSWORD'

export const onEmailSignUpChangeAction = value => ({
    type: EMAIL_SIGN_UP_CHANGE,
    email: value
})

export const onPasswordSignUpChangeAction = value => ({
    type: PASSWORD_SIGN_UP_CHANGE,
    password: value
})

export const onEmptySignUpEmailClick = () => ({
    type: EMPTY_SIGN_UP_EMAIL
})

export const onEmptySignUpPasswordClick = () => ({
    type: EMPTY_SIGN_UP_PASSWORD
})


export const onSignUpClickAction = () => (dispatch, getState) => {
    const { signUpAuth } = getState()

    if (signUpAuth.emailSignUp === '') {
        dispatch(onEmptySignUpEmailClick())
    }
    if (signUpAuth.passwordSignUp === '') { dispatch(onEmptySignUpPasswordClick()) }
    else {

        firebaseAuth.createUserWithEmailAndPassword(signUpAuth.emailSignUp, signUpAuth.passwordSignUp)
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            })
    }
}

const initialState = {
    emailSignUp: '',
    passwordSignUp: '',
    errorTextEmailSignUp: '',
    errorTextPasswordSignUp: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_SIGN_UP_CHANGE:
            return {
                ...state,
                emailSignUp: action.email
            }
        case PASSWORD_SIGN_UP_CHANGE:
            return {
                ...state,
                passwordSignUp: action.password
            }
        case EMPTY_SIGN_UP_EMAIL:
            return {
                ...state,
                errorTextEmailSignUp: 'This field is required'
            }
        case EMPTY_SIGN_UP_PASSWORD:
            return {
                ...state,
                errorTextPasswordSignUp: 'This field is required'
            }
        case CLEAR_STATE:
            return initialState
        default:
            return state
    }
}
