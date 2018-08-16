import React from 'react';

import Category from '../GlobalComponents/Category'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux'
import { onTaskChangeAction, onCategoryChangeAction } from '../state/newTask'

const AddTaskForm = (props) => {

    const styles = {
        width: '30vw'
    }

    return (
        <div className='to-do__add-task-form'>
            <h3>Add new task to your To Do List!</h3>
            <Category
                styles={styles}
                currentCategory={props._category}
                onCategoryChangeAction={props._onCategoryChangeAction}
            />
            <div>
                <TextField
                    style={styles}
                    floatingLabelText="My task..."
                    value={props._task}
                    onChange={props._onTaskChangeAction}
                />
            </div>

            <div>
                <RaisedButton
                    style={styles}
                    label="Add task"
                    primary={true}
                    onClick={() => null}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    _task: state.newTask.task,
    _category: state.newTask.category
})

const mapDispatchToProps = (dispatch) => ({
    _onTaskChangeAction: (event, value) => dispatch(onTaskChangeAction(event, value)),
    _onCategoryChangeAction: (event, index, choosenCategory) => dispatch(onCategoryChangeAction(event, index, choosenCategory))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm)