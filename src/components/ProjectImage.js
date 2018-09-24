import React from 'react'

const ProjectImage = props => {
    return (
        <div
        className='project-image'
        style={{ backgroundColor: '#' + props.bgColor }}>
            <span className="helper"></span>
            <a
            href={props.link}
            target='_blank'>
                <img src={props.src}
                alt='project thumbnail' />
            </a>
        </div>
    )
}

export default ProjectImage
