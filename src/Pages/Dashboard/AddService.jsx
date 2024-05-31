import React from "react";
import { toast } from "react-hot-toast";

const AddService = () => {
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const smallimg = form.smallimg.value;
        const largeimg = form.largeimg.value;
        const processimg = form.processimg.value;
        const subtitle = form.subtitle.value;
        const description = form.description.value;

        const serviceObj = {
            name,
            smallimg,
            largeimg,
            processimg,
            subtitle,
            description,
        };

        fetch("https://oitech-server.vercel.app/api/v1/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceObj),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("Service Add Successfully");
                form.reset();
            });
    };
    return (
        <div className="hero">
            <div className="hero-content text-center">
                <div className="py-12">
                    <h1 className="text-5xl font-bold">Add Service</h1>

                    <form
                        onSubmit={handleAddService}
                        className="sm:mx-w-sm md:mx-w-md lg:px-20"
                    >
                        <div className="flex gap-4">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary font-bold">
                                        Name <strong className="text-error">*</strong>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="input input-bordered border-primary"
                                />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold text-primary">
                                        Small Image Link <strong className="text-error">*</strong>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="smallimg"
                                    required
                                    className="input input-bordered border-primary"
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-primary">
                                    Large Image Link <strong className="text-error">*</strong>
                                </span>
                            </label>
                            <input
                                type="text"
                                name="largeimg"
                                required
                                className="input input-bordered border-primary"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-primary">
                                    Process Image Link <strong className="text-error">*</strong>
                                </span>
                            </label>
                            <input
                                type="text"
                                name="processimg"
                                required
                                className="input input-bordered border-primary"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-primary">
                                    Subtitle of Service <strong className="text-error">*</strong>
                                </span>
                            </label>
                            <input
                                type="text"
                                name="subtitle"
                                required
                                className="input input-bordered border-primary"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary font-bold">
                                    Breif Description of Service{" "}
                                    <strong className="text-error">*</strong>
                                </span>
                            </label>

                            <textarea
                                name="description"
                                required
                                className="textarea textarea-bordered border-primary textarea-lg w-full"
                            ></textarea>
                        </div>
                        <button className="my-6 btn btn-wide btn-primary">
                            Add To System
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;
