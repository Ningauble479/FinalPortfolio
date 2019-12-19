import React, { Component } from 'react';
import Header from '../../header/view/header'
import '../styles/main.css'
import Cards from '../../cards/views/mainCards.jsx'
import Bio from '../../biography/views/biography'
import References from '../../references/views/references'
import Skillset from '../../currentSkillset/views/skillset'
import {Route} from 'react-router-dom'

class main extends Component {
    render() {
        return (
            <div className='__main'>
                <Header/>
                <Route exact path='/' component={Bio}/>
                <Route exact path='/Websites' component={Cards}/>
                <Route exact path='/references' component={References}/>
                <Route exact path='/skillset' component={Skillset}/>
            </div>
        );
    }
}

export default main;