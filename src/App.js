import React from 'react';
import './App.css';
import heroImg from './hero.svg';
import Services from './services';
import Projects from './projects';
import Testimonial from './testemonials';
const LearnMore = ()=><div className="link highlight">Learn More</div>
function App() {
  const noticeTitle = "Somtu SMS is here!"
  const noticeDesc = `Our latest project Somtu, 
  School Management system. has been released.
  School Management system. has been released.`
  const [email, setEmail] = React.useState("");
  return (
    <div className="App">
      <nav>
        <span className="logo">
          Pegcore
        </span>
        {/* <div className="d-flex"> */}
          <ul>
            <li className="link">Home</li>
            <li className="link">Services</li>
            <li className="link">Projects</li>
          </ul>
          <div className="group">
            <button >Request Demo</button>
            <button className="outline">Get Started</button>
          </div>
        {/* </div> */}
      </nav>
      <section className="hero">
        <div className="info">
            <h1>
              You want to build. We want to 
              <span className="highlight"> help.</span>
            </h1>
            <p className="txt">
              Manage your projects, resources, and financials on one open, easy-to-use platform—designed for how you actually build.
            </p>
            <div className="hero-contact">
              <input name="email" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
              <button className="first-btn">Get Started</button>
            </div>
        </div>
        <img className="hero-img" src={heroImg} alt="Pegcore main attraction" />
        <div className="notice">
          <div className="notice-img"></div>
          <div className="notice-desc">
            <h3>{noticeTitle}</h3>
            <div className="txt">{noticeDesc}</div>
            <LearnMore/>
          </div>
        </div>
      </section>
      <section className="notice-section">
        <div className="notice-img"></div>
        <div className="notice-desc">
          <h3>{noticeTitle}</h3>
          <div className="txt">{noticeDesc}</div>
          <LearnMore/>
        </div>
      </section>
      <Services />
      <Projects />
      <Testimonial/>
    </div>
  );
}

export default App;
