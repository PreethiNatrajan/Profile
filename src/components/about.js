import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ProfileData from '../profileData'
class about extends Component {
    // static propTypes = {

    // }

    render() {
        //let profileData = this.props.profileData;
        return (
            <section id = 'about'>
                <div className = 'row banner'>
                    <br/>
                    <br/>
                    <br/>
                        <br/>
                    <h2 className="headline"><font color="white">About Me</font></h2><br/>
                    <br/>
                        
                </div>
                <div>
                    <h4><font color="white"> {ProfileData.aboutMe}</font>
                            
                       
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                            
                    </h4>
                </div>
                
            </section>
        )
    }
}

export default about
