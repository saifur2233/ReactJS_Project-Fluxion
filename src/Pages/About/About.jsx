import React from "react";
import {
    FaMedal,
    FaRunning,
    FaMapMarkedAlt,
    FaRegComments,
} from "react-icons/fa";

const About = () => {
    return (
        <>
            <div className="hero min-h-screen py-20">
                <div className="hero-content flex-col py-10 lg:flex-row-reverse lg:px-16">
                    <img
                        src="about.png"
                        className="sm:max-w-sm md:max-w-md rounded-lg"
                    />
                    <div>
                        <p className="font-bold text-primary">ABOUT</p>
                        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
                            WE ARE BUILDING SOFTWARE TO HELP
                        </h1>
                        <p className="py-6">
                            We are a company boutique for digital transformation and software
                            development that offers state-of - the-art engineering solutions,
                            helping businesses and business customers untangle complicated
                            problems.
                        </p>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="flex gap-6">
                                <FaMedal
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"3em"}
                                    className="p-2"
                                ></FaMedal>
                                <div className="text-start">
                                    <p className="font-bold text-primary">First On Field</p>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <FaRunning
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"3em"}
                                    className="p-2"
                                ></FaRunning>
                                <div className="text-start">
                                    <p className="font-bold text-primary">Easy To Reach</p>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <FaMapMarkedAlt
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"3em"}
                                    className="p-2"
                                ></FaMapMarkedAlt>
                                <div className="text-start">
                                    <p className="font-bold text-primary">Worldwide Services</p>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <FaRegComments
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"3em"}
                                    className="p-2"
                                ></FaRegComments>
                                <div className="text-start">
                                    <p className="font-bold text-primary">24/7 Support</p>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero pb-12">
                <div className="hero-content flex-col lg:flex-row lg:px-16">
                    <img
                        src="choose.png"
                        alt="choose"
                        className="sm:max-w-sm md:max-w-md rounded-lg "
                    />
                    <div className="px-6">
                        <p className="font-bold text-primary">ABOUT</p>
                        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black ">
                            WE ARE BUILDING SOFTWARE TO HELP
                        </h1>
                        <p className="py-6 pr-10 text-justify">
                            We are a company boutique for digital transformation and software
                            development that offers state-of - the-art engineering solutions,
                            helping businesses and business customers untangle complicated
                            problems.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
