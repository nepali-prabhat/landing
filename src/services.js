import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import AI from './ai.svg';
import BitCoin from './bitcoin.svg';
import IoT from './iot.svg';
import TransitionGroupPlus from 'react-transition-group-plus';
import { TimelineLite, CSSPlugin } from "gsap/all";

const LearnMore = ()=><div className="link highlight">Learn More</div>

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
        tl.staggerTo([this.title, this.img, this.desc], 0.4, {opacity:1},0.3);
        // tl.play();
        // callback();
    }
    componentWillLeave(callback){
        console.log("leaving", this.props.service.title)
        const tl = new TimelineLite({paused: false, onComplete:callback});
        tl.staggerTo([this.title, this.img, this.desc], 0.4,{opacity:0},0.3)
    }
    render(){
        return(
            <div style={{position:'absolute', top:'0', left:'0', right:'0'}}>
                <div className="content-container">
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
                <Carousel onClickItem={()=>this.props.handleCardClick()} onClickThumb={()=>this.props.handleCardClick()} showStatus={false} className="service-card-container" centerMode useKeyboardArrows centerSlidePercentage={50} showThumbs={false} emulateTouch>
                {
                    this.props.service.cards.map((c)=>{
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
                </Carousel>
            </div>
        )
    }
}

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manuallyClicked:false,
            activeIndex:0,
            tabs:[{
                title:"Artificial Intelligence",
                desc:`I's stdard dummy text ever since
                the 1500s, when an unknown printer.s simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry
                `,
                src:AI,
                cards:[
                    {
                        title: "Analytics",
                        desc:`Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        `,
                    },
                    {
                        title: "Pattern Recognition",
                        desc:`A powerful dual-perspective from two MIT schools – the
                        MIT Sloan School of MIT Computer Science and Artificial
                        Intelligence Laboratory understanding of AI.
                        `,
                    },
                    {
                        title: "Natural Language Processing",
                        desc:`It has roots in a piece of classical Latin
                        literature from 45 BC, making  Computer Science and Artificial
                        Intelligence Laboratory understand.
                        `,
                    },
                    {
                        title: "Natural Language Processing",
                        desc:`It has roots in a piece of classical Latin
                        literature from 45 BC, making  Computer Science and Artificial
                        Intelligence Laboratory understand.
                        `,
                    },

                ]
            },
            {
                title:"Blockchain",
                desc:`Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industryprinting and typesetting industry.
                Lorem Ipsum has been the industry00s, when an unknown printer.
                `,
                src:BitCoin,
                cards:[
                    {
                        title: "Pattern ",
                        desc:`A s simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industryComputer Science and Artificial
                        Intelligence Laboratory understanding of AI.
                        `,
                    },
                    {
                        title: "Pattern Recognition",
                        desc:`A powerful dual-perspective from two MIT schools – the
                        MIT Sloan School of MIT Computer Science and Artificial
                        Intelligence Laboratory understanding of AI.
                        `,
                    },
                    {
                        title: "Natural Language Processing",
                        desc:`It has roots in a piece of classical Latin
                        literature from 45 BC,   has roots in a piece of classical Latin
                        literature from 45 BC,making  Computer Science and Artificial
                        Intelligence Laboratory understand.
                        `,
                    },
                ]
            },
            {
                title:"Internet of Things",
                desc:`Contrary to popular belief, Lorem Ipsum is not simply
                random text. It hae industry's stdard dummy text ever since
                the 1500s, when an unknown printer.
                `,
                src:IoT,
                cards:[
                    {
                        title: "Hepatitis",
                        desc:`Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        `,
                    },
                    {
                        title: "Pattern Recognition",
                        desc:`A powerful dual-perspective from two MIT schools – the
                        MIT Sloan School of MIT Computer Science and Artificial
                        Intelligence Laboratory understanding of AI.
                        `,
                    },
                    {
                        title: "Natural Language Processing",
                        desc:`It has roots in a piece of classical Latin
                        literature from 45 BC, making  Computer Science and Artificial
                        Intelligence Laboratory understand.
                        `,
                    },
                ]
            }
        ]
        };
    }
    interval = null;
    handleTabClick(i){
        this.setState({activeIndex:i, manuallyClicked:true})
    }
    handleCardClick = ()=>{
        this.setState({manuallyClicked:true})
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
                if(!this.state.manuallyClicked){
                    this.setState({activeIndex:(this.state.activeIndex+1)%this.state.tabs.length})
                }else{
                    this.setState({manuallyClicked:false})
                }
            },4000
        )
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return (
            <section className="services">
                <div className="sec-desc">
                <h1>What <span className="highlight"> Pegcore </span> is all about.</h1>
                <p className="txt">Procore is a data science platform that combines Data Lineage with End-to-End Pipelines on Kubernetes, engineered for science platform that  the enterprise.</p>
                </div>
                <div className="tabs-container">
                    <ul className="slideshow-tabs">
                        {
                            this.state.tabs.map((t,i)=><li key={t.title} onClick={()=>{this.handleTabClick(i)}} className={`link ${this.state.activeIndex===i?"active-tab":""}`}>{t.title}</li>)
                        }
                    </ul>
                </div>
                <div style={{position: 'relative'}}>
                    <TransitionGroupPlus transitionMode="out-in">
                        {
                            this.state.tabs.map((t,i)=>{
                                return this.state.activeIndex === i?(<ServiceDesc key={"desc-container-"+t.title} handleCardClick={this.handleCardClick} service={this.state.tabs[i]}/>):null 
                            })
                        }
                    </TransitionGroupPlus>
                </div>
                {/* <div className="content-container">
                        <div className="content-desc">
                            <h2>
                                {this.state.tabs[this.state.activeIndex].title}
                            </h2>
                            <p className="txt">
                                {this.state.tabs[this.state.activeIndex].desc}
                            </p>
                        </div>
                        <div className="service-img-container">
                            <img className="service-img" src={this.state.tabs[this.state.activeIndex].src} alt={this.state.tabs[this.state.activeIndex].title}/>
                        </div>
                </div> */}
                <div className="mobile-service-list">
                    {
                        this.state.tabs[this.state.activeIndex].cards.map((c,i)=>{
                            return (
                                <div className="service-card" key={"mobile-"+c.title+'-'+i}>
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
                </div>
                
            </section>
        )
    }
}