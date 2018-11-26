import React from 'react'
import { NavLink } from 'react-router-dom'

const ProjectTitle = props => {
    let dest = props.name
    if(dest === 'Task manager design') {
        dest = 'Task-manager-design'
    }
    else if (dest === 'Until the Stars are Dead site') {
        dest = 'Until-the-stars-are-dead-site'
    }
    else if (dest === 'edX redesign') {
        dest = 'edX-redesign'
    }

    if(dest !== 'Macsha') {
        return (
            <NavLink to={'/' + dest}>
                <p
                className='project-title-link'
                onClick={() => {window.scrollTo(0, 0)}}>
                    {props.name}
                </p>
            </NavLink>
        )
    }
    else {
        return (
            <p className='project-title-no-link'>
                {dest}
            </p>
        )
    }
}

export default ProjectTitle
