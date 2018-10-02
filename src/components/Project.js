import React from 'react'
import ProjectTitle from './ProjectTitle'
import ProjectBody from './ProjectBody'
import ProjectImage from './ProjectImage'

const Project = props => {
    let mTop = '5.5vw'
    if(props.name === 'Mockupp' || props.name === 'Macsha') {
        mTop = '3vw'
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
                    link={props.link}
                    name={props.name} />
                )
            }
        </div>
    )
}

export default Project
