import React from 'react'
import { connect } from 'react-redux'
import {
    onEmailChangeAction,
    onPasswordChangeAction,
    onLogInClickAction,
    logOutAction
} from '../state/auth'
import { 
    onEmailSignUpChangeAction,
    onPasswordSignUpChangeAction,
    onSignUpClickAction
 } from '../state/signUpAuth';
import RaisedButton from 'material-ui/RaisedButton';

import LogInByEmailAndPassword from './LogInByEmailAndPassword'
import SignUp from './SignUp'


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
                <LogInByEmailAndPassword
                    onLogInClickAction={props._onLogInClickAction}
                    onPasswordChangeAction={props._onPasswordChangeAction}
                    onEmailChangeAction={props._onEmailChangeAction}
                    passwordValue={props._passwordValue}
                    emailValue={props._emailValue}
                    errorTextPassword={props._errorTextPassword}
                    errorTextEmail={props._errorTextEmail}
                />
                <SignUp 
                 onSignUpClickAction={props._onSignUpClickAction}
                 onPasswordSignUpChangeAction={props._onPasswordSignUpChangeAction}
                 onEmailSignUpChangeAction={props._onEmailSignUpChangeAction}
                 passwordValue={props._passwordSignUp}
                 emailValue={props._emailSignUp}
                 errorTextPassword={props._errorTextPasswordSignUp}
                 errorTextEmail={props._errorTextEmailSignUp}
                />
            </div>
            )
            
            
const mapStateToProps = (state) => ({
                _emailValue: state.auth.email,
            _passwordValue: state.auth.password,
            _user: state.auth.user,
            _errorTextPassword: state.auth.errorTextPassword,
            _errorTextEmail: state.auth.errorTextEmail,

            _emailSignUp: state.signUpAuth.emailSignUp,
            _passwordSignUp: state.signUpAuth.passwordSignUp,
            _errorTextEmailSignUp: state.signUpAuth.errorTextEmailSignUp,
            _errorTextPasswordSignUp: state.signUpAuth.errorTextPasswordSignUp
        })
        
const mapDispatchToState = (dispatch) => ({
                _onEmailChangeAction: (event) => dispatch(onEmailChangeAction(event.target.value)),
            _onPasswordChangeAction: (event) => dispatch(onPasswordChangeAction(event.target.value)),
            _onLogInClickAction: () => dispatch(onLogInClickAction()),
            _logOutAction: () => dispatch(logOutAction()),

            _onEmailSignUpChangeAction: (event) => dispatch(onEmailSignUpChangeAction(event.target.value)),
            _onPasswordSignUpChangeAction: (event) => dispatch(onPasswordSignUpChangeAction(event.target.value)),
            _onSignUpClickAction: () => dispatch(onSignUpClickAction())
        })
        
export default connect(mapStateToProps, mapDispatchToState)(Auth)