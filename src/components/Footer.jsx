import React from "react";
import facebook from "../assets/Facebook.png";
import linkedin from "../assets/Linkedin.png";
import twitter from "../assets/Twitter.png";
import github from "../assets/Github.png";
import fingers from "../assets/Fingers.png";
import ball from "../assets/Ball.png";

const Footer = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(129deg, rgba(255,245,255,1) 0%, rgba(235,204,255,0.1) 48%, rgba(255,204,255,0.2)',
            }}
        >
            <div className="w-[90%] mx-auto pt-10">
                <hr />
                <h3 className="text-gray-700 text-2xl font-semibold mt-5">
                    UniCraft
                </h3>
                <p className="text-gray-400 text-xl w-[22%] my-2 font-medium">
                        Design amazing digital experiences that create more happy in the world.
                </p>
                <div className="mt-5 pb-5 flex justify-between">
                    <p className="text-gray-400 text-lg">
                        © 2077 Untitled UI. All rights reserved.
                    </p>
                    <div className="flex gap-5">
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={facebook} alt="" />
                        <img src={github} alt="" />
                        <img src={fingers} alt="" />
                        <img src={ball} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
