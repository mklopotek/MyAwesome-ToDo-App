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

            {
                
                props._tasks ?
                props._tasks
                    .filter(e =>
                        e.task.toLowerCase().includes(props._filterValue.toLowerCase())
                    )
                    .filter(e => 
                        props._filterComplete === null || props._filterComplete === e.isComplete
                    )
                    .map(e => {
                        return (
                            <Task
                                key={e.id}
                                task={e.task}
                                category={e.category}
                                isComplete={e.isComplete}
                                id={e.id}
                            />)
                    })
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
    _tasks: state.tasksList.tasks,
    _filterValue: state.searcher.filterValue,
    _filterComplete: state.searcher.filterComplete
})

export default connect(mapStateToProps, null)(TaskList)


