import React from 'react';
import './App.css';
import Services from './services';
import Projects from './projects';
import Testimonial from './testemonials';
import {useScreenSize} from './useScreenSize';
import LearnMore from './LearnMore';
import { Link, animateScroll as scroll } from "react-scroll";
import Hero from './hero';

function App() {
  const noticeTitle = "Somtu SMS is here!"
  const noticeDesc = `Our latest project Somtu, 
  School Management system. has been released.
  School Management system. has been released.`
  const size = useScreenSize();
  let transform = 0;
  // if(size.width<450){
  //   transform = (450-size.width)/2;
  // }
  // style={{transform:`translateX(${transform}px)`}}
  let offset = 0;
  if(size.width<=1000){
    offset = -37
    console.log({offset,size})
  }
  return (
    <div className="App" >
      <nav>
        <span className="logo">
          Pegcore
        </span>
        {/* <div className="d-flex"> */}
          <ul>
            {/* <li className="link">Home</li>
            <li className="link">Services</li>
            <li className="link">Projects</li> */}
            <li><Link to="hero" smooth={true} spy={true} className="link">Home</Link></li>
            <li><Link to="services" offset={offset- 120} smooth={true} spy={true} className="link">Services</Link></li>
            <li><Link to="project" spy={true} offset={offset} smooth={true} className="link">Projects</Link></li>
            <li><Link to="testimonials" spy={true} offset={offset} smooth={true} className="link">Contact</Link></li>
          </ul>
          <div className="group">
            <button >Request Demo</button>
            <button className="outline">Get Started</button>

          </div>
        {/* </div> */}
      </nav>
      <Hero/>
      {/* <section className="notice-section">
        <div className="notice-img"></div>
        <div className="notice-desc">
          <h3>{noticeTitle}</h3>
          <p className="txt">{noticeDesc}</p>
          <LearnMore small={true}/>
        </div>
      </section> */}
      <Services />
      <Projects />
      <Testimonial/>
      <footer>
        <span className="logo">
          Pegcore
        </span>
        {/* <div className="d-flex"> */}
          <ul>
            {/* <li className="link">Home</li>
            <li className="link">Services</li>
            <li className="link">Projects</li> */}
            <li><Link to="hero" smooth={true} spy={true} className="link">Home</Link></li>
            <li><Link to="services" offset={60} smooth={true} spy={true} className="link">Services</Link></li>
            <li><Link to="project" spy={true} offset={60} smooth={true} className="link">Projects</Link></li>
            <li><Link to="testimonials" spy={true} offset={60} smooth={true} className="link">Contact</Link></li>
          </ul>
      </footer>
    </div>
  );
}

export default App;
