import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const OfficeLocationSection = () => {
    return (
        <div>
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black text-center">
                Our Offices Around The World
            </h1>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="p-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="card card-bordered border-t-4 rounded-b-lg border-primary">
                            <div className="card-body">
                                <h2 className="card-title text-primary items-start font-bold text-2xl">
                                    New Zealand
                                </h2>
                                <p className="text-lg text-start pb-2">Auckland, New Zealand</p>
                                <div className="flex gap-6">
                                    <FaMailBulk
                                        style={{
                                            color: "#09aff4",
                                            backgroundColor: "rgb(9,175,244,0.15)",
                                        }}
                                        size={"3em"}
                                        className="p-2"
                                    ></FaMailBulk>
                                    <div className="text-start">
                                        <p className="font-bold text-primary">Email:</p>
                                        <p>shirapria@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <FaPhoneAlt
                                        style={{
                                            color: "#09aff4",
                                            backgroundColor: "rgb(9,175,244,0.15)",
                                        }}
                                        size={"3em"}
                                        className="p-2"
                                    ></FaPhoneAlt>
                                    <div className="text-start">
                                        <p className="font-bold text-primary">Phone:</p>
                                        <p>+64 20 4166 1516</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-bordered border-t-4 rounded-b-lg border-primary">
                            <div className="card-body">
                                <h2 className="card-title text-primary items-start font-bold text-2xl">
                                    Bangladesh
                                </h2>
                                <p className="text-lg text-start pb-2">
                                    Road 12, Dhanmonddi, Dhaka, Bangladesh 3505
                                </p>
                                <div className="flex gap-6">
                                    <FaMailBulk
                                        style={{
                                            color: "#09aff4",
                                            backgroundColor: "rgb(9,175,244,0.15)",
                                        }}
                                        size={"3em"}
                                        className="p-2"
                                    ></FaMailBulk>
                                    <div className="text-start">
                                        <p className="font-bold text-primary">Email:</p>
                                        <p>oitech@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <FaPhoneAlt
                                        style={{
                                            color: "#09aff4",
                                            backgroundColor: "rgb(9,175,244,0.15)",
                                        }}
                                        size={"3em"}
                                        className="p-2"
                                    ></FaPhoneAlt>
                                    <div className="text-start">
                                        <p className="font-bold text-primary">Phone:</p>
                                        <p>+8801309080748</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-bordered border-t-4 rounded-b-lg border-primary">
                            <div className="card-body">
                                <h2 className="card-title text-primary items-start font-bold text-2xl">
                                    Bangladesh
                                </h2>
                                <p className="text-lg text-start pb-2">
                                    Road 12, Dhanmonddi, Dhaka, Bangladesh 3505
                                </p>
                                <div className="flex gap-6">
                                    <FaMailBulk
                                        style={{
                                            color: "#09aff4",
                                            backgroundColor: "rgb(9,175,244,0.15)",
                                        }}
                                        size={"3em"}
                                        className="p-2"
                                    ></FaMailBulk>
                                    <div className="text-start">
                                        <p className="font-bold text-primary">Email:</p>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <FaPhoneAlt
                                        style={{
                                            color: "#09aff4",
                                            backgroundColor: "rgb(9,175,244,0.15)",
                                        }}
                                        size={"3em"}
                                        className="p-2"
                                    ></FaPhoneAlt>
                                    <div className="text-start">
                                        <p className="font-bold text-primary">Phone:</p>
                                        <p>+29876543210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeLocationSection;
