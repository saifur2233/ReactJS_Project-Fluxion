import React from "react";

const TestimonialSection = () => {
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Loved By Our Customers</h1>
                    <p className="py-6">Here are the sayings of our customers</p>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                                <div className="card">
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title font-bold">Cookies!</h2>
                                        <p>We are using cookies for no reason.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Accept</button>
                                            <button className="btn btn-ghost">Deny</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title font-bold">Cookies!</h2>
                                        <p>We are using cookies for no reason.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Accept</button>
                                            <button className="btn btn-ghost">Deny</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                                <div className="card">
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title font-bold">Cookies!</h2>
                                        <p>We are using cookies for no reason.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Accept</button>
                                            <button className="btn btn-ghost">Deny</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title font-bold">Cookies!</h2>
                                        <p>We are using cookies for no reason.</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Accept</button>
                                            <button className="btn btn-ghost">Deny</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide3" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
