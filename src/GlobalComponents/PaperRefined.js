import React from 'react'
import Paper from 'material-ui/Paper'

const styles = {
    margin: '40px',
    padding: '40px',
}

const PaperRefined = (props) => (
    <Paper style={styles}>
        {props.children}
    </Paper>
)

export default PaperRefined