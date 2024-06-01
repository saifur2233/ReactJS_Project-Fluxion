import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
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
