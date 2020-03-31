import React from 'react';
import LearnMore from './LearnMore'
import heroImg from './hero.svg';

import TransitionGroupPlus from 'react-transition-group-plus';
import { TimelineMax, CSSPlugin, TweenMax } from "gsap/all";

class Hero extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:""
        }
        this.dum=null;
        this.title = null;
        this.highlight = null;
        this.desc = null;
        this.email = null;
        this.btn = null;
        this.img = null;
        this.plugin=CSSPlugin;
        this.noticeTitle = "Somtu SMS is here!"
        this.noticeDesc = `Our latest project Somtu, 
        School Management system. has been released.
        School Management system. has been released.`
    }
    componentDidMount(){
        const tl = new TimelineMax({paused:false})
        tl.staggerFrom([this.dum, this.title, this.desc, this.email],0.5, { stagger:0.2, delay:0, ease:'sine.in' ,  autoAlpha:0, y:20})
        tl.from('.notice', 0.5, { x:-500, autoAlpha:0, ease:'sine.in'},'-=0.2')
    }
    render(){
        return(
            <section className="hero">
                <span ref={r=>this.dum=r}/>
                <div className="info">
                    <h1 ref={r=>this.title=r}>
                        <span >You want to build. We want to</span> 
                    <span className="highlight" ref={r=>this.highlight=r} > help.</span>
                    </h1>
                    <p className="txt" ref={r=>this.desc=r}>
                    Manage your projects, resources, and financials on one open, easy-to-use platform—designed for how you actually build.
                    </p>
                    <div className="hero-contact"   >
                    <input name="email" value={this.state.email} ref={r=>this.email=r} placeholder="Email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    <button ref={r=>this.btn=r} className="first-btn">Get Started</button>
                    </div>
                </div>
                <div ref={r=>this.img=r}>
                    <img className="hero-img" src={heroImg} alt="Pegcore main attraction" />
                </div>
                <div className="notice">
                    <div className="notice-img"></div>
                    <div className="notice-desc">
                        <h3 className="nt">{this.noticeTitle}</h3>
                        <p className="txt nd">{this.noticeDesc}</p>
                        <LearnMore small={false}/>
                    </div>
                </div>
            </section>
        )
    }
}
export default Hero