import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                        <li>
                            <Link to="/dashboard">My Profile</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/admin/register">Add Admin</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/message">All Message</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addService">Add Service</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/services">All Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
