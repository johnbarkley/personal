import React from 'react'
import TextBlock from './TextBlock'

import mockuppInterface from '../assets/mockuppInterface.png'
import throwwProjects from '../assets/throwwProjects.png'
import tasksInterface from '../assets/tasksInterface.png'
import tasksZoom from '../assets/tasksZoom.png'
import taskNotJoined from '../assets/taskNotJoined.png'
import taskJoined from '../assets/taskJoined.png'

const ProjectPage = props => {
    const imageCenter = {
        width: '75%',
        margin: '20px auto',
        display:'block'
    }

    let content
    switch(props.name) {
        case 'Mockupp':
            content = (
                <div className='page'>
                    <div
                    className='page-hero'
                    style={{backgroundColor: '#' + props.bgColor}}>
                        <h1>{props.name}</h1>
                        <div className='page-links'>
                            <a href='https://johnbarkley.github.io/mockupp'
                            target='_blank'
                            rel='noopener noreferrer'>Visit site</a>
                            <a href='https://github.com/johnbarkley/mockupp/tree/master'
                            target='_blank'
                            rel='noopener noreferrer'>Source</a>
                        </div>
                        <img src={props.src} alt='hero pic' />
                    </div>

                    <div
                    className='page-body'>
                        <h6 className='project-page-title'>Concept</h6>
                        <TextBlock>
                            <p>Mockupp is a tool built with React for creating browser-style mockups for presentations and portfolios. You upload your design and can customize the browser appearance and background. The app is in its early stages of development - I’m aware that there are bugs that exist and I’m currently working on fixing them as well as adding new features.</p>
                            <p>I built Mockupp after spending a lot of time on sites like Dribbble where the majority of users showcase their site designs in a mockup browser with a drop shadow and on top of a solid background or a simple pattern. Although it’s a relatively quick process to create such a mockup in Figma, Sketch, or another design software, I wanted to create an app that allowed for such a presentation in seconds. In addition, it also allows more amateur designers and developers (like myself) to present their work in a manner that looks more professional. These mockups can be used in a personal portfolio, on showcase sites like Dribbble or Behance, or even in a presentation in a professional setting (although I can’t say I’ve done it yet myself <span role='img' aria-label='wink'>😉</span>). I wanted to add features that would improve the presentation of the design and have some more ideas in mind (details below).</p>
                            <p>Features include:</p>
                        </TextBlock>
                        <ul>
                            <li>Upload design image (PNG, JPG, GIF, or SVG)</li>
                            <li>Customize browser:</li>
                            <li id='indented'>URL</li>
                            <li id='indented'>Navigation button style</li>
                            <li id='indented'>Drop shadow</li>
                            <li>Customize background:</li>
                            <li id='indented'>Choose color with color picker popup tool</li>
                            <li id='indented'>Upload image (PNG, JPG, GIF, or SVG)</li>
                            <li>Full screen display</li>
                            <li>More coming soon...</li>
                        </ul>

                        <h6 className='project-page-title'>Interface</h6>
                        <img src={mockuppInterface} alt='Mockupp interface' />

                        <h6 className='project-page-title'>Coming soon</h6>
                        <ul>
                            <li>Full site located at <a href='http://www.mockupp.io' target='_blank' rel='noopener noreferrer'>mockupp.io</a></li>
                            <li id='indented'>React SPA including above landing page with samples</li>
                            <li>Additional features:</li>
                            <li id='indented'>Chrome-style nav bar option in addition to the current Safari-style default</li>
                            <li id='indented'>Two-color split backgrounds</li>
                            <li id='indented'>Show/hide:</li>
                            <li id='indented-double'>Entire nav bar</li>
                            <li id='indented-double'>Three browser nav buttons</li>
                            <li id='indented'>Resize browser mockup as resizes window (more of a bug fix than a new feature!)</li>
                            <li id='indented'>Other features that I’d like to add in the future:</li>
                            <li id='indented-double'>Upload Figma & Sketch files</li>
                            <li id='indented-double'>Drag and drop file upload</li>
                            <li id='indented-double'>Other built-in background styles, including integrating third-party tools (gradients, etc.)</li>
                            <li id='indented-double'>Upload a larger image, such as a full-length page of a site, and allow for scrolling</li>
                        </ul>
                    </div>
                </div>
            )
            break
        case 'Throww':
            content = (
                <div className='page'>
                    <div
                    className='page-hero'
                    style={{backgroundColor: '#' + props.bgColor}}>
                        <h1>{props.name}</h1>
                        <div className='page-links'>
                            <a href='https://github.com/johnbarkley/throww'
                            target='_blank'
                            rel='noopener noreferrer'>Source</a>
                        </div>
                        <img src={props.src} alt='hero pic' />
                    </div>

                    <div
                    className='page-body'>
                        <h6 className='project-page-title'>Concept</h6>
                        <TextBlock>
                            <p style={{fontStyle:'italic'}}>Updates will be added below as I progress with the design & development.</p>
                            <p>The idea for Throww came to me as I worked on frontend projects over the last year or so. For every project, I always had dozens of open tabs of different sites, images, fonts, and colors to get ideas and inspiration for my design. I realized that having a tool where I could store all of my different sources of inspiration in one place and manage them by project would be very useful in the design and development process. Up until now, I’ve just used notes with links, text, and occasionally images, and I think that having a web app where you can create a new project, upload your different sources of inspiration, and have them handled automatically and presented in a way that’s easy to iterate over and draw from would expedite and improve the process.</p>
                            <p>The name comes from the concept of a moodboard, of sorts, as a place to organize your inspiration for a project, and the action of "throwing" something new onto the board (and of course one 'w' wouldn’t be available!).</p>
                        </TextBlock>

                        <h6 className='project-page-title'>Development</h6>
                        <TextBlock>
                            <p>I’m currently designing the project and board interfaces and have done some preliminary/static development in React. I hope to launch towards the end of this fall.</p>
                            <p>Current plan for features/items that can be 'thrown' are:</p>
                        </TextBlock>
                        <ul>
                            <li>Sites (upload via URL, preview and metadata are generated and displayed)</li>
                            <li>Images (upload via URL/file, formatted & displayed)</li>
                            <li>Fonts (upload via Google Fonts, formatted & displayed with editable dummy text)</li>
                            <li>Colors (select with color picker, option to create a palette of multiple colors)</li>
                        </ul>
                        <TextBlock>
                            <p>Each type of item will have certain formatting options.</p>
                        </TextBlock>

                        <h6 className='project-page-title'>Design</h6>
                        <TextBlock>
                            <p>Below is an early-stage design of the project interface. I’ll add more images as I continue with the design.</p>
                        </TextBlock>
                        <img src={throwwProjects} alt='Throww projects view' />
                    </div>
                </div>
            )
            break
        case 'Task manager design':
            content = (
                <div className='page'>
                    <div
                    className='page-hero'
                    style={{backgroundColor: '#' + props.bgColor}}>
                        <h1 style={{paddingBottom: 0}}>{props.name}</h1>
                        <img src={props.src} alt='hero pic' />
                    </div>

                    <div
                    className='page-body'>
                        <h6 className='project-page-title'>Concept</h6>
                        <TextBlock>
                            <p>In my internship this past summer, although I worked on a team of only a few people, I realized the importance of communication and coordination between team members. I also began to appreciate the value of a task manager to facilitate the development process of a larger project. In the office, we used a white board and sticky notes, and for my own work I kept a text file with a list of my various tasks. Although this system was functional, I felt like it could be improved upon with a better tool.</p>
                            <p>Of course, there are a multitude of sophisticated project management tools available as well as simpler to-do list-type applications, but I wanted to give my own design a shot to see what I could come up with.</p>
                            <p>The task manager I designed is meant to serve as a collaborative planning & management tool for a team working on the same product or project. My two main focuses were <span id='bold-num'>(1)</span> developing a hierarchical structure that is easy to rearrange and manipulate and <span id='bold-num'>(2)</span> emphasizing the collaborative nature and features of the tool.</p>
                        </TextBlock>
                        <img src={tasksInterface} alt='tasks interface' />

                        <h6 className='project-page-title'>Hierarchical structure</h6>
                        <TextBlock>
                            <p>I wanted to support the implementation of a hierarchical task structure, meaning users can break a task up into multiple subtasks. This was something that I always did in my text file over the summer, albeit with indentation. In this regard, I wanted to have a clear and evident visual cue that displayed the task structure. As such, subtasks are indented significantly and are also made up of thinner bars, thus reflecting their relationship to the parent.</p>
                            <p>Another aspect of the hierarchical structure that I wanted to facilitate was the manipulation and rearrangement of the task bars. I wanted to design a structure that was easy to rearrange via drag-and-drop, which is why I picked bars instead of simple items without any visible container.</p>
                        </TextBlock>
                        <img src={tasksZoom} alt='tasks zoom' style={imageCenter}  />

                        <h6 className='project-page-title'>Collaboration & communication</h6>
                        <TextBlock>
                            <p>I wanted to facilitate collaboration and coordination between team members in the following ways:</p>
                        </TextBlock>
                        <ul>
                            <li>Establish the creator/leader of the task - seen on the right side of a task bar. Leaders can be assigned to subtasks as well.</li>
                            <li>Define participants in the specific task - click + to show you’re joining a task. Then, the green check stands out from the primarily white elements to draw the user to their personal tasks. The icon and number tell you how many team members are currently working on a given task.</li>
                            <li>Emphasize a user’s status as a member of their team - profile section on left sidebar set up in a structural nature with the personal profile below that of the team.</li>
                        </ul>
                        <img src={taskNotJoined} alt='Task not joined' style={imageCenter} />
                        <img src={taskJoined} alt='Task joined' style={imageCenter} />

                        <h6 className='project-page-title'>Other features, explained</h6>
                        <ul>
                            <li>Deadline in blue - central part of a task so wanted it to stand out from the other information on a task bar. Changing this color to red on the day of the deadline, or within a certain hour threshold would be a good addition to further make the deadline stand out.</li>
                            <li>Completed tasks - I didn’t want to get rid of the completed tasks right away, in case you need to go back and review something. This is why they are muted but not overwhelmingly so, or gotten rid of entirely. In a fully developed version, I imagine a feature in the three-dot menu next to the task list title that would allow clearing of completed tasks</li>
                            <li>Percent completion - lets the user know with a quick look how a task split into subtasks is progressing. This is especially useful when subtasks are hidden.</li>
                            <li>Show/hide subtasks arrow - part of hierarchical structure.</li>
                            <li>Three-dot menu - some features I would imagine in this menu button are clearing completed tasks as mentioned above and filtering tasks by your participation (i.e. show those which you are a member of) as well as basic functionality like editing the task list title and deleting it.</li>
                        </ul>
                    </div>
                </div>
            )
            break
        case 'Until the Stars are Dead site':
            content = (
                <div className='page'>
                    <div
                    className='page-hero'
                    style={{backgroundColor: '#' + props.bgColor, height: '55vw'}}>
                        <h1 style={{paddingBottom: 0, color: '#333'}}>{props.name}</h1>
                        <img src={props.src} alt='hero pic' />
                    </div>

                    <div
                    className='page-body'>
                        <h6 className='project-page-title'>Concept</h6>
                        <TextBlock>
                            <p>I’m currently building this site using React for the release of my sister’s first novel, tentatively titled "Until the Stars are Dead."</p>
                            <p>I’m early on in the design process and will add updates as I go along.</p>
                        </TextBlock>
                    </div>
                </div>
            )
            break
        default:
            break
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default ProjectPage
