import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    position: 'relative',
    top: '20%',
    left: '50%',
    color: 'purpleA700'
}

const Loading = () => (
    <div className='to-do__loading' style={styles}>
        <CircularProgress size={150} thickness={50} />
    </div>
)

export default Loading