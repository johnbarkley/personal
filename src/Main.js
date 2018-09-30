import React, { Component } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'

import App from './App'
import ProjectPage from './components/ProjectPage'

import mockuppImg from './assets/mockupp.png'
import throwwImg from './assets/throww.png'
import conocImg from './assets/conoc.png'
import taskManagerImg from './assets/taskManager.png'

class Main extends Component {
    render() {
        const mockuppProps = {
            name: 'Mockupp',
            link: 'https://johnbarkley.github.io/mockupp',
            src: mockuppImg,
            bgColor: '690EFF'
        }
        const throwwProps = {
            name: 'Throww',
            link: 'https://github.com/johnbarkley/throww',
            src: throwwImg,
            bgColor: '2A70D9'
        }
        const taskManagerProps = {
            name: 'Task manager design',
            src: taskManagerImg,
            bgColor: '5280FF',
        }
        const untilStarsProps = {
            name: 'Until the Stars are Dead site',
            src: conocImg,
            bgColor: 'FFFFF5'
        }

        const projectProps = {
            mockuppProps,
            throwwProps,
            taskManagerProps,
            untilStarsProps
        }

        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' render={ () => <App {...projectProps} /> }/>
                    <Route exact path={'/Mockupp'} render={ () => <ProjectPage {...mockuppProps} /> } />
                    <Route exact path={'/Throww'} render={ () => <ProjectPage {...throwwProps} /> } />
                    <Route exact path={'/Task-manager-design'} render={ () => <ProjectPage {...taskManagerProps} /> } />
                    <Route exact path={'/Until-the-stars-are-dead-site'} render={ () => <ProjectPage {...untilStarsProps} /> } />
                    <Route render={ () => <App {...projectProps} /> }/>
                </Switch>
            </HashRouter>
        )
    }
}

export default Main
