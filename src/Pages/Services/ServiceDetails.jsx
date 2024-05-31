import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const { _id, name, smallimg, largeimg, processimg, subtitle, description } =
        useLoaderData();
    //console.log(id);

    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="px-20 py-12">
                    <div className="card shadow-2xl card-bordered border-primary">
                        <figure>
                            <img src={largeimg} alt="Service-item" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">{name}</h2>
                            <p className="text-justify">{subtitle}</p>
                            <p className="text-justify pb-6">{description}</p>
                            <figure>
                                <img src={processimg} width={"100%"} alt="Service-item" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
