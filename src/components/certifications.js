import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ProfileData from '../profileData'

export class certifications extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <section id = "certifications" >
                <div className = "row certifications" >
                    <div className = "three column header-col">
                    <br/>
                        <br/>
                        <br/>
                        <h2><span>Certifications</span></h2>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className = "nine column main-col">
                        {
                            
                            
                            ProfileData.certifications && ProfileData.certifications.map((item)=>{
                                return(
                                  <div className="row item">
                                        <div className="nine columns">
                                       
                                            <p>{item.certificate}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <br/><br/>

                    </div>
                </div>
                
            </section>
        )
    }
}

export default certifications
