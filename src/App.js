import React , { Component } from 'react';
//import {StickyContainer, Sticky} from 'react-sticky'
//import logo from './logo.svg';
import './App.css';
//import Profile from './components/profile';
//import Home from './components/home'
import Header from './components/header'
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';
import Certifications from './components/certifications';
import Home from './components/home';
import Contact from './components/contact';
import Footer from './components/footer';
class App extends Component{
  render() {
   return (
    //<StickyContainer>
     <div className="App">
     
            {/*<Sticky>
            // {({style}) => <Header style={style}/>}
            // </Sticky>
            // <div className="page" style={this.pageStyle}>*/}
            <Header/>
     <Home/>
     
     <About/>
     
     <Resume/>
     
     <Projects/>
     
     <Certifications/>
     <Contact/>
     <Footer/>
     </div>
    
     //</div>
     //</StickyContainer>
   );
 }
}

export default App;
