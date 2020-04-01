import React from 'react';
import './css/App.css';
import { Link } from "react-scroll";
//sections
import Hero from './pages/Hero';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Testimonial from './pages/Testemonials';
import LearnMore from './pages/LearnMore';

import {notice} from './data'
//svgs
import Path161 from './fillings/Path161';
import Path162 from './fillings/Path162';
import Path164 from './fillings/Path164';
import Ellipse38 from './fillings/Ellipse38';
import Ellipse39 from './fillings/Ellipse39';
import Ellipse90 from './fillings/Ellipse90';

function App() {
  let offset = 70;
  return (
    <React.Fragment>
      <div className="App" >
        <nav>
          <Link to="hero" smooth={true} spy={true} className="link d-flex">
            <span className="logo">
              Pegcore
            </span>
          </Link>
            <ul>
              {/* <li><Link to="hero" smooth={true} spy={true} className="link">Home</Link></li> */}
              <li><Link to="services" offset={offset} smooth={true} spy={true} className="link">Services</Link></li>
              <li><Link to="project" spy={true} offset={offset} smooth={true} className="link">Projects</Link></li>
              <li><Link to="testimonials" spy={true} offset={offset} smooth={true} className="link">Contact</Link></li>
            </ul>
            <div className="group">
              <button >Request Demo</button>
              <button className="outline">Get Started</button>
            </div>
        </nav>
        <Hero/>
        <section className="notice-section">
          <div className="notice-desc">
            <h3>{notice.title}</h3>
            <p className="txt">{notice.desc}</p>
            <LearnMore small={true}/>
          </div>
          <Ellipse90/>
        </section>
        <Services />
        <Projects />
        <Testimonial/>
        <footer className="d-flex" style={{marginBottom:'20px', marginTop:'20px'}}>
          <Link to="hero" smooth={true} spy={true} className="link">
            <span className="logo">
              Pegcore
            </span>
          </Link>
        </footer>
      </div>
      <Path161/> 
      <Ellipse38/>
      <Path164/> 
      <Ellipse39/>
      <Path162/>
    </React.Fragment>
  );
}
export default App;
