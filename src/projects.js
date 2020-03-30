import React, { Component } from 'react'

import TransitionGroupPlus from 'react-transition-group-plus';
import { TimelineLite, CSSPlugin } from "gsap/all";
import {projects} from './data';


const LearnMore = ()=><div className="link highlight">Learn More</div>
class ProjectDesc extends Component {
    constructor(props){
        super(props)
        this.title = null
        this.desc = null
        this.img = null
        this.plugin = CSSPlugin
    }
    componentWillEnter(callback){
        const tl = new TimelineLite({paused: false, onComplete:callback});
        tl.staggerFrom([this.title, this.desc], 0.5, {autoAlpha:0.5, y: 15},0.1,"label1")
        tl.staggerFrom(".pl", 0.5, {autoAlpha:1, y:10},0.1,'-=0.9')
        tl.staggerFrom(this.img, 1, {autoAlpha:0.8, y:15},0,'-=1')
    }
    render(){
        return(
                <div className="content-container" style={{minHeight: '450px'}}>
                        <div className="content-desc">
                            <h2 ref={r=>this.title = r}>
                                {this.props.project.title}
                            </h2>
                            <div className="txt pd" ref={r=>this.desc=r}>
                                {this.props.project.desc}
                                <ol className="projects-list">
                                    {
                                        this.props.project.lists.map((l,i)=>( <li key={l+i} className="txt pl">{l}</li> ))
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className="project-img-container" >
                            <img className="project-img" ref={r=>this.img=r} src={this.props.project.src} alt={this.props.project.title}/>
                        </div>
                </div>
        )
    }
}

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex:0,
            tabs: projects.tabs
        };
    }
    // interval = null;
    handleTabClick(i){
        this.setState({activeIndex:i})
    }

    // componentDidMount(){
    //     this.interval = setInterval(()=>{
    //         if(!this.state.manuallyClicked){
    //             this.setState({activeIndex:(this.state.activeIndex+1)%this.state.tabs.length})
    //         }else{
    //             this.setState({manuallyClicked:false})
    //         }
    //     },4000
    //     )
    // }
    // componentWillUnmount(){
    //     clearInterval(this.interval)
    // }
    render() {
        return (
            <section className="project">
                <div className="sec-desc">
                <h1>Our <span className="highlight"> Projects. </span></h1>
                <p className="txt">Some of the projects and technology we built. With each of our projects we offer
something new and fresh!
</p>
                </div>
                <div className="tabs-container">
                    <ul className="slideshow-tabs">
                        {
                            this.state.tabs.map((t,i)=><li key={t.title} onClick={()=>{this.handleTabClick(i)}} className={`link ${this.state.activeIndex===i?"active-tab":""}`}>{t.title}</li>)
                        }
                    </ul>
                </div>
                <TransitionGroupPlus>
                    {
                        this.state.tabs.map((t,i)=>{
                            return this.state.activeIndex === i?(<ProjectDesc key={"proj-desc-container-"+t.title} project={this.state.tabs[i]} left={this.state.left} />):null 
                        })
                    }
                </TransitionGroupPlus>
            </section>
        )
    }
}
