import React from 'react'
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
import { database } from '../firebaseConfig';

const styles = {

}

const Task = (props) => (
    <div className='list-item'>
        <ListItem
            primaryText={props.task}
            leftCheckbox={
                <Checkbox 
                value={props.isCompleted}
                onCheck={(e) => isCompletedHandler(e.target.checked, props.id)}
                />
            }
        />
        <Chip
        className={'list-item__chip'}
        >
            {props.category}
        </Chip>
        <IconButton
            className={'list-item__icon-delete'}
            tooltip="Delete this task">
            <DeleteIcon
                tooltip="Delete"
            />
        </IconButton>
    </div>
)

const isCompletedHandler = (isComplete, id) => {
    database
    .ref(`tasks/${id}/isComplete`)
    .set(isComplete)   
}

export default Task