import { auth as firebaseAuth } from '../firebaseConfig'

import { fetchTasksAction } from './tasksList'

// const SET_USER = 'auth/SIGN_UP'

const EMAIL_SIGN_UP_CHANGE = 'auth/EMAIL_SIGN_UP_CHANGE'
const PASSWORD_SIGN_UP_CHANGE = 'auth/PASSWORD_SIGN_UP_CHANGE'
const EMPTY_SIGN_UP_EMAIL = 'auth/EMPTY_SIGN_UP_EMAIL'
const EMPTY_SIGN_UP_PASSWORD = 'auth/EMPTY_SIGN_UP_PASSWORD'

export const onEmailSignUpChangeAction = value => ({
    type: EMAIL_SIGN_UP_CHANGE,
    email: value
})

export const onPasswordSignUpChangeAction = value => ({
    type: PASSWORD_SIGN_UP_CHANGE,
    password: value
})

// export const setUserAction = user => ({
//     type: SET_USER,
//     user
// })

export const onEmptySignUpEmailClick = () => ({
    type: EMPTY_SIGN_UP_EMAIL
})

export const onEmptySignUpPasswordClick = () => ({
    type: EMPTY_SIGN_UP_PASSWORD
})

// export const initAuthStateListening = () => (dispatch, getState) => {
//     firebaseAuth.onAuthStateChanged(user => {

//         dispatch(setUserAction(user)) //user is null if user is logged out and user in state will be null so everything will be as initial :)

//         if (user) {
//             return dispatch(fetchTasksAction())
//         } else {

//         }
//     })
//     //jeśli użytkownik jest zalogowany to w onAuthStateChanged dostaje user'a
// }


export const onSignUpClickAction = () => (dispatch, getState) => {
    const { signUpAuth } = getState()
debugger
    firebaseAuth.createUserWithEmailAndPassword(signUpAuth.emailSignUp, signUpAuth.passwordSignUp)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        })

    // console.dir(firebaseAuth)

    // if (auth.email === '') {
    //     dispatch(onEmptySignUpEmailClick())
    // }
    // if (auth.password === '') { dispatch(onEmptyPasswordClick()) }
    // else {
    //     firebaseAuth.onEmptySignUpPasswordClick(auth.email, auth.password)
    //         .then(() => console.log('LoginOk'))
    //         .catch(function (error) {
    //             const errorMessage = error.message;
    //             alert(errorMessage)
    //         })
    // }
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
        default:
            return state
    }
}
