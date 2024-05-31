import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/UserContext";

const AdminRegistration = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleAdminRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (password.length < 6) {
            toast.error("Admin Registered Failed.");
            setError(`Your Password must be 6 character`);
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name })
                    .then(() => {
                        toast.success("Admin Registered Successfully");
                    })
                    .catch((error) => {
                        toast.error("Admin Registered Failed.");
                        setError(error.message);
                    });
            })
            .catch((error) => {
                toast.error("Admin Registered Failed.");
                setError(error.message);
            });
    };
    return (
        <div className="hero py-24 bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co/qpjTgM6/signup2.jpg"
                            width="50%"
                            alt="AdminLoginPage"
                        />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center pt-4">Admin Panel</h1>
                    <h2 className="text-2xl font-bold text-error text-center">
                        !!!Restricted Area!!!
                    </h2>
                    <form onSubmit={handleAdminRegistration} className="card-body">
                        <p className="text-center text-red-600">{error}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                name="name"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                className="input input-bordered"
                                name="password"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminRegistration;
