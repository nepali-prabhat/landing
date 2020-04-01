import React from 'react';
import { TimelineMax, CSSPlugin } from "gsap/all";

import LearnMore from './LearnMore'
import HeroImg from '../images-svgs/hero.svg';
import {hero,notice} from '../data';
import Path154 from '../fillings/Path154';
import Ellipse37 from '../fillings/Ellipse37';
import Ellipse40 from '../fillings/Ellipse40';
import Ellipse91 from '../fillings/Ellipse91';

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
    }
    componentDidMount(){
        const tl = new TimelineMax({paused:false})
        tl.staggerFrom([this.dum, this.title, this.desc, this.email],0.5, { stagger:0.2, delay:0, ease:'sine.in' ,  autoAlpha:0, y:20})
        tl.from('.notice', 0.25, { x:-500, autoAlpha:0, ease:'sine.in'},'-=0.2')
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
                    <p className="txt" ref={r=>this.desc=r}>{hero.desc}</p>
                    <div className="hero-contact"   >
                    <input name="email" value={this.state.email} ref={r=>this.email=r} placeholder="Email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    <button ref={r=>this.btn=r} className="first-btn">Get Started</button>
                    </div>
                </div>
                <div ref={r=>this.img=r}>
                    <img className="hero-img" src={HeroImg} alt="Pegcore main attraction" />
                </div>
                <div className="notice">
                    <div className="notice-img"></div>
                    <div className="notice-desc">
                        <h3 className="nt">{notice.title}</h3>
                        <p className="txt nd">{notice.desc}</p>
                        <LearnMore small={false}/>
                    </div>
                </div>
                <Path154/>
                <Ellipse40/>
                <Ellipse37/>
                <Ellipse91/>
            </section>
        )
    }
}
export default Hero