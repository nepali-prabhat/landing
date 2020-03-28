import React, { Component } from 'react'

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex:0,
            tabs:[{
                title:"Artificial Intelligence",
                desc:`Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's stdard dummy text ever since
                the 1500s, when an unknown printer.
                `,
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
                ]
            },
            {
                title:"Blockchain",
                desc:`Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's stdard dummy text ever since
                the 1500s, when an unknown printer.
                `,
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
                ]
            },
            {
                title:"Internet of Things",
                desc:`Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's stdard dummy text ever since
                the 1500s, when an unknown printer.
                `,
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
                ]
            }
        ]
        };
    }
    interval = null;
    handleTabClick(i){
        this.setState({activeIndex:i})
    }

    componentDidMount(){
        // this.interval = setInterval(()=>{
        //     this.setState({activeIndex:(this.state.activeIndex+1)%this.state.tabs.length})},4000
        // )
    }
    componentWillUnmount(){
        // clearInterval(this.interval)
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
                <div className="content-container">
                        <div className="content-desc">
                            <h2>
                                {this.state.tabs[this.state.activeIndex].title}
                            </h2>
                        </div>
                </div>
            </section>
        )
    }
}
