import React from 'react'
import { connect } from 'react-redux'
import { logOutAction } from '../state/auth'
import {
    onEmailLoginChangeAction,
    onPasswordLoginChangeAction,
    onLogInClickAction
} from '../state/logInAuth'
import {
    onEmailSignUpChangeAction,
    onPasswordSignUpChangeAction,
    onSignUpClickAction
} from '../state/signUpAuth';

import { onLogInByGoogleClickHandler } from '../state/logInGoogleAuth'

import RaisedButton from 'material-ui/RaisedButton';

import EmailAndPasswordForm from './EmailAndPasswordForm'
import PaperRefined from '../GlobalComponents/PaperRefined';


const Auth = (props) => (

    props._user ?
        <PaperRefined
            className='to-do-container'
        >
            <RaisedButton
                className='logout-button'
                label="Logout"
                primary={true}
                onClick={props._logOutAction}
            />
            {props.children}
        </PaperRefined>
        :
        <div className='login-page'>
            <h1>Hi! Nice to meet you! :) </h1>
            <h1>If you want to login as a guest</h1>
            <h1>please use this date:</h1>
            <h2>e-mail: guest@guest.pl </h2>
            <h2>password: 123456</h2>
            <div className='login-page-forms'>
                <EmailAndPasswordForm
                    onClickAction={props._onLogInClickAction}
                    onPasswordChangeAction={props._onPasswordLoginChangeAction}
                    onEmailChangeAction={props._onEmailLoginChangeAction}
                    passwordValue={props._passwordLogin}
                    emailValue={props._emailLogin}
                    errorTextPassword={props._errorTextPasswordLogin}
                    errorTextEmail={props._errorTextEmailLogin}
                    label={'Login'}
                />
                <PaperRefined>
                    <h1>Login by Google</h1>
                    <RaisedButton
                        label="Login"
                        primary={true}
                        onClick={props._onLogInByGoogleClickHandler}
                    />
                </PaperRefined>
                <div className='login-page-forms'>
                    <EmailAndPasswordForm
                        onClickAction={props._onSignUpClickAction}
                        onPasswordChangeAction={props._onPasswordSignUpChangeAction}
                        onEmailChangeAction={props._onEmailSignUpChangeAction}
                        passwordValue={props._passwordSignUp}
                        emailValue={props._emailSignUp}
                        errorTextPassword={props._errorTextPasswordSignUp}
                        errorTextEmail={props._errorTextEmailSignUp}
                        label={'Sign Up'}
                    />
                </div>
            </div>
        </div>
)


const mapStateToProps = (state) => ({
    _user: state.auth.user,

    _emailLogin: state.logInAuth.emailLogin,
    _passwordLogin: state.logInAuth.passwordLogin,
    _errorTextPasswordLogin: state.logInAuth.errorTextPasswordLogin,
    _errorTextEmailLogin: state.logInAuth.errorTextEmailLogin,

    _emailSignUp: state.signUpAuth.emailSignUp,
    _passwordSignUp: state.signUpAuth.passwordSignUp,
    _errorTextEmailSignUp: state.signUpAuth.errorTextEmailSignUp,
    _errorTextPasswordSignUp: state.signUpAuth.errorTextPasswordSignUp
})

const mapDispatchToState = (dispatch) => ({
    _logOutAction: () => dispatch(logOutAction()),

    _onEmailLoginChangeAction: (event) => dispatch(onEmailLoginChangeAction(event.target.value)),
    _onPasswordLoginChangeAction: (event) => dispatch(onPasswordLoginChangeAction(event.target.value)),
    _onLogInClickAction: () => dispatch(onLogInClickAction()),

    _onEmailSignUpChangeAction: (event) => dispatch(onEmailSignUpChangeAction(event.target.value)),
    _onPasswordSignUpChangeAction: (event) => dispatch(onPasswordSignUpChangeAction(event.target.value)),
    _onSignUpClickAction: () => dispatch(onSignUpClickAction()),

    _onLogInByGoogleClickHandler: () => dispatch(onLogInByGoogleClickHandler())
})

export default connect(mapStateToProps, mapDispatchToState)(Auth)