import React from 'react'

const CurrentSection = props => {
    return (
        <div className='current-section'>
            <h6>Currently...</h6>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export default CurrentSection
