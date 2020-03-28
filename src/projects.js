import React, { Component } from 'react'
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
                <div className="content-container" style={{minHeight: '450px'}}>
                        <div className="content-desc">
                            <h2>
                                {this.state.tabs[this.state.activeIndex].title}
                            </h2>
                            <p className="txt">
                                {this.state.tabs[this.state.activeIndex].desc}
                                <ol className="projects-list">
                                    {
                                        this.state.tabs[this.state.activeIndex].lists.map((l)=>( <li className="txt">{l}</li> ))
                                    }
                                </ol>
                            </p>
                        </div>
                        <div className="d-flex">
                            <img className="project-img" src={this.state.tabs[this.state.activeIndex].src} alt={this.state.tabs[this.state.activeIndex].title}/>
                        </div>
                </div>
            </section>
        )
    }
}
