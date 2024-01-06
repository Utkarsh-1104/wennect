import React from "react";
import Google from '../assests/google.jpg';
import Tushar from '../assests/tushar.jpg';

const Press  = () => {
    return (
        <div className="container2">
            <div className="press">
                In the press
            </div>
            <div className="poopoo">
                <div className="card1">
                    <div>
                        <p className="forb">Forbes</p>
                        <p className="rev">A revolution in the IT recruitment</p>
                        <p className="tt">Blockchain technology is increasingly<br/> revolutionising the IT recruitment market<br/> and enables an innovative business model<br/> that just arrived in Poland.</p>
                    </div>
                    <img src={Tushar} className="goo" alt="" />
                </div>
                <div className="card2">
                    <div>
                        <p className="forb">Forbes</p>
                        <p className="rev">Tokens - a new way to diversify your<br/> investment portfolio</p>
                        <p className="tt">Tokens as employee benefits allow<br/>combining employment with ownership of<br/> company assets.</p>
                    </div>
                    <img src={Google} className="goo" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Press;