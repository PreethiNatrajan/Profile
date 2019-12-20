import React, { Component } from 'react'

import ProfileData from '../profileData'
//import PropTypes from 'prop-types'

class home extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            
            <section id = "home">
                <div className="row banner">
                    <div className="banner-text">
                        <br/>
                        <br/>
                        <br/>
                        <br/><br/><br/>
                        <h1 className="responsive-headline"><font color="white">I am {ProfileData.name}.</font></h1><br/><br/>
                        <h2><font color="white">I am a {ProfileData.role}.{ProfileData.roleDescription}</font><br/><br/><br/>
                        </h2>
                    </div>
                </div>
                <br/><br/><br/>
                <div id="go-top"><a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a></div>
            </section>
            
        )
        
    }
    
}

export default home
