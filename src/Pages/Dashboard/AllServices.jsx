import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

const AllServices = () => {
    const [deletingService, setDeletingService] = useState(null);
    const closeModal = () => {
        setDeletingService(null);
    };

    const {
        data: allServices = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allServices"],
        queryFn: async () => {
            const res = await fetch(
                `https://oitech-server.vercel.app/api/v1/services`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    const hnadleDeleteUser = (service) => {
        console.log(service);
    };
    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-secondary py-6">
                All Services
            </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Small img</th>
                            <th>Large img</th>
                            <th>Process img</th>
                            <th>Name</th>
                            <th>Subtitle</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allServices.map((service, i) => (
                            <tr key={service._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <img src={service?.smallimg} width={"50px"} alt="smallimg" />
                                </td>
                                <td>
                                    <img src={service?.largeimg} width={"50px"} alt="largeimg" />
                                </td>
                                <td>
                                    <img
                                        src={service?.processimg}
                                        width={"50px"}
                                        alt="largeimg"
                                    />
                                </td>
                                <td>
                                    <div className="font-bold">{service.name}</div>
                                </td>
                                <td>{service?.subtitle.slice(0, 10)}</td>
                                <td>{service?.description.slice(0, 10)}</td>
                                <td>
                                    <label className="btn btn-outline btn-primary">V</label>
                                    <label
                                        onClick={() => setDeletingService(service)}
                                        htmlFor="confirmationmodal"
                                        className="btn btn-outline btn-error"
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllServices;
