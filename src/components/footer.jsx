import React from "react";
import Flogo from '../assests/footer-logo.svg';
import {FaLinkedin, FaTwitter, FaDiscord} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="container">
            <div className="flex1">
                <div className="">
                    <img src={Flogo} className="logo" alt="" />
                    <p className="txt">We are a community-owned platform, that connects tech experts with the world's leading companies.</p>
                    <div className="icons">
                        <a href="#"><FaLinkedin/></a>
                        <a href="#"><FaTwitter/></a>
                        <a href="#"><FaDiscord/></a>
                    </div>
                </div>
                <div className="badilist">
                    <p className="lii">Shortcuts</p>
                    <ul className="list">
                        <li>How to apply as an developer</li>
                        <li>Hire faster with Wennect</li>
                        <li>Web3 approach</li>
                    </ul>
                </div>
                <div className="badilist">
                    <p className="lii">About</p>
                    <ul className="list">
                        <li>What is Wennect</li>
                        <li>Community like no other</li>
                    </ul>
                </div>
            </div>
            <p className="lamba">The WNCT Token is an ERC-20 token issued on the Ethereum blockchain network by the Wennect Technology Foundation, a nonprofit foundation. Wennect Tokens do not represent any right to or claim on the Wennect network or any other person or entity, and have been adopted by the Wennect network and users for various activities on the network only, such as for staking, governance, voting and payment purposes. Wennect Tokens are currently anticipated to be publicly released later this year.</p>
            <div className="bye">
                <p className="copy">© Wennect 2022</p>
                <div className="aakhri">
                    <p className="khatam">Code of Conduct</p>
                    <p className="khatam">Privacy Policy & Cookie Notice</p>
                    <p className="khatam">Terms of service</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;