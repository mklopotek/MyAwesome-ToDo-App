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
import RaisedButton from 'material-ui/RaisedButton';

import EmailAndPasswordForm from './EmailAndPasswordForm'


const Auth = (props) => (

    props._user ?
        <div>
            <RaisedButton
                label="Logout"
                primary={true}
                onClick={props._logOutAction}
            />
            {props.children}
        </div>
        :
        <div className='login-page'>
            <h1>Hi! Nice to meet you! :) </h1>
            <div className='login-page-forms'>
                <h1> You can sign up here: </h1>
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
            <h1> or if you want to login as a guest</h1>
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
    _onSignUpClickAction: () => dispatch(onSignUpClickAction())
})

export default connect(mapStateToProps, mapDispatchToState)(Auth)