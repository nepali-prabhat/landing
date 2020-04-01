import React from 'react';
import TransitionGroupPlus from 'react-transition-group-plus';
import ServiceDesc from './ServiceDesc';
import LearnMore from './LearnMore';
import Path155 from '../fillings/Path155';
import {services} from '../data';

export default ()=> {
    const [state, setState] = React.useState({
        activeIndex:0,
        left:true,
        tabs: services.tabs
    }) 
    const handleTabClick = (i)=>{
        const left = i>state.activeIndex? true:false;
        i!==state.activeIndex && setState({...state, activeIndex:i, left})
    }
        return (
            <section className="services">
                <div className="sec-desc">
                <h1>What <span className="highlight"> Pegcore </span> is all about.</h1>
                <p className="txt">{services.desc}</p>
                </div>
                <div className="tabs-container">
                    <ul className="slideshow-tabs">
                        {
                            state.tabs.map((t,i)=><li key={t.title} onClick={()=>{handleTabClick(i)}} className={`link ${state.activeIndex===i?"active-tab":"inactive-tab"}`}>{t.title}</li>)
                        }
                    </ul>
                </div>
                <div style={{position: 'relative'}}>
                    <TransitionGroupPlus>
                        {
                            state.tabs.map((t,i)=>{
                                return state.activeIndex === i?(<ServiceDesc key={"desc-container-"+t.title} service={state.tabs[i]} left={state.left} />):null 
                            })
                        }
                    </TransitionGroupPlus>
                </div>
                <div className="mobile-service-list">
                    {
                        state.tabs[state.activeIndex].cards.map((c,i)=>(
                            <div className="service-card msc" key={"mobile-"+c.title+'-'+i}>
                                <h3 className="mst">
                                    {c.title}
                                </h3>
                                <p className="txt msd">
                                    {c.desc}
                                </p>
                                <LearnMore />
                            </div>
                        ))
                    }
                </div>
                <Path155/>
            </section>
        )
}