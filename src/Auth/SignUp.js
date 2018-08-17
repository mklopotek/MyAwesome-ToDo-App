import React from 'react'
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
                    onChange={props.onEmailChangeAction}
                />
            </div>
            <div>
                <TextField
                    floatingLabelText="Password"
                    value={props.passwordValue}
                    type={'password'}
                    errorText={props.errorTextPassword}
                    onChange={props.onPasswordChangeAction}
                />
            </div>
            <div>
                <RaisedButton
                    label="Login"
                    primary={true}
                    onClick={props.onLogInClickAction}
                />
            </div>
    </div>
    </PaperRefined>
)

export default SignUp