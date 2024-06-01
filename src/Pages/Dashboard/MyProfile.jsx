import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const MyProfile = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <div className="py-12">
            <h1 className="font-bold text-5xl text-center">Profile</h1>
            <div className="flex justify-center">
                <div className="card w-full bg-base-100 shadow-xl px-12">
                    <figure className="px-10 pt-10">
                        <div className="avatar online ">
                            <div className="w-24 rounded-full">
                                <img
                                    src="https://i.ibb.co/61QcH8X/avaterpic.png"
                                    alt="avater"
                                />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user?.displayName}</h2>
                        <p>Email: {user?.email}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={logout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
