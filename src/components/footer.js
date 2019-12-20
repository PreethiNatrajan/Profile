import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import ProfileData from '../profileData'

class footer extends Component {
    // static propTypes = {

    // }

    render() {
        return (
           
            <React.Fragment>
            <footer id="footer"> 
            <div className="footer">
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-circle" /></a></div><br/>
      <div className="row">
            <div className="twelve column header-col">
          <ul className="social-links">
            {
              ProfileData.socialLinks && ProfileData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          </div>
          <div className = "row copyright">
          <div className="twelve column">
          <ul className="copyright">
            <li>© Copyright 2019</li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </footer>
    </React.Fragment>
        )
    }
}

export default footer
