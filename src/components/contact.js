import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ProfileData from '../profileData'

class contact extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
            <section id="contact">
            <div className="row section-head">
              <div className="twelve columns"><br/>
                <p className="lead"><font colour="white">
                Feel free to contact me for any work or suggestions</font>
                </p><br/>
              </div>
            </div>
            <div className="row">
              <aside className="twelve columns footer-widgets">
                <div className="widget">
                  <h4><font color="white">Contact :
                    {ProfileData.contact}</font>
                  </h4><br/>
                  <h4><font color="white">Email :
                  {ProfileData.email}</font>
                  </h4><br/><br/><br/>
                </div>
              </aside>
            </div>
          </section> 
            </div>
        )
    }
}

export default contact
