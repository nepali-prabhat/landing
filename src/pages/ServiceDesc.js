import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { TimelineLite, CSSPlugin } from "gsap/all";
import LearnMore from './LearnMore';

export default class ServiceDesc extends Component{
    constructor(props){
        super(props)
        this.title = null
        this.desc = null
        this.img = null
        this.plugin = CSSPlugin
    }
    componentWillEnter(callback){
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