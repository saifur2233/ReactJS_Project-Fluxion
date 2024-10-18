import React, { useEffect, useState } from "react";
import {
    FaLaptopCode,
    FaMobileAlt,
    FaDesktop,
    FaLaptopMedical,
    FaPager,
    FaSearchengin,
} from "react-icons/fa";
import ServiceDetails from "./ServiceDetails";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [myservices, setMyservices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://oitech-server.vercel.app/api/v1/services")
            .then((res) => res.json())
            .then((data) => {
                console.log("Data: ", data);
                setMyservices(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);
    return (
        <div className="hero py-20">
            <div className="hero-content text-center">
                <div className="pt-10">
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Services We Offer</h1>
                    <p className="py-6">
                        With Smart IT Solutions, you can create beautiful and elegant websites that suits
                        your business. Create charming and graceful websites that match your
                        business with Smart IT Soution's assistance.
                    </p>
                    {loading ? (
                        <div className="flex justify-center">
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
                        </div>
                    ) : (
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {myservices.map((service) => (
                                <ServiceCard key={service._id} service={service}></ServiceCard>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
