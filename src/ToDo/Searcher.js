import React from 'react'
import PaperRefined from '../GlobalComponents/PaperRefined';
import IconButton from 'material-ui/IconButton';
import Bookmark from 'material-ui/svg-icons/action/bookmark'
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border'
import Book from 'material-ui/svg-icons/action/book'
import { TextField } from 'material-ui';
import { connect } from 'react-redux'
import { onFilterValueHandlerAction, onFilterCompleteHandlerAction } from '../state/searcher'

const Searcher = (props) => {
    const styles = {
        width: '30vw'
    }

    return (
    <PaperRefined>
        <div className='to-do__searcher'>
        <div>
            <TextField 
            floatingLabelText="Find your task..."
            style={styles}
            onChange={(e)=> props._onFilterValueHandlerAction(e.target.value)}
            />
        </div>
        <div>
            <IconButton
                tooltip="Tasks completed">
                <Bookmark
                    onClick={() => props._onFilterCompleteHandlerAction(true)}
                />
            </IconButton>
            <IconButton
                tooltip="Tasks uncompleted">
                <BookmarkBorder
                    onClick={() => props._onFilterCompleteHandlerAction(false)}
                />
            </IconButton>
            <IconButton
                tooltip="All tasks">
                <Book
                    onClick={() => props._onFilterCompleteHandlerAction(null)}
                />
            </IconButton>
        </div>
        </div>
    </PaperRefined>
)}


const mapDispatchToProps = (dispatch) => ({
    _onFilterValueHandlerAction: (value) => dispatch(onFilterValueHandlerAction(value)),
    _onFilterCompleteHandlerAction: (value) => dispatch(onFilterCompleteHandlerAction(value))
})

export default connect(null, mapDispatchToProps)(Searcher) 