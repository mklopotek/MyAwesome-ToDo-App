import React from 'react'
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';

const Task = (props) => (
    <div className='list-item'>
        <ListItem
            primaryText={props.task}
            leftCheckbox={
                <Checkbox />
            }
        />
        <IconButton
            className={'list-item__icon-delete'}
            tooltip="Delete this task">
            <DeleteIcon
                tooltip="Delete"
            />
        </IconButton>
        <Chip>
          {props.category}
        </Chip>
    </div>
)

export default Task