import React from 'react';

import Category from '../GlobalComponents/Category'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class AddTaskForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasksArray: [null],
            howManySubTaskFields: 0,
            category: 'Must have'
        }
    }

    onCategoryChangeHandler = (event, index, choosenCategory) => {
        this.setState({ category: choosenCategory })
    }

    onChangeTaskText = (event, number) => {
        const textTask = event.target.value
        const tasksArray = this.state.tasksArray

        const newTasksArray = tasksArray.map((e, index) => index === number ? textTask : e)

        this.setState({
            tasksArray: newTasksArray
        })
    }

    onAddSubTaskHandlerClick = () => {
        let newTasksArray = this.state.tasksArray
        newTasksArray.push(null)

        this.setState({ howManySubTaskFields: this.state.howManySubTaskFields + 1,
            tasksArray: newTasksArray
        })
    }

    subTaskFieldsMaker = () => {
        let subTaskFieldsArray = Array(this.state.howManySubTaskFields).fill(null)
        const styles = {
            width: '30vw',
        }

        return subTaskFieldsArray.map((e, index) =>
            <div
                key={index}
            >
                <TextField
                    floatingLabelText="My subTask..."
                    style={styles}
                    onChange={(e) => this.onChangeTaskText(e, index+1)}
                />
            </div>
        )

    }

    render() {
        const styles = {
            width: '30vw',
        }

        return (
            <div className='to-do__add-task-form'>
                <h3>Add new task to your To Do List!</h3>
                <Category
                    styles={styles}
                    currentCategory={this.state.category}
                    onCategoryChangeHandler={this.onCategoryChangeHandler}
                />
                <div>
                    <TextField
                        style={styles}
                        floatingLabelText="My task..."
                        onChange={(e) => this.onChangeTaskText(e, 0)}
                    />
                </div>
                {this.subTaskFieldsMaker(this.state.howManySubTaskFields)}
                <div>
                    <RaisedButton
                        style={styles}
                        label="Add subtask"
                        secondary={true}
                        onClick={this.onAddSubTaskHandlerClick}
                    />
                </div>
                <div>
                    <RaisedButton
                        style={styles}
                        label="Add task to TO DO"
                        primary={true}
                    />
                </div>
            </div>
        )
    }
}
export default AddTaskForm