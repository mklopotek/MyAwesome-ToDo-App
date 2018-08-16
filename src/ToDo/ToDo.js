import React from 'react'
import PaperRefined from '../GlobalComponents/PaperRefined'

import AddTaskForm from './AddTaskForm'
import TaskList from './TasksList';
import Searcher from './Searcher'

const ToDo = () => {
    const styles = {
        center: {
            textAlign: 'center',
            padding: '20px'
        },

    }

    return (
        <PaperRefined>
            <div className='to-do'>
                <div style={styles.center}>
                    <h1> Hi [tutaj imie z logowania] !</h1>
                    <h2>Welcome to my awesome To-Do App! </h2>
                </div>
                <AddTaskForm />
                <Searcher />
                <TaskList />
            </div>
        </PaperRefined>
    )
}


export default ToDo 