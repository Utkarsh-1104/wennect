import React from "react";

const Page6 = () => {
    window.onscroll = function() {myFunction1()};

    function myFunction1() {
    if (document.documentElement.scrollTop > 400) {
        document.getElementById("upp").classList = "upper";
    }
    else {
        document.getElementById("upp").classList = "down";
        }
    }
    return (
        <div className="container5">
            <div id="upp" className="flex2">
                <div className="own">
                    <p className="ora">Join a community of owners</p>
                    <p className="orake">Connect with like-minded experts, enhance your knowledge and skills, and accelerate your career. Become part of a community-owned company.</p>
                    <div className="ssds">
                        <p className="ora1">Secure your career and your future</p>
                        <p className="orake">Connect with like-minded experts, enhance your knowledge and skills, and accelerate your career. Become part of a community-owned company.</p>
                    </div>
                    <p className="ora">Join a community of owners</p>
                    <p className="orake">Connect with like-minded experts, enhance your knowledge and skills, and accelerate your career. Become part of a community-owned company.</p>
                </div>
                <div className="develop">
                    <p className="hir">Join a community of owners</p>
                    <p className="hirke">Connect with like-minded experts, enhance your knowledge and skills, and accelerate your career. Become part of a community-owned company.</p>
                    <div className="ssds">
                        <p className="hir1">Secure your career and your future</p>
                        <p className="hirke">Connect with like-minded experts, enhance your knowledge and skills, and accelerate your career. Become part of a community-owned company.</p>
                    </div>
                    <p className="hir">Join a community of owners</p>
                    <p className="hirke">Connect with like-minded experts, enhance your knowledge and skills, and accelerate your career. Become part of a community-owned company.</p>
                </div>
            </div>
        </div>
    )
}
export default Page6;