import React , {Component} from 'react'
import { TimelineLite, CSSPlugin } from "gsap/all";

export default class ProjectDesc extends Component {
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
        tl.staggerFrom(this.img, 1, {autoAlpha:0.8, y:25},0,'-=1')
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
