import React from "react";
import Meet from '../assests/meet1.jpg';
import Comp from '../assests/last1.jpg';

const Start = () => {
    return(
        <div className="container3">
            <p className="press">Get Started</p>
            <div className="poopoo">
                <div className="crd1">
                    <img src={Meet} alt="" className="dev" />
                    <div className="colu">
                        {/* <Fun num="1" head="Create your Wennect profile" txt="Add your skills, experience, and details of projects you're interested in to the platform"/> */}
                        <p className="nn">1</p>
                        <div className="owo">
                            <p className="sch">Create your Wennect profile</p>
                            <p className="ch">Schedule a call with a Wennect Talent Manager to discuss<br/> what you're looking for.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="colu">
                        <p className="nn">2</p>
                        <div className="ooo">
                            <p className="sch">Get vetted</p>
                            <p className="ch">A Wennect Talent Manager will call you to confirm your skills<br/> and experience</p>
                        </div>
                    </div>
                    <hr />
                    <div className="colu">
                        <p className="nn">3</p>
                        <div className="ooo">
                            <p className="sch">Get hired</p>
                            <p className="ch">Get matched to projects that need your skills and experience.<br/>Accept the offer and start working.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="colu">
                        <p className="nn">4</p>
                        <div className="owo">
                            <p className="sch">Get paid</p>
                            <p className="ch">Issue your invoice and Wennect pays you 100% of your rate.<br/>There are no hidden fees or charges.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="butns">
                        <div>
                            <div className="bat"></div>
                            <div className="joindev"><span className="likhawat">JOIN</span><br/><span className="
                            chot">as a developer</span></div>
                        </div>
                        <button className="lear">Learn More</button>
                    </div>
                </div>
                <div className="crd2">
                <img src={Comp} alt="" className="dev" />
                    <div className="colu">
                        {/* <Fun num="1" head="Create your Wennect profile" txt="Add your skills, experience, and details of projects you're interested in to the platform"/> */}
                        <div className="owo2">
                            <p className="sch">Schedule a call</p>
                            <p className="ch">Schedule a call with a Wennect Talent Manager to discuss<br/> what you're looking for.</p>
                        </div>
                        <p className="nn">1</p>
                    </div>
                    <hr />
                    <div className="colu">
                        <div className="ooo2">
                            <p className="sch">Get legal out of the way</p>
                            <p className="ch">A Wennect Talent Manager will call you to confirm your skills<br/> and experience</p>
                        </div>
                        <p className="nn">2</p>
                    </div>
                    <hr />
                    <div className="colu">
                        <div className="ooo2">
                            <p className="sch">Connect with experts</p>
                            <p className="ch">Get matched to projects that need your skills and experience.<br/>Accept the offer and start working.</p>
                        </div>
                        <p className="nn">3</p>
                    </div>
                    <hr />
                    <div className="colu">
                        <div className="owo2">
                            <p className="sch">Project kick-off</p>
                            <p className="ch">Issue your invoice and Wennect pays you 100% of your rate.<br/>There are no hidden fees or charges.</p>
                        </div>
                        <p className="nn">4</p>
                    </div>
                    <hr />
                    <div className="butns1">
                        <button className="learn">Learn More</button>
                        <div>
                            <div className="batn"></div>
                            <div className="hire"><span className="likhawat">JOIN</span><span className="
                            chot"><br/>as a developer</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Start;