import React from 'react'
import { connect } from 'react-redux'

import AddTaskForm from './AddTaskForm'
import TaskList from './TasksList';
import Searcher from './Searcher'

const ToDo = (props) => {
    const styles = {
        center: {
            textAlign: 'center',
            padding: '20px'
        },
    }

    return (
            <div className='to-do'>
                <div style={styles.center}>
                    <h1> Hi { props._userName ? props._userName : props._userEmail} !</h1>
                    <h2>Welcome to my awesome to do app! </h2>
                </div>
                <AddTaskForm />
                <Searcher />
                <TaskList />
            </div>
    )
}

const mapStateToProps = (state) => ({
    _userEmail: state.auth.user.email,
    _userName: state.auth.user.displayName
})

export default connect(mapStateToProps)(ToDo) 