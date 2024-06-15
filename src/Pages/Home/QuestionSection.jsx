import React from "react";
import { toast } from "react-hot-toast";

const QuestionSection = () => {
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
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-16">
                <img src="https://i.ibb.co/zsGTNtW/3.png" className="sm:max-w-sm md:max-w-md rounded-lg" />
                <div>
                    <p className="text-primary text-xl font-bold">Question</p>
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Have Any Questions ?</h1>
                    <p className="py-6 pr-10">Oitech empowers you to design stunning and sophisticated websites
                        that align with the unique needs of your business.</p>
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
        </div>
    );
};

export default QuestionSection;
