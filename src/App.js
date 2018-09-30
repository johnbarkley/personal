import React, { Component } from 'react'
import SectionHeader from './components/SectionHeader'
import TextBlock from './components/TextBlock'
import CurrentSection from './components/CurrentSection'
import CurrentItem from './components/CurrentItem'
import Project from './components/Project'
import Link from './components/Link'

import resume from './assets/JohnBarkleyResume.pdf'

class App extends Component {
    render() {
        return (
            <div className='container'>

                <div className='intro'>
                    <SectionHeader value={'Hey, I’m John'} />

                    <TextBlock>
                        <p id='first-paragraph'>I like to design & develop websites and web applications. I particularly enjoy front-end development as well as working on productivity and project management-type tools. I’m also interested in exploring UI/UX and design systems.</p>
                        <p>I’m in my third year studying computer science and Spanish at the University of Virginia.</p>
                    </TextBlock>

                    <CurrentSection header='Currently...'>
                        <CurrentItem emoji='📚' activity='learning React (this site is a React SPA!)' />
                        <CurrentItem emoji='🇪🇸' activity='studying in Sevilla, Spain (fall 2018)' />
                        <CurrentItem emoji='👷' activity='building Throww, a tool for managing sources of inspiration for web projects' />
                    </CurrentSection>
                </div>

                <div className='all-projects'>
                    <SectionHeader value={'Projects'} nontop />

                    <Project
                    {...this.props.mockuppProps}>
                        <p>A tool for creating browser-style mockups for presentations and portfolios.</p>
                        <p>Mockupp is a single-page application built in React. The project mockups for this site were all created with Mockupp.</p>
                    </Project>

                    <Project
                    {...this.props.throwwProps}>
                        <p>A tool for managing sources of inspiration for web development projects.</p>
                        <p>I’m currently building Throww and hoping to launch this fall. Click for more details on the concept, the design, and the current stage of development.</p>
                    </Project>

                    <Project
                    {...this.props.taskManagerProps}>
                        <p>A design I made for a collaborative task manager tool.</p>
                        <p>Click for more images of the design as well as explanations behind the design & UI decisions.</p>
                    </Project>

                    <Project
                    {...this.props.untilStarsProps}>
                        <p>A site I’m currently building for the release of my sister’s first novel, tentatively titled "Until the Stars are Dead."</p>
                        <p>I’m early on in the design process but you can see the landing page opposite.</p>
                    </Project>

                    <Project
                    name='Macsha'>
                        <p>This past summer, I interned in Barcelona, Spain with&nbsp;
                        <a href='http://www.macsha.com' target='_blank' rel='noopener noreferrer'>Macsha</a>
                        , a company that develops timing products for various types of sporting events. I developed
                        a C# application using Windows Forms that reads and handles the results of a race in real-time and
                        allows for display on an LED screen on-site. It consists of an operator window, a display window, and a
                        configurations menu allowing for customization of the display.</p>
                        <p>In the process of developing the application, I learned about multi-threading and engaging with the file
                        system, among other concepts, and became comfortable with C#. I was also able to use the opportunity to improve
                        my Spanish (including learning a variety of coding-related terms!), as the entire office was Spanish-speaking.
                        You can watch a video about my experience at Macsha&nbsp;
                        <a href='https://www.facebook.com/macshacronos/videos/1918389094850639/' target='_blank' rel='noopener noreferrer'>here.</a></p>
                    </Project>
                </div>

                <div className='contact'>
                    <SectionHeader value={'Get in touch'} nontop />

                    <Link dest='mailto:jgb2eb@virginia.edu' value='jgb2eb@virginia.edu' />
                    <Link dest='https://github.com/johnbarkley' value='GitHub' newTab />
                    <Link dest='https://linkedin.com/in/john-barkley19' value='LinkedIn' newTab />
                    <Link dest={resume} value='Resume' newTab />
                </div>
            </div>
        )
    }
}

export default App
