import React from 'react'

const ProjectTitle = props => {
    return (
        <a href={props.link}
        className={props.link ? 'project-title-link' : 'project-title-no-link'}
        target='_blank'>
            {props.name}
        </a>
    )
}

export default ProjectTitle
