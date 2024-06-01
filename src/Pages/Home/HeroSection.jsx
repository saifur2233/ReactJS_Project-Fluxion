import React from "react";

const HeroSection = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse px-0 lg:px-16">
                <img
                    src="https://i.ibb.co/LPRFtp1/illustration-1.png"
                    className="max-w-md rounded-lg"
                />
                <div>
                    <p className="font-bold text-primary">IT SOLUTIONS</p>
                    <h1 className="text-5xl font-bold">
                        Providing The Best Services & IT Solutions
                    </h1>
                    <p className="py-6">
                        Our company is dedicated to providing IT solutions that enable
                        businesses and individuals to overcome challenging obstacles and
                        achieve their goals.
                    </p>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline btn-primary gap-2">
                        Get Started
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
