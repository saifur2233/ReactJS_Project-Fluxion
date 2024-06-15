import React, { useEffect } from "react";
import {
    FaLaptopCode,
    FaMobileAlt,
    FaDesktop,
    FaLaptopMedical,
    FaPager,
    FaSearchengin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceSection = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
        });
    }, [])

    return (
        <div className="pb-12">
            <div className="hero">
                <div className="hero-content flex flex-col lg:flex-row lg:px-16">
                    <div>
                        <p className="font-bold text-primary">SERVICES</p>
                        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Services We Offer</h1>
                        <p className="py-6 w-3/4">
                            With Oitech you can create beautiful and elegant websites that
                            suits your business. Also, Oitech makes it possible to design
                            attractive and refined websites that fit your company's identity
                            and purpose.
                        </p>
                    </div>
                    <div className="pr-12">
                        <Link to={"/services"}>
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-primary">See All Services</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-16">
                <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white" data-aos="flip-left">
                    <div className="card-body">
                        <FaLaptopCode size={"2em"}></FaLaptopCode>
                        <h2 className="card-title text-2xl font-bold">Web Development</h2>
                        <p className="text-justify">
                            Create charming and graceful websites that match your business
                            with Oitech's assistance.
                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-link hover:text-white">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white" data-aos="flip-left">
                    <div className="card-body">
                        <FaMobileAlt size={"2em"}></FaMobileAlt>
                        <h2 className="card-title text-2xl font-bold">Apps Development</h2>
                        <p className="text-justify">
                            With Oitech, you can build exquisite and responsive app that
                            reflect your business's style and messaging.
                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-link hover:text-white">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white" data-aos="flip-left">
                    <div className="card-body">
                        <FaDesktop size={"2em"}></FaDesktop>
                        <h2 className="card-title text-2xl font-bold">IT Consulting</h2>
                        <p className="text-justify">
                            Oitech offers IT consulting services to help businesses make
                            informed decisions about their technology infrastructure and
                            strategy.
                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-link hover:text-white">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white" data-aos="flip-left">
                    <div className="card-body">
                        <FaLaptopMedical size={"2em"}></FaLaptopMedical>
                        <h2 className="card-title text-2xl font-bold">
                            Software Maintenance
                        </h2>
                        <p className="text-justify">
                            Oitech offers software maintenance services to ensure that your
                            software is up-to-date and functioning properly.
                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-link hover:text-white">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white" data-aos="flip-left">
                    <div className="card-body">
                        <FaPager size={"2em"}></FaPager>
                        <h2 className="card-title text-2xl font-bold">Digital Marketing</h2>
                        <p className="text-justify">
                            Oitech offers digital marketing services to help businesses
                            promote their brand and reach their target audience through
                            various online channels.
                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-link hover:text-white">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white" data-aos="flip-left">
                    <div className="card-body">
                        <FaSearchengin size={"2em"}></FaSearchengin>
                        <h2 className="card-title text-2xl font-bold">Data Analysis</h2>
                        <p className="text-justify">
                            Oitech offers data analysis services to help businesses make sense
                            of their data, uncover insights, and make data-driven decisions.
                        </p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-link hover:text-white">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
