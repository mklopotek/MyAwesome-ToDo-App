import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    color: 'purpleA700',
    margin: 'auto',
}

const Loading = ({ size = 150, thickness = 50 }) => (
    <div className='to-do__loading' style={styles}>
        <CircularProgress size={size} thickness={thickness} />
    </div>
)

export default Loading