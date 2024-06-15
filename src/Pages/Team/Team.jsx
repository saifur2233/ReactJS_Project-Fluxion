import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
    return (
        <div>
            <div className="hero pt-20">
                <div className="hero-content text-center">
                    <div className="pt-10">
                        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Management Team</h1>
                        <p className="py-6 px-20">
                            The management team at Oitech is dedicated to fostering a culture
                            of innovation and excellence, encouraging collaboration and
                            teamwork, and staying up-to-date with the latest trends and
                            technologies in the industry.
                        </p>
                        <div className="px-20 py-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="card shadow-2xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/GPc93Tr/team1.png"
                                        alt="team-member2"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary text-center">
                                        Shaira Priyanka
                                    </h2>
                                    <p className="">CEO, Founder</p>
                                    <div className="flex gap-2">
                                        <Link
                                            onClick={() =>
                                                (window.location = "mailto:shirapria@gmail.com")
                                            }
                                        >
                                            <FaEnvelope size={"2em"}></FaEnvelope>
                                        </Link>
                                        <a
                                            href="https://www.facebook.com/shaira.priyanka"
                                            target="_blank"
                                        >
                                            <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                                        </a>
                                        <div className="tooltip" data-tip="+64 20 4166 1516">
                                            <FaWhatsappSquare size={"2em"}></FaWhatsappSquare>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-2xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/NmGj47f/team2.png"
                                        alt="team-member1"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary text-center">
                                        MD SAIFUR RAHMAN
                                    </h2>
                                    <p className="">CTO</p>
                                    <div className="flex gap-2">
                                        <Link
                                            onClick={() =>
                                            (window.location =
                                                "mailto:saifurnstuiit223344@gmail.com")
                                            }
                                        >
                                            <FaEnvelope size={"2em"}></FaEnvelope>
                                        </Link>
                                        <a
                                            href="https://www.facebook.com/saifur2233"
                                            target="_blank"
                                        >
                                            <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/saifur-rahman-4611a1162/"
                                            target="_blank"
                                        >
                                            <FaLinkedin size={"2em"}></FaLinkedin>
                                        </a>
                                        <a href="https://github.com/saifur2233" target="_blank">
                                            <FaGithubSquare size={"2em"}></FaGithubSquare>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero py-12">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Meet The Developer Team</h1>
                        <p className="py-6">
                            Our team of talented professionals who helped in growing business.
                        </p>
                        <div className="p-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            <div className="card shadow-5xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/qg4mB48/member01.png"
                                        alt="team-member1"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary text-center">
                                        MD SAIFUR RAHMAN
                                    </h2>
                                    <p className="">Software Engineer</p>
                                    <div className="flex gap-2">
                                        <FaEnvelope size={"2em"}></FaEnvelope>
                                        <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                                        <FaLinkedin size={"2em"}></FaLinkedin>
                                        <FaGithubSquare size={"2em"}></FaGithubSquare>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-5xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/VjBWpXq/member02.png"
                                        alt="team-member2"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary text-center">
                                        Rahat Uddin
                                    </h2>
                                    <p className="">Software Engineer</p>
                                    <div className="flex gap-2">
                                        <FaEnvelope size={"2em"}></FaEnvelope>
                                        <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                                        <FaLinkedin size={"2em"}></FaLinkedin>
                                        <FaGithubSquare size={"2em"}></FaGithubSquare>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-5xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/BnzcY3z/member03.png"
                                        alt="team-member3"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary text-center">
                                        Fazle Rabbi
                                    </h2>
                                    <p className="">Software Engineer</p>
                                    <div className="flex gap-2">
                                        <FaEnvelope size={"2em"}></FaEnvelope>
                                        <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                                        <FaLinkedin size={"2em"}></FaLinkedin>
                                        <FaGithubSquare size={"2em"}></FaGithubSquare>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-5xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/p213tB4/team3.png"
                                        alt="team-member3"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary text-center">
                                        Shahriar Priyo
                                    </h2>
                                    <p className="">Software Engineer</p>
                                    <div className="flex gap-2">
                                        <FaEnvelope size={"2em"}></FaEnvelope>
                                        <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                                        <FaLinkedin size={"2em"}></FaLinkedin>
                                        <FaGithubSquare size={"2em"}></FaGithubSquare>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-5xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/gPFxpf8/team5.png"
                                        alt="team-member3"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary text-center">
                                        Abdullah An-Noor
                                    </h2>
                                    <p className="">Software Engineer</p>
                                    <div className="flex gap-2">
                                        <FaEnvelope size={"2em"}></FaEnvelope>
                                        <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                                        <FaLinkedin size={"2em"}></FaLinkedin>
                                        <FaGithubSquare size={"2em"}></FaGithubSquare>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-5xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/nmYVs8W/team4.png"
                                        alt="team-member3"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary text-center">
                                        Anwar Kabir Sojib
                                    </h2>
                                    <p className="">Software Engineer</p>
                                    <div className="flex gap-2">
                                        <FaEnvelope size={"2em"}></FaEnvelope>
                                        <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                                        <FaLinkedin size={"2em"}></FaLinkedin>
                                        <FaGithubSquare size={"2em"}></FaGithubSquare>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-5xl">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/Fsqdjs0/member04.png"
                                        alt="team-member4"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-primary text-center">
                                        Rokon Uzzaman
                                    </h2>
                                    <p className="">Software Engineer</p>
                                    <div className="flex gap-2">
                                        <FaEnvelope size={"2em"}></FaEnvelope>
                                        <FaFacebookSquare size={"2em"}></FaFacebookSquare>
                                        <FaLinkedin size={"2em"}></FaLinkedin>
                                        <FaGithubSquare size={"2em"}></FaGithubSquare>
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

export default Team;
