import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
        });
    }, [])

    // const words = ["Providing The Best Services & IT Solutions..."];
    // let i = 0;
    // let j = 0;
    // let currentWord = "";
    // let isDeleting = false;

    // function type() {
    //     currentWord = words[i];
    //     if (isDeleting) {
    //         document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
    //         j--;
    //         if (j == 0) {
    //             isDeleting = false;
    //             i++;
    //             if (i == words.length) {
    //                 i = 0;
    //             }
    //         }
    //     } else {
    //         document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
    //         j++;
    //         if (j == currentWord.length) {
    //             isDeleting = true;
    //         }
    //     }
    //     setTimeout(type, 100);
    // }

    // useEffect(() => {
    //     type();
    // })

    return (
        <div className="hero min-h-screen py-12">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-16">
                {/* <img loading="lazy"
                    src="https://i.ibb.co/LPRFtp1/illustration-1.png"
                    className="sm:max-w-sm md:max-w-md rounded-lg hover:scale-110"
                /> */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="office-long-2.png" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="office-long-1.png" alt="office content 2" />
                </div>
                <div>
                    <p className="font-bold text-primary">IT SOLUTIONS</p>
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">
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
