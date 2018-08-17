import React from 'react'

const LogInByEmailAndPassword = (props) => (
    <div>
        <input
            placeholder='email'
            type='email'
            value={props.emailValue}
            onChange={props.onEmailChangeAction}
        />
        <input
            placeholder='password'
            type='password'
            value={props.passwordValue}
            onChange={props.onPasswordChangeAction}
        />
        <button
            onClick={props.onLogInClickAction}
        >
            Login
            </button>
    </div>
)


export default LogInByEmailAndPassword