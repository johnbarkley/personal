import React from 'react'

const Link = props => {
    let mTop = 15
    if(props.value === 'jgb2eb@virginia.edu') {
        mTop = 20
    }

    return (
        <div
        className='link'
        style={{ marginTop: mTop }}>
            <a href={props.dest} target='_blank'>{props.value}</a>
        </div>
    )
}

export default Link
