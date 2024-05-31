import React from "react";
import { FaChrome, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <div className="hero py-12">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Awesome Portfolio</h1>
                    <p className="py-6">
                        Oitech harmonious design and super clean looks will make your
                        website look beautiful and elegant. It makes your creation look
                        good.
                    </p>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://user-images.githubusercontent.com/85455377/227472250-4e50e6d1-0a6d-4936-8be0-328707f2efb5.png"
                                    alt="portfolio1"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">MEDICARE</h2>
                                <p className="text-justify">
                                    MediCare is a MERN stack project. A user can see the doctor’s
                                    available slot time and book an appointment. Admin can add
                                    doctors to the system. Each user has a dashboard where he/she
                                    sees his booking appointment details and the doctor sees who
                                    takes appointments.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <Link to={"https://medicare-cf743.web.app/"}>
                                            <button className="btn btn-outline btn-success gap-2">
                                                <FaChrome size={"2em"}></FaChrome>
                                                Live
                                            </button>
                                        </Link>
                                        <button className="btn btn-outline btn-success gap-2">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </button>
                                        <button className="btn btn-outline btn-success gap-2">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </button>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/react-native.png"
                                                alt="reacticon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/nolan/64/api-settings.png"
                                                alt="restapi-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/express.png"
                                                alt="expressjs-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/mongodb.png"
                                                alt="mongo-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://user-images.githubusercontent.com/85455377/230288945-30253db6-7430-4979-b8b7-c4a5ca018502.png"
                                    alt="portfolio1"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Auraro | Online Furniture Shop</h2>
                                <p className="text-justify">
                                    Auraro is a second hand furniture sale website. It is the
                                    biggest platform in the Bangladesh. Anyone can sell his/her
                                    used furniture here. Anyone can buyer used furniture in a low
                                    cost. A seller can advertise for his/her furniture to display
                                    in advertise page. A normal-user can see his/her wishlist
                                    product. An admin can manage the full website. An admin can
                                    delete any user from the website.
                                </p>
                                <div className="card-actions grid grid-rows-2 grid-flow-col">
                                    <div className="flex justify-center gap-4">
                                        <button className="btn btn-outline btn-success gap-2">
                                            <FaChrome size={"2em"}></FaChrome>
                                            Live
                                        </button>
                                        <button className="btn btn-outline btn-success gap-2">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Frontend
                                        </button>
                                        <button className="btn btn-outline btn-success gap-2">
                                            <FaGithub size={"2em"}></FaGithub>
                                            Backend
                                        </button>
                                    </div>
                                    <div>
                                        <h2 className="font-bold text-xl">Tech Stack</h2>
                                        <div className="flex gap-3">
                                            <img
                                                src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                                                alt="htmlicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/css3.png"
                                                alt="cssicon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/50/000000/react-native.png"
                                                alt="reacticon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/nolan/64/api-settings.png"
                                                alt="restapi-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/express.png"
                                                alt="expressjs-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/color/48/000000/mongodb.png"
                                                alt="mongo-icon"
                                                width={"60px"}
                                            />
                                            <img
                                                src="https://img.icons8.com/windows/48/000000/node-js.png"
                                                alt="js-icon"
                                                width={"60px"}
                                            />
                                        </div>
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

export default Portfolio;
