import React, { Component } from 'react'
//import Header from './components/header'
import ProfileData from '../profileData'
//import PropTypes from 'prop-types'

class projects extends Component {
    // static propTypes = {

    // }

    render() {
        
        return (
           
            <section id = "projects">
            
            <div className = "row education">
            
            <div className = "three column header-col">
            
            <br/>
            <br/>
            <br/>
                <h2><span>Projects</span></h2>
                
            </div>
            
            <br/>
            <br/>
            <br/>
            
            <div className = "nine column main-col">
                {
                    ProfileData.projects && ProfileData.projects.map((item)=>{
                        return(
                          <div className="row item">
                                <div className="nine columns">
                                    <h3>{item.name}</h3>
                                    <p className = "info">
                                        Client:{item.client}
                                        {/*<span>&bull;</span>*/}
                                        <p>Description: {item.description} </p>
                                        <p>Environment: {item.environment}</p>
                                    </p>
                                    <p>{item.percentage}</p>
                                    <fieldset/>
                                </div>
                            </div>
                            
                        )
                    })
                }
                
            </div>
        </div>
        <br/><br/><br/>
        <fieldset/>
            </section>
            
            
        )
    }
}

export default projects
