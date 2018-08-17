import React from 'react'
import { connect } from 'react-redux'
import { List } from 'material-ui/List'

import PaperRefined from '../GlobalComponents/PaperRefined'
import Loading from '../GlobalComponents/Loading'
import Task from './Task'


const TaskList = (props) => (
    <PaperRefined>
        {/* <div className='to-do__task-list'> */}
        <List
            className='to-do__task-list'
        >

         {props._tasks ?
            props._tasks.map(e => {
                return (
                    <Task
                        task={e.task}
                        category={e.category}
                        isCompleted={e.isCompleted}
                        id={e.id}
                    />)
            }
            )
            :
            <Loading 
            size={100}
            thickness={20}
            />
        }
        </List>
        {/* </div> */}

    </PaperRefined>
)

const mapStateToProps = state => ({
    _tasks: state.tasksList.tasks
})

export default connect(mapStateToProps, null)(TaskList)


