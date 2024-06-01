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
                    <h1 className="text-5xl font-bold">Compare Services</h1>
                    <p className="py-6">
                        Comparison of services as per the features and services provided.
                    </p>
                    <div className="py-4 grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white">
                            <FaDesktop s size={"10em"} className="p-3"></FaDesktop>
                            <div className="card-body">
                                <h2 className="card-title">Easy to Customize</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify">
                                        Oitech allows easily to customize the template as per your
                                        business needs. Also it makes easy to tailor-made.
                                    </p>
                                    <div className="tooltip tooltip-open" data-tip="90"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="90"
                                        max="100"
                                    ></progress>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="font-bold text-5xl">V/S</p>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white">
                            <FaDesktop s size={"10em"} className="p-3"></FaDesktop>
                            <div className="card-body">
                                <h2 className="card-title">Easy to Customize</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify">
                                        Oitech allows easily to customize the template as per your
                                        business needs. Also it makes easy to tailor-made.
                                    </p>
                                    <div className="tooltip tooltip-open" data-tip="70"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="70"
                                        max="100"
                                    ></progress>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white">
                            <FaMagic s size={"10em"} className="p-3"></FaMagic>
                            <div className="card-body">
                                <h2 className="card-title">Unique Design</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify mb-5">
                                        Oitech harmonious design and super clean looks will make
                                        your website look beautiful and elegant. It makes your
                                        creation look good.
                                    </p>
                                    <div className="tooltip tooltip-open" data-tip="100"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="100"
                                        max="100"
                                    ></progress>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="font-bold text-5xl">V/S</p>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white">
                            <FaMagic s size={"10em"} className="p-3"></FaMagic>
                            <div className="card-body">
                                <h2 className="card-title">Unique Design</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify mb-5">
                                        Oitech harmonious design and super clean looks will make
                                        your website look beautiful and elegant. It makes your
                                        creation look good.
                                    </p>
                                    <div className="tooltip tooltip-open" data-tip="60"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="60"
                                        max="100"
                                    ></progress>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white">
                            <FaRegClone s size={"10em"} className="p-3"></FaRegClone>
                            <div className="card-body">
                                <h2 className="card-title">Multipurpose layout</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify mb-5">
                                        Simply choose the layout that suits your needs, customize
                                        the sections, headers, sliders, colors, choose from pre-made
                                        useful elements.
                                    </p>
                                    <div className="tooltip tooltip-open" data-tip="50"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="50"
                                        max="100"
                                    ></progress>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="font-bold text-5xl">V/S</p>
                        </div>
                        <div className="card card-side shadow-2xl hover:bg-primary hover:text-white">
                            <FaRegClone s size={"10em"} className="p-3"></FaRegClone>
                            <div className="card-body">
                                <h2 className="card-title">Multipurpose layout</h2>

                                <div className="card-actions justify-center">
                                    <p className="text-justify mb-5">
                                        Simply choose the layout that suits your needs, customize
                                        the sections, headers, sliders, colors, choose from pre-made
                                        useful elements.
                                    </p>
                                    <div className="tooltip tooltip-open" data-tip="80"></div>
                                    <progress
                                        className="progress progress-white"
                                        value="80"
                                        max="100"
                                    ></progress>
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
