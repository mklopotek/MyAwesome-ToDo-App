import React from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PaperRefined from '../GlobalComponents/PaperRefined';

const LogInByEmailAndPassword = (props) => (
    <div>
        <PaperRefined>
           <div>
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
            </PaperRefined>
    </div>
)


export default LogInByEmailAndPassword