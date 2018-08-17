import React from 'react'
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';

const styles = {

}

const Task = (props) => (
    <div className='list-item'>
        <ListItem
            primaryText={props.task}
            leftCheckbox={
                <Checkbox />
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

export default Task