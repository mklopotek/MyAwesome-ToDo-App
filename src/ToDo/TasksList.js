import React from 'react'
import PaperRefined from '../GlobalComponents/PaperRefined'
import Task from './Task';
import { List } from 'material-ui/List';

const TaskList = (props) => (
    <PaperRefined>
        <div>
            <List>

                <Task
                    task={'blablabla'}
                    category={'must have'}
                />
                <Task
                    task={'lalallalala'}
                    category={'can have'}
                />
            </List>
        </div>

    </PaperRefined>
)


export default TaskList