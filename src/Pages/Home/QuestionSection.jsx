import React, { useState } from "react";
import { GhostaContainer, ghosta } from "react-ghosta";
import "react-ghosta/dist/ghosta.css";
import { toast } from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";

const QuestionSection = () => {
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
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-16">
                <img src="questions.png" className="sm:max-w-sm md:max-w-md rounded-lg" />
                <div>
                    <p className="text-primary text-xl font-bold">Question</p>
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Have Any Questions ?</h1>
                    <p className="py-6 pr-10">Smart IT Solutions empowers you to design stunning and sophisticated websites
                        that align with the unique needs of your business.</p>
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
                    <form onSubmit={handleSendMessage}>
                        <div className="flex gap-2">
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
                                    className="input input-bordered border-primary input-xs sm:input-sm md:input-md lg:input-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
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
                                    className="input input-bordered border-primary input-xs sm:input-sm md:input-md lg:input-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                                />
                            </div>
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
                                className="input input-bordered border-primary input-xs sm:input-sm md:input-md lg:input-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                            />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-primary font-bold">
                                    Message <strong className="text-error">*</strong>
                                </span>
                            </label>

                            <textarea
                                required
                                name="message"
                                className="textarea textarea-bordered border-primary textarea-xs sm:textarea-sm md:textarea-md lg:textarea-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                            ></textarea>
                        </div>
                        <div className="form-control my-6">
                            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-wide btn-primary"> Send Your Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <GhostaContainer />
        </div>
    );
};

export default QuestionSection;
