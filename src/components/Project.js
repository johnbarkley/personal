import React from 'react'
import ProjectTitle from './ProjectTitle'
import ProjectBody from './ProjectBody'
import ProjectImage from './ProjectImage'

const Project = props => {
    let mTop = 80
    if(props.name === 'Mockupp' || props.name === 'Macsha') {
        mTop = 40
    }

    const macsha = props.name === 'Macsha'

    return (
        <div
        className='project'
        style={{ marginTop: mTop }}>
            <div className={ !macsha ? 'project-text' : 'project-text-no-image'}>
                <ProjectTitle
                name={props.name}
                link={props.link} />
                <ProjectBody>
                    {props.children}
                </ProjectBody>
            </div>

            { macsha ? null : (
                    <ProjectImage
                    src={props.src}
                    bgColor={props.bgColor}
                    link={props.link} />
                )
            }
        </div>
    )
}

export default Project
