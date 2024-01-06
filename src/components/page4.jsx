import React from "react";
import Angelica from '../assests/angelica.png';
import Anna from '../assests/anna.jpg';
import Damain from '../assests/damain1.png';
import Bmw from '../assests/bmw.svg';
import Citi from '../assests/citi.svg';
import Fujitsu from '../assests/fujitsu.png';
import Skycash from '../assests/skycash.png';
import Hken from '../assests/heineken.svg';
import Sant from '../assests/santander.svg';

const Page4 = () => {
    window.onscroll = function() {page4Fun()};

    function page4Fun() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("slider").classList = "moveUp";
    }
    else {
        document.getElementById("slider").classList = "moveDown";
        }
    }
    return (
        <div className="container6">
            <div className="row1">
                <img className="people1" src={Angelica} alt="" />
                <img id="slider" className="people2" src={Damain} alt="" />
                <img className="people3" src={Angelica} alt="" />
                <img className="people" src={Anna} alt="" />
            </div>
            <div className="leftSide">
                <p className="upTxt">Trusted by global companies</p>
                <div className="logos">
                    <img className="fuj" src={Fujitsu} alt="" />
                    <img className="hken" src={Skycash} alt="" />
                    <img src={Hken} alt="" />
                    <img src={Bmw} alt="" />
                    <img src={Citi} alt="" />
                    <img src={Sant} alt="" />

                </div>
            </div>
        </div>
    )
}
export default Page4;