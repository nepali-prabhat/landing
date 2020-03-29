import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import MobileA from './mobile1.svg';
const LearnMore = ()=><div className="link highlight">Learn More</div>
export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            testimonials:[
                {
                    name:"Prabhat Pandey",
                    position:"CEO",
                    desc:`Yep! totally the best company out there hands down. 420/69. Contrary to popular belief, Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old.
                    Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical Latin literature from 45 BC, making it.
                    `
                },
                {
                    name:"Bijay Shrestha",
                    position:"CEO",
                    desc: `
                    Tts over 2000 years old. Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old.`
                },
                {
                    name:"Karun Shrestha",
                    position:"CEO",
                    desc: `Yep! totally the best company out there hands down. 420/69.Tts over 2000 years old. Lorem Ipsum is not simply
                    random text. It has roots in a piece of classical Latin
                    literature from 45 BC, making it over 2000 years old.
                    `
                },
                {
                    name:"Prabhat Pandey",
                    position:"CEO",
                    desc:"Yep! totally the best company out there hands down. 420/69"
                },

            ]
        };
    }
    interval = null;

    render() {
        return (
            <section className="project">
                <div className="sec-desc">
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
                <Carousel showStatus={false} className="service-card-container" centerMode useKeyboardArrows centerSlidePercentage={50} showThumbs={false} emulateTouch>
                    {
                        this.state.testimonials.map((c)=>{
                            return (
                                <div className="service-card" key={c.title}>
                                    <h3>
                                        {c.name}
                                    </h3>
                            <   div className="txt">{c.position}</div>
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
                                <div className="service-card" key={c.title}>
                                    <h3>
                                        {c.name}
                                    </h3>
                            <   div className="txt">{c.position}</div>
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
