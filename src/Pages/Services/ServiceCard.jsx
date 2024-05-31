import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();
    const { _id, name, smallimg, largeimg, processimg, subtitle, description } =
        service;
    return (
        <div className="card shadow-2xl card-bordered border-primary hover:bg-primary hover:text-white">
            <figure>
                <img src={smallimg} width={"100%"} alt="Service-item" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className="text-justify">{subtitle}</p>
                <div className="card-actions justify-start">
                    <button
                        onClick={() => navigate(`/services/${_id}`)}
                        className="btn btn-sm btn-outline btn-warning"
                    >
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
