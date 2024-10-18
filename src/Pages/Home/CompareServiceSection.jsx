import React from "react";
import { FaDesktop, FaRegClone, FaMagic } from "react-icons/fa";

const CompareServiceSection = () => {
    return (
        <div
            className="hero py-8 text-white"
            style={{ backgroundColor: "#4ac4f3" }}
        >
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Compare Services</h1>
                    <p className="py-6">
                        Smart IT Solutions prioritizes adaptability, offering services that are tailored to meet specific business needs. While traditional providers may offer standard templates with limited customization, Smart IT Solutions provides unique, purpose-driven designs and multipurpose layouts that are versatile and user-friendly.
                    </p>
                    <div className="py-4 grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white hover:scale-110">
                            <FaDesktop size={"10em"} className="p-3"></FaDesktop>
                            <div className="card-body">
                                <h2 className="card-title">Hard to Customize</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify">
                                        Limited customization, often constrained by pre-built templates.
                                    </p>
                                    {/* <div className="tooltip tooltip-open" data-tip="90"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="90"
                                        max="100"
                                    ></progress> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="font-bold text-5xl">V/S</p>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white hover:scale-110">
                            <FaDesktop size={"10em"} className="p-3"></FaDesktop>
                            <div className="card-body">
                                <h2 className="card-title">Easy to Customize</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify">
                                        Highly customizable services, tailored to unique client requirements.
                                    </p>
                                    {/* <div className="tooltip tooltip-open" data-tip="70"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="70"
                                        max="100"
                                    ></progress> */}
                                </div>
                            </div>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white hover:scale-110">
                            <FaMagic size={"10em"} className="p-3"></FaMagic>
                            <div className="card-body">
                                <h2 className="card-title">Regular Design</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify mb-5">
                                        Traditional similar design and old looks will make
                                        your website common and non-responsive. It can be hinder a business's growth and adaptability.
                                    </p>
                                    {/* <div className="tooltip tooltip-open" data-tip="100"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="100"
                                        max="100"
                                    ></progress> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="font-bold text-5xl">V/S</p>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white hover:scale-110">
                            <FaMagic size={"10em"} className="p-3"></FaMagic>
                            <div className="card-body">
                                <h2 className="card-title">Unique Design</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify mb-5">
                                        Smart IT Solutions harmonious design and super clean looks will make
                                        your website look beautiful and elegant. It makes your
                                        creation look good.
                                    </p>
                                    {/* <div className="tooltip tooltip-open" data-tip="60"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="60"
                                        max="100"
                                    ></progress> */}
                                </div>
                            </div>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white hover:scale-110">
                            <FaRegClone size={"10em"} className="p-3"></FaRegClone>
                            <div className="card-body">
                                <h2 className="card-title">Single purpose layout</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify mb-5">
                                        Traditional IT services often provide rigid, single-purpose layouts that lack the flexibility to adapt to various business requirements.
                                    </p>
                                    {/* <div className="tooltip tooltip-open" data-tip="50"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="50"
                                        max="100"
                                    ></progress> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="font-bold text-5xl">V/S</p>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white hover:scale-110">
                            <FaRegClone size={"10em"} className="p-3"></FaRegClone>
                            <div className="card-body">
                                <h2 className="card-title">Multipurpose layout</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify mb-5">
                                        Simply choose the layout that suits your needs, customize
                                        the sections, headers, sliders, colors, choose from pre-made
                                        useful elements.
                                    </p>
                                    {/* <div className="tooltip tooltip-open" data-tip="80"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="80"
                                        max="100"
                                    ></progress> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompareServiceSection;
