import React from "react";
import Rotate from '../assests/rotate1.svg';
// import '../components/rot';

const Work = () => {
    // window.onscroll = function() {myFunction()};

    // function myFunction() {
    // if (document.documentElement.scrollTop > 3500) {
    //     document.getElementById("myImg").classList = "slideUp";
    // }
    // else {
    //     document.getElementById("myImg").classList = "slideDown";
    //     }
    // }
    window.addEventListener(
        "scroll",
        () => {
          document.img.style.setProperty(
            "--scroll",
            window.scrollY / (document.body.scrollY - window.innerHeight)
          );
        },
        false
      );
    return (
        <div className="container1">
            <div className="flex">
                <div className="dabba1">
                    <button className="btn1">FOR DEVELOPERS</button>
                    <button className="btn2">FOR COMPANIES</button>
                    <div className="phirflex">
                        <div className="numbers">
                            <div className="num">
                                <p className="no">1</p>
                            </div>
                            <div className="num2">
                                <p className="no">2</p>
                            </div>
                            <div className="num3">
                                <p className="no">3</p>
                            </div>
                        </div>
                        <div className="content">
                            <div className="kuch">
                                <p className="bada">Create a profile</p>
                                <p className="chota">Add your details to create your Wennect profile.</p>
                            </div>
                            <div className="kuch">
                                <p className="bada">Get Vetted</p>
                                <p className="chota">A Wennect Talent Manager will call you to confirm your skills and experience.</p>
                            </div>
                            <div className="kuch">
                                <p className="bada">Start work</p>
                                <p className="chota">You're all set! We'll match you to exciting projects for leading global companies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ind">
                        <p className="chiddi">By submitting this form, I acknowledge receipt of the Privacy Policy.</p>
                        <p className="chiddi">The controller of your personal data is Wennect OÜ, a company established under the laws of Estonia. Your personal data provided by you in the registration form above will be used for the purpose of sending you an email with instructions on how to set up your account on the Wennect Platform. The legal basis of processing your personal data is the fulfilment of contract with the controller. For more information about the processing of your personal data, including your rights, please refer to the Privacy Policy.</p>
                    </div>
                </div>
                <div className="dabba2">
                    <p className="work">Work on great things together</p>
                    <p className="fill">Fill out the form if you would like to receive instructions on how to create a WennectPlatform account to your email.</p>
                    <form action="">
                        <input type="text" name="" className="name" placeholder="Name" />
                        <input type="text" name="" className="name" placeholder="Email" /><br/>
                        <label htmlFor="checkbox">
                            <input type="checkbox" name="checkbox" id="check" /> I would like to receive commercial information from Wennect OÜ
                        </label>
                    </form>
                    <div className="btns">
                        <div className="bbtn"></div>
                        <div className="join"><span className="likha">JOIN THE PLATFORM</span></div>
                    </div>
                </div>
            </div>
            <img src={Rotate} id="myImg" className="rot" alt="" />
        </div>
    )
}
export default Work;