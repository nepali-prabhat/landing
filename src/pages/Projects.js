import React, { Component } from 'react'
import TransitionGroupPlus from 'react-transition-group-plus';

import ProjectDesc from './ProjectDesc';
import {projects} from '../data';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex:0,
            tabs: projects.tabs
        };
    }
    handleTabClick(i){
        this.setState({activeIndex:i})
    }
    render() {
        return (
            <section className="project">
                <div className="sec-desc">
                <h1>Our <span className="highlight"> Projects. </span></h1>
                <p className="txt">{projects.desc}</p>
                </div>
                <div className="tabs-container">
                    <ul className="slideshow-tabs">
                        {
                            this.state.tabs.map((t,i)=><li key={t.title} onClick={()=>{this.handleTabClick(i)}} className={`link ${this.state.activeIndex===i?"active-tab":"inactive-tab"}`}>{t.title}</li>)
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