import React from "react";
import { toast } from "react-hot-toast";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    const handleSendMessage = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const msgObj = {
            name,
            email,
            subject,
            message,
        };
        //save info
        fetch("https://oitech-server.vercel.app/api/v1/messages", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(msgObj),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("Message Send Successfully");
                form.reset();
            });
    };
    return (
        <div className="min-h-screen py-20">
            <h1 className="pt-10 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black text-center">
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
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="py-12">
                        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Get In Touch</h1>
                        <p className="py-6 px-20">
                            Getting in touch with Oitech would involve reaching out to them
                            through one or more of their contact channels, such as their
                            website, email, phone number, or social media profiles.
                        </p>
                        <form
                            onSubmit={handleSendMessage}
                            className="sm:mx-w-sm md:mx-w-md lg:px-20"
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary font-bold">
                                        Name <strong className="text-error">*</strong>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="input input-bordered border-primary input-xs sm:input-sm md:input-md w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-primary">
                                        Email <strong className="text-error">*</strong>
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="input input-bordered border-primary input-xs sm:input-sm md:input-md w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-primary">
                                        Subject <strong className="text-error">*</strong>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="input input-bordered border-primary input-xs sm:input-sm md:input-md w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-primary font-bold">
                                        Message <strong className="text-error">*</strong>
                                    </span>
                                </label>

                                <textarea
                                    name="message"
                                    required
                                    className="textarea textarea-bordered border-primary textarea-lg w-full"
                                ></textarea>
                            </div>
                            <button className="my-6 btn btn-wide btn-primary">
                                Send Your Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Google Maps</h1>
                        <p className="py-3 px-20">
                            Getting in touch with Oitech would involve reaching out to them
                            through one or more of their contact channels, such as their
                            website, email, phone number, or social media profiles.
                        </p>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467363.79282282!2d90.04848299197425!3d23.773054758464646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ad9a69f36f%3A0xffd63d9e3af04553!2sDhanmondi%2032!5e0!3m2!1sen!2sbd!4v1680757664389!5m2!1sen!2sbd"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
