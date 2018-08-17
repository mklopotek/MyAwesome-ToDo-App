import React from 'react'
import { connect } from 'react-redux'
import {
    onEmailChangeAction,
    onPasswordChangeAction,
    onLogInClickAction,
    logOutAction
} from '../state/auth'

import LogInByEmailAndPassword from './LogInByEmailAndPassword'


const Auth = (props) => (

    props._user ?
        <div>
            <button
                onClick={props._logOutAction}
            >LogOut</button>
            {props.children}
        </div>
        :
        <div>
            <LogInByEmailAndPassword
                onLogInClickAction={props._onLogInClickAction}
                onPasswordChangeAction={props._onPasswordChangeAction}
                onEmailChangeAction={props._onEmailChangeAction}
                passwordValue={props._passwordValue}
                emailValue={props._emailValue}
                errorTextPassword={props._errorTextPassword}
                errorTextEmail={props._errorTextEmail}
            />
        </div>
)


const mapStateToProps = (state) => ({
    _emailValue: state.auth.email,
    _passwordValue: state.auth.password,
    _user: state.auth.user,
    _errorTextPassword: state.auth.errorTextPassword,
    _errorTextEmail: state.auth.errorTextEmail
})

const mapDispatchToState = (dispatch) => ({
    _onEmailChangeAction: (event) => dispatch(onEmailChangeAction(event.target.value)),
    _onPasswordChangeAction: (event) => dispatch(onPasswordChangeAction(event.target.value)),
    _onLogInClickAction: () => dispatch(onLogInClickAction()),
    _logOutAction: () => dispatch(logOutAction())
})

export default connect(mapStateToProps, mapDispatchToState)(Auth)