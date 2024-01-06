import React from "react";
import Meet from '../assests/meet.jpg';
import Comp from '../assests/last.jpg';

const Page5 = () => {
    window.onscroll = function() {page5Fun()};

    function page5Fun() {
    if (document.documentElement.scrollTop > page5Fun) {
        document.getElementById("photo").classList = "scaleUp";
        document.getElementById("photo1").classList = "scaleUp";
    }
    else {
        document.getElementById("photo").classList = "scaleDown";
        document.getElementById("photo1").classList = "scaleDown";
    }
    }
    return (
        <div className="container4">
            <div className="flexpic">
                <div className="pic1">
                    <p className="develope">For Developers</p>
                    <div>
                        <img src={Meet} id="photo" className="mee" alt="" />
                    </div>
                    <div className="upar">
                        <div className="batna"></div>
                        <div className="hire1"><span className="likhawat">JOIN</span><span className="
                        chot"><br/>as a developer</span></div>
                    </div>
                </div>
                <div className="pic2">
                    <p className="compa">For Companies</p>
                    <div>
                        <img src={Comp} id="photo1" className="mee" alt="" />
                    </div>
                    <div className="upar1">
                        <div className="batna1"></div>
                        <div className="hire2"><span className="likhawat">Hire</span><span className="
                        chot"><br/>developers</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page5;