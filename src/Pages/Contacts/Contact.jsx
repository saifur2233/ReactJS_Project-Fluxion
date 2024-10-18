import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GhostaContainer, ghosta } from "react-ghosta";
import "react-ghosta/dist/ghosta.css";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const handleShowAlert = () => {
        // Ghosta emitter
        ghosta.fire({
            "title": "Message Send Successfully.",
            "description": "Our support team will contact with you, soon!",
            // "icon": `<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>`,
            "showCloseButton": true,
            "buttons": [
                {
                    "title": "Close",
                    "variant": "danger"
                }
            ]
        })
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
        setLoading(true);

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
                setLoading(false);
                handleShowAlert();
                toast.success("Message Send Successfully");
                form.reset();
            }).catch(() => setLoading(false));
    };
    return (
        <div className="min-h-screen py-20">
            <h1 className="pt-10 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black text-center">
                Our Offices Around The World
            </h1>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="p-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="card card-bordered border-t-4 rounded-b-lg border-primary">
                            <div className="card-body">
                                <h2 className="card-title text-primary items-start font-bold text-2xl">
                                    New Zealand
                                </h2>
                                <hr className="border border-5 border-primary"></hr>
                                <p className="text-lg text-start pb-2">456 ellerslie panmure highway
                                    Auckland 1060, New Zealand</p>
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
                                <h2 className="card-title text-primary items-start font-bold text-2xl border-bottom">
                                    Bangladesh
                                </h2>
                                <hr className="border border-5 border-primary"></hr>
                                <p className="text-lg text-start pb-2">
                                    House: 89/1, Sukrabad, Dhanmonddi, Dhaka, Bangladesh 3505
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
                                        <p>contact.smartitsolutions.nz@gmail.com</p>
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
                        {/* <div className="card card-bordered border-t-4 rounded-b-lg border-primary">
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
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="py-12">
                        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Get In Touch</h1>
                        <p className="py-6 px-20">
                            Getting in touch with Smart IT Solutions would involve reaching out to them
                            through one or more of their contact channels, such as their
                            website, email, phone number, or social media profiles.
                        </p>
                        {loading && (<div className="flex justify-center">
                            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                                    <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="24"></line>
                                    <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                                    </line>
                                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="24"></line>
                                    <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                                    </line>
                                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="24"></line>
                                    <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
                                    </line>
                                </svg>
                                <span className="text-4xl font-medium text-gray-500">Loading...</span>
                            </div>
                        </div>)}
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
                            Getting in touch with Smart IT Solutions would involve reaching out to them
                            through one or more of their contact channels, such as their
                            website, email, phone number, or social media profiles.
                        </p>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.7430044449516!2d174.84034037569216!3d-36.896495872219745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d496e269c6893%3A0x66fb35bb2a8677bf!2s456%20Ellerslie%20Panmure%20Highway%2C%20Mount%20Wellington%2C%20Auckland%201060%2C%20New%20Zealand!5e0!3m2!1sen!2sbd!4v1728575630192!5m2!1sen!2sbd"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
