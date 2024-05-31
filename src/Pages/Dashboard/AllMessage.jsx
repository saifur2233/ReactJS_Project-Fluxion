import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";

const AllMessage = () => {
    const [deletingMSg, setDeletingMsg] = useState(null);
    const closeModal = () => {
        setDeletingMsg(null);
    };

    const {
        data: allMessages = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allMessages"],
        queryFn: async () => {
            const res = await fetch(
                `https://oitech-server.vercel.app/api/v1/messages`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    const hnadleDeleteUser = (user) => {
        console.log(user);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-secondary py-6">
                All Message
            </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allMessages.map((msg, i) => (
                            <tr key={msg._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="font-bold">{msg.name}</div>
                                </td>
                                <td>{msg?.email}</td>
                                <td>{msg?.subject.slice(0, 10)}</td>
                                <td>{msg?.message.slice(0, 10)}</td>
                                <td>
                                    <label className="btn btn-outline btn-primary">V</label>
                                    <label
                                        onClick={() => setDeletingMsg(msg)}
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

export default AllMessage;
