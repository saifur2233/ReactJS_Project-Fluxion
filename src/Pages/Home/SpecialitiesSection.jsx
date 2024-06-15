import React from "react";
import {
    FaDesktop,
    FaDiceD6,
    FaAlignJustify,
    FaGooglePlusG,
    FaMagic,
    FaCheckCircle,
    FaClone,
    FaPhotoVideo,
} from "react-icons/fa";

const SpecialitiesSection = () => {
    return (
        <div className="hero py-12">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Oitech Specialities</h1>
                    <p className="py-6">
                        Oitech is popular for the below specialities that can make your
                        website look beautiful.
                    </p>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className="card shadow-2xl hover:scale-110">
                            <div className="card-body items-center text-center" >
                                <FaDesktop
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"5em"}
                                    className="p-3 border-none rounded"
                                />
                                <h2 className="card-title font-bold">High Resolution</h2>
                                <p>Provided with high resolution images.</p>
                            </div>
                        </div>
                        <div className="card shadow-2xl hover:scale-110">
                            <div className="card-body items-center text-center">
                                <FaDiceD6
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"5em"}
                                    className="p-3 border-none rounded"
                                />
                                <h2 className="card-title font-bold">Color Schemes</h2>
                                <p>You can use color schemes as you need.</p>
                            </div>
                        </div>
                        <div className="card shadow-2xl hover:scale-110">
                            <div className="card-body items-center text-center">
                                <FaGooglePlusG
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"5em"}
                                    className="p-3 border-none rounded"
                                />
                                <h2 className="card-title font-bold">Google Fonts</h2>
                                <p>You can change the fonts of the website.</p>
                            </div>
                        </div>
                        <div className="card shadow-2xl hover:scale-110">
                            <div className="card-body items-center text-center">
                                <FaAlignJustify
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"5em"}
                                    className="p-3 border-none rounded"
                                />
                                <h2 className="card-title font-bold">Clean Codes</h2>
                                <p>Clean code which can be understood.</p>
                            </div>
                        </div>
                        <div className="card shadow-2xl hover:scale-110">
                            <div className="card-body items-center text-center">
                                <FaMagic
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"5em"}
                                    className="p-3 border-none rounded"
                                />
                                <h2 className="card-title font-bold">Responsive Design</h2>
                                <p>Fully responsive and retina ready.</p>
                            </div>
                        </div>
                        <div className="card shadow-2xl hover:scale-110">
                            <div className="card-body items-center text-center">
                                <FaCheckCircle
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"5em"}
                                    className="p-3 border-none rounded"
                                />
                                <h2 className="card-title font-bold">Easy to Use</h2>
                                <p>The template can be fully customizable with ease.</p>
                            </div>
                        </div>
                        <div className="card shadow-2xl hover:scale-110">
                            <div className="card-body items-center text-center">
                                <FaClone
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"5em"}
                                    className="p-3 border-none rounded"
                                />
                                <h2 className="card-title font-bold">Perfect Showcase</h2>
                                <p>Template makes your website look beautiful.</p>
                            </div>
                        </div>
                        <div className="card shadow-2xl hover:scale-110">
                            <div className="card-body items-center text-center">
                                <FaPhotoVideo
                                    style={{
                                        color: "#09aff4",
                                        backgroundColor: "rgb(9,175,244,0.15)",
                                    }}
                                    size={"5em"}
                                    className="p-3 border-none rounded"
                                />
                                <h2 className="card-title font-bold">Video Animation</h2>
                                <p>You can also add videos to the website as you need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialitiesSection;
