import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import MobileA from './mobile1.svg';
const LearnMore = ()=><div className="link highlight">Learn More</div>
export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manuallyClicked:false,
            activeIndex:0,
            tabs:[{
                title:"Somtu",
                desc:`Many desktop publishing packages and web page editors now use Lorem Ipsum as
                their default model text, and a search for 'lorem ipsum' will uncover many web sites
                still in their infancy. Model text, and a search for 'lorem ipsum' will uncover many web
                sites still in their infancy.
                `,
                src:MobileA,
                lists:[
                    "All the Lorem Ipsum generators on the Internet.",
                    "The standard chunk of LorThe shunk of LorThe standard chunk of LorThe standard chunk of Lorem Ipsum used since the 1500s.",
                    "The Extremes of Good and Evil.",
                    "Ink of Lorem Ipsum used since the 1500s.",
                    "The Extremes of Good and Evil."
                ],
            },
            {
                title:"Ipsum",
                desc:`IA powerful dual-perspective from two MIT schools – the
                MIT Sloan School of MIT Computer Science and Artificial
                Intelligence Laboratory understanding of AI.
                `,
                src:MobileA,
                lists:[
                    "The standard chunk of LorThe shunk of LorThe standard chunk of LorThe standard chunk of Lorem Ipsum used since the 1500s.",
                    "The Extremes of Good and Evil.",
                    "All the Lorem Ipsum generators on the Internet.",
                    "The Extremes of Good and Evil.",
                    "Ink of Lorem Ipsum used since the 1500s.",
                ],
            },
            {
                title:"Dora",
                desc:`Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin.
                `,
                src:MobileA,
                lists:[
                    "The Extremes of Good and Evil.",
                    "All the Lorem Ipsum generators on the Internet.",
                    "The standard chunk of LorThe shunk of LorThe standard chunk of LorThe standard chunk of Lorem Ipsum used since the 1500s.",
                    "Ink of Lorem Ipsum used since the 1500s.",
                    "The Extremes of Good and Evil."
                ],
            }
        ]
        };
    }
    interval = null;
    handleTabClick(i){
        this.setState({activeIndex:i, manuallyClicked:true})
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
            <section className="project">
                <div className="sec-desc">
                <h1>Talk to us <span className="highlight"> Directly</span>!</h1>
                <p className="txt">You can call us or shoot us a quick message!
We respond in less than 1 min.
</p>
                <input name="email"/>
                <button>
                    Get Started
                </button>
                </div>
                <Carousel showStatus={false} className="service-card-container" centerMode useKeyboardArrows centerSlidePercentage={50} showThumbs={false} emulateTouch>
                    {
                        this.state.tabs[this.state.activeIndex].cards.map((c)=>{
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
            </section>
        )
    }
}
