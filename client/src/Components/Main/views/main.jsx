import React, { Component } from 'react';
import Header from '../../header/view/header'
import '../styles/main.css'
import Cards from '../../cards/views/mainCards.jsx'
import Bio from '../../biography/views/biography'
import References from '../../references/views/references'
import Skillset from '../../currentSkillset/views/skillset'
import Testing from '../../TestingGround/views/testingGround'
import {Route} from 'react-router-dom'
import axios from 'axios'



class main extends Component {

    constructor(props) {
        super(props);
        this.state={
            search: null,
            data: null,
            cardDisplay: null,
            modalOpen: false,
            cardDisplayEquip: null,
            cardDisplayLevels: null,
            searched: null,
            cardDisplayM: null,
            openModalM: false
        }

        this.constructURL = this.constructURL.bind(this)
        this.DandDClasses = this.DandDClasses.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getInfo = this.getInfo.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.startingEquip = this.startingEquip.bind(this)
        this.classLevels = this.classLevels.bind(this)
    }

    closeModal(e){
        (e).preventDefault()
        if(e.target.value == 'class'){
        this.setState({modalOpen: false})
        }
        else if(e.target.value == 'monster'){
            this.setState({openModalM: false})
        }
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    constructURL(e){
        (e).preventDefault()
        console.log(this.state.search)
        let url = 'http://www.dnd5eapi.co/api/' + e.target.value
        this.setState({searched: e.target.value})
        console.log(url)
        this.DandDClasses(url)

    }

    DandDClasses = (constructURL) => {
        
           axios.get(constructURL)
            .then(data=>{
                let results = data.data.results
                console.log(results)
                this.setState({data: results})
                console.log(data)})
        
    }

    getInfo(e){
        (e).preventDefault()
        axios.get(e.target.value)
        .then(
            results => {
                if(this.state.searched == 'classes'){
                this.setState({cardDisplay: results.data, modalOpen: true})
                setTimeout(this.startingEquip, 500)
                setTimeout(this.classLevels, 500)
                console.log(results.data)}
                else if(this.state.searched == 'monsters'){
                    console.log(results.data)
                    this.setState({cardDisplayM: results.data, openModalM: true})
                }
            }
        )
    }

    startingEquip(){
        axios.get(this.state.cardDisplay.starting_equipment.url)
        .then(results => {
            console.log(results.data)
            this.setState({cardDisplayEquip: results.data.starting_equipment})
        })
    }

    classLevels(){
        axios.get(this.state.cardDisplay.class_levels.url.toLowerCase())
        .then(
            result=>{
                this.setState({cardDisplayLevels: result.data})
                console.log({name: 'levels', results: result.data})
            }
        )
    }
    
    render() {
        return (
            <div className='__main'>
                <Header/>
                <Route exact path='/' component={Bio}/>
                <Route exact path='/Websites' component={Cards}/>
                <Route exact path='/references' component={References}/>
                <Route exact path='/skillset' component={Skillset}/>
                <Route exact path='/testingGround' 
                render={(props)=><Testing {...props} closeModal={this.closeModal} getInfo={this.getInfo} handleChange={this.handleChange} constructURL={this.constructURL} state={this.state}/>}/>
            </div>
        );
    }
}

export default main;