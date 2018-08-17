import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PaperRefined from '../GlobalComponents/PaperRefined';

const SignUp = (props) => (
    <PaperRefined>
    <div>
        <h1>Sign Up</h1>
                <TextField
                    floatingLabelText="E-mail"
                    value={props.emailValue}
                    type={'email'}
                    errorText={props.errorTextEmail}
                    onChange={props.onEmailSignUpChangeAction}
                />
            </div>
            <div>
                <TextField
                    floatingLabelText="Password"
                    value={props.passwordValue}
                    type={'password'}
                    errorText={props.errorTextPassword}
                    onChange={props.onPasswordSignUpChangeAction}
                />
            </div>
            <div>
                <RaisedButton
                    label="Sign Up"
                    primary={true}
                    onClick={props.onSignUpClickAction}
                />
            </div>
    </PaperRefined>
)

export default SignUp