import React from 'react'

const CurrentItem = props => {
    return (
        <li className='current-item'>
            <span className='emoji'>{props.emoji}</span>
            <span className='activity'>{props.activity}</span>
        </li>
    )
}

export default CurrentItem
