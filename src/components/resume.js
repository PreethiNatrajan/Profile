import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ProfileData from '../profileData'

class resume extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <section id = "resume" ><br/><br/><br/>
                <div className = "row education" >
                    <div className = "three column header-col">
                        <h2><span>Education</span></h2>
                    </div>
                    <div className = "nine column main-col">
                        {
                            ProfileData.education && ProfileData.education.map((item)=>{
                                return(
                                  <div className="row item">
                                        <div className="nine columns">
                                            <h3>{item.UniversityName}</h3>
                                            <p className = "info">
                                                {item.specialization}
                                                <span>&bull;</span>
                                                <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                                            </p>
                                            <p>{item.percentage}</p><fieldset/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className = "row work">
                        <div className = "three column header-col">
                        <h2><span>Work</span></h2>
                        </div>
                        <div className = "nine column main-col">
                        {
                            
                            ProfileData.work && ProfileData.work.map((item)=>{
                                return(
                                  <div className="row item">
                                        <div className="nine columns">
                                            <h3>{item.companyName}</h3>
                                            <p className = "info">
                                                {item.workTitle}
                                                <span>&bull;</span>
                                                <em className="date">{item.monthOfJoining} {item.yearOfJoining}</em>
                                            </p>
                                            <fieldset/>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                    
                </div>
                <div className = "row skills">
                        <div className = "three column header-col">
                        <h2><span>Skills</span></h2>
                        </div>
                        <div className = "nine column main-col">
                            <div className = "row technologies">
                                <div className = "three column header-col">
                                    <h5><span>Technologies:</span></h5>
                                </div>
                                {
                                    ProfileData.skills && ProfileData.skills.map((item)=>{
                                        return(                                           
                                            <p>{item.technologies}</p>
                                        )
                                    })
                                }
                            </div>
                            <div className = "row programminglanguage">
                                <div className = "five column header-col">
                                    <h5><span>ProgrammingLanguages:</span></h5>
                                </div>
                                {
                                    ProfileData.skills && ProfileData.skills.map((item)=>{
                                        return(                                           
                                            <p>{item.ProgrammingLanguages}</p>
                                        )
                                    })
                                }
                            </div>
                            <div className = "row others">
                                <div className = "two column header-col">
                                    <h5><span>Others:</span></h5>
                                </div>
                                {
                                    ProfileData.skills && ProfileData.skills.map((item)=>{
                                        return(                                           
                                            <p>{item.others}</p>
                                            
                                        )
                                    })
                                    
                                }
                                <br/><br/><br/>
                                
                            </div>
                    </div>

                </div>
                <fieldset/>
            </section>
        )
    }
}

export default resume
