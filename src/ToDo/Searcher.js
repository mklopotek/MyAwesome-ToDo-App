import React from 'react'
import PaperRefined from '../GlobalComponents/PaperRefined';
import IconButton from 'material-ui/IconButton';
import Bookmark from 'material-ui/svg-icons/action/bookmark'
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border'
import Book from 'material-ui/svg-icons/action/book'
import { TextField } from 'material-ui';

const Searcher = (props) => {
    const styles = {
        width: '30vw'
    }

    return (
    <PaperRefined>
        <div>
            <TextField 
            floatingLabelText="Find your task..."
            style={styles}
            />
        </div>
        <div>
            <IconButton
                tooltip="Tasks completed">
                <Bookmark
                    onClick={() => true}
                />
            </IconButton>
            <IconButton
                tooltip="Tasks uncompleted">
                <BookmarkBorder
                    onClick={() => false}
                />
            </IconButton>
            <IconButton
                tooltip="All tasks">
                <Book
                    onClick={() => null}
                />
            </IconButton>
        </div>
    </PaperRefined>
)}


export default Searcher 