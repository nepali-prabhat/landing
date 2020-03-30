import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import {testimonials} from './data'
export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            testimonials
        };
    }

    render() {
        return (
            <section className="testimonials">
                    <div className="sec-desc" style={{paddingTop:'0px'}}>
                        <h1>Talk to us <span className="highlight"> Directly</span>!</h1>
                        <p className="txt">You can call us or shoot us a quick message!
                            We respond in less than 1 min.
                        </p>
                    </div>
                    <div className="d-flex" style={{marginTop:'20px',}}>
                        <input name="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Email"/>
                        <button style={{marginLeft:'10px'}}>
                            Get Started
                        </button>
                    </div>
                    <div className="rt-wrapper">
                        <div className='rt-attraction'>
                            <div className='rt-one highlight'>{"< 1"}</div>
                            <div className="rt-min highlight">min</div>
                            <div className="rt-desc txt">
                                average wait time for phone support
                            </div>
                        </div>
                        <div className='rt-attraction'>
                            <div className='rt-one highlight'>{"< 1"}</div>
                            <div className="rt-min highlight">min</div>
                            <div className="rt-desc txt">
                                average chat response time
                            </div>
                        </div>
                    </div>
                <Carousel showStatus={false} className="service-card-container" centerMode useKeyboardArrows centerSlidePercentage={50} showThumbs={false} emulateTouch>
                    {
                        this.state.testimonials.map((c)=>{
                            return (
                                <div className="service-card" key={c.name}>
                                    <h3>
                                        {c.name}
                                    </h3>
                            <   div className="txt" style={{opacity:'50%'}}>{c.position}</div>
                                    <p className="txt">
                                        {c.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </Carousel>
                <div className="mobile-service-list">
                    {
                        this.state.testimonials.map((c)=>{
                            return (
                                <div className="service-card" key={c.name}>
                                    <h3>
                                        {c.name}
                                    </h3>
                                    <div className="txt" style={{opacity:'50%'}}>{c.position}</div>
                                    <p className="txt">
                                        {c.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
