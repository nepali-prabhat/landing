import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';

import TransitionGroupPlus from 'react-transition-group-plus';
import { TimelineLite, CSSPlugin } from "gsap/all";
import {services} from './data';
import LearnMore from './LearnMore';

class ServiceDesc extends Component{
    constructor(props){
        super(props)
        this.title = null
        this.desc = null
        this.img = null
        this.plugin = CSSPlugin
    }
    componentWillEnter(callback){
        console.log("entering",this.props.service.title)
        const tl = new TimelineLite({paused: false, onComplete:callback});
        tl.staggerFrom([this.title, this.desc, this.img], 0.5, {autoAlpha:0.5, y: 15},0.1,"label1")
        tl.staggerFrom(".sc", 0.5, {autoAlpha:1, y:15},0.1,'-=1')
        tl.staggerFrom(".ch", 0.5, {autoAlpha:0.75, y:5},0.1,'-=1')
        tl.staggerFrom(".cd", 0.5, {autoAlpha:0.75, y:5},0,'-=1')
        tl.staggerFrom(".lm", 0.45, {autoAlpha:0.75, y:5},0,'-=1')
    }
    render(){
        return(
            <div >
                <div className="content-container" >
                            <div className="content-desc">
                                <h2 ref={r=>this.title = r}>
                                    {this.props.service.title}
                                </h2>
                                <p className="txt" ref={r=>this.desc = r}>
                                    {this.props.service.desc}
                                </p>
                            </div>
                            <div ref={r=>this.img = r} className="service-img-container">
                                <img className="service-img" src={this.props.service.src} alt={this.props.service.title}/>
                            </div>
                    </div>
                    <div >
                        <Carousel showStatus={false} className="service-card-container" centerMode useKeyboardArrows centerSlidePercentage={50} showThumbs={false} emulateTouch>
                            {
                                this.props.service.cards.map((c)=>{
                                    return (
                                        <div className="service-card sc" key={c.title}>
                                            <h3 className="ch">
                                                {c.title}
                                            </h3>
                                            <p className="txt cd">
                                                {c.desc}
                                            </p>
                                            <div className="lm">
                                                <LearnMore small={true}/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
            </div>
        )
    }
}
class MobileServiceDesc extends Component{
    componentWillEnter(callback){
        console.log("entering",this.props.card.title)
        // const tl = new TimelineLite({paused: false, onComplete:callback});
        // tl.staggerFrom([this.title, this.desc, this.img], 0.5, {autoAlpha:0.5, y: 15},0.1,"label1")
        // tl.staggerFrom(".sc", 0.5, {autoAlpha:1, y:15},0.1,'-=1')
        // tl.staggerFrom(".ch", 0.5, {autoAlpha:0.75, y:5},0.1,'-=1')
        // tl.staggerFrom(".cd", 0.5, {autoAlpha:0.75, y:5},0,'-=1')
        // tl.staggerFrom(".lm", 0.45, {autoAlpha:0.75, y:5},0,'-=1')
    }
    render(){
        return (
            <div className="mobile-service-list">
                <div className="service-card" key={"mobile-"+this.props.card.title+'-'+this.props.i}>
                    <h3>
                        {this.props.card.title}
                    </h3>
                    <p className="txt">
                        {this.props.card.desc}
                    </p>
                    <LearnMore />
                </div>
            </div>
        )
    }
}
export default ()=> {
    const [state, setState] = React.useState({
        activeIndex:0,
        left:true,
        tabs: services.tabs
    }) 
    let container = React.useRef(null);
    const handleTabClick = (i)=>{
        const left = i>state.activeIndex? true:false;
        i!==state.activeIndex && setState({...state, activeIndex:i, left})
    }
        return (
            <section className="services">
                <div className="sec-desc">
                <h1>What <span className="highlight"> Pegcore </span> is all about.</h1>
                <p className="txt">Procore is a data science platform that combines Data Lineage with End-to-End Pipelines on Kubernetes, engineered for science platform that  the enterprise.</p>
                </div>
                <div className="tabs-container">
                    <ul className="slideshow-tabs">
                        {
                            state.tabs.map((t,i)=><li key={t.title} onClick={()=>{handleTabClick(i)}} className={`link ${state.activeIndex===i?"active-tab":"inactive-tab"}`}>{t.title}</li>)
                        }
                    </ul>
                </div>
                <div style={{position: 'relative'}}>
                    <TransitionGroupPlus>
                        {
                            state.tabs.map((t,i)=>{
                                return state.activeIndex === i?(<ServiceDesc container={container} key={"desc-container-"+t.title} service={state.tabs[i]} left={state.left} />):null 
                            })
                        }
                    </TransitionGroupPlus>
                    {/* <Carousel showStatus={false} className="service-card-container" centerMode useKeyboardArrows centerSlidePercentage={50} showThumbs={false} emulateTouch>
                        {
                            state.tabs[state.activeIndex].cards.map((c)=>{
                                return (
                                    <div className="service-card" key={c.title}>
                                        <h3>
                                            {c.title}
                                        </h3>
                                        <p className="txt">
                                            {c.desc}
                                        </p>
                                        <LearnMore />
                                    </div>
                                )
                            })
                        }
                    </Carousel> */}
                </div>
                {/* <div className="content-container">
                        <div className="content-desc">
                            <h2>
                                {state.tabs[state.activeIndex].title}
                            </h2>
                            <p className="txt">
                                {state.tabs[state.activeIndex].desc}
                            </p>
                        </div>
                        <div className="service-img-container">
                            <img className="service-img" src={state.tabs[state.activeIndex].src} alt={this.state.tabs[this.state.activeIndex].title}/>
                        </div>
                </div> */}
                <TransitionGroupPlus>
                    {
                        state.tabs[state.activeIndex].cards.map((c,i)=>(
                            <MobileServiceDesc card={c} i={i}/>
                        ))
                    }
                </TransitionGroupPlus>
            </section>
        )
}