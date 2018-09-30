import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectImage = props => {
    let dest = props.name
    if(dest === 'Task manager design') {
        dest = 'Task-manager-design'
    }
    else if (dest === 'Until the Stars are Dead site') {
        dest = 'Until-the-stars-are-dead-site'
    }
    return (
        <div
        className='project-image'
        style={{ backgroundColor: '#' + props.bgColor }}>
            <span className='helper'></span>

            <NavLink to={'/' + dest}>
                <img src={props.src}
                alt='project thumbnail'
                onClick={() => {window.scrollTo(0, 0)}} />
            </NavLink>
        </div>
    )
}

export default ProjectImage
