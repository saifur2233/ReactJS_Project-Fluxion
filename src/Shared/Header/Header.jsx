import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [dark, setDark] = useState(false);
    const handleDark = () => {
        setDark(!dark);
        localStorage.setItem("dark-mode", !dark);
    };

    useEffect(() => {
        const localDark = localStorage.getItem("dark-mode");
        console.log(localDark);
        setDark(localDark);
    }, []);

    useEffect(() => {
        if (dark) {
            document.querySelector("html")?.setAttribute("data-theme", "night");
        } else {
            document.querySelector("html")?.setAttribute("data-theme", "winter");
        }
    }, [dark]);

    const menuItems = (
        <React.Fragment>
            <li>
                <Link className="font-bold text-primary" to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link className="font-bold text-primary" to="/services">
                    Services
                </Link>
            </li>
            <li>
                <Link className="font-bold text-primary" to="/about">
                    About
                </Link>
            </li>
            <li>
                <Link className="font-bold text-primary" to="/portfolio">
                    Portfolio
                </Link>
            </li>
            <li>
                <Link className="font-bold text-primary" to="/team">
                    Team
                </Link>
            </li>
            <li>
                <Link className="font-bold text-primary" to="/contact">
                    Contact
                </Link>
            </li>
            {user?.uid ? (
                <>
                    <li>
                        <Link to={"/dashboard"} className="font-bold text-primary">
                            {user?.email.slice(0, 10)}
                        </Link>
                    </li>
                    <li>
                        <Link className="font-bold text-primary" onClick={logout}>
                            Logout
                        </Link>
                    </li>
                </>
            ) : (
                <li>
                    <Link className="font-bold text-primary" to="/admin/login">
                        Login
                    </Link>
                </li>
            )}
        </React.Fragment>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><h3 className='font-bold'>OiTech</h3></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline btn-primary mr-4">Login<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></Link>
                <button onClick={handleDark} className="btn btn-ghost btn-circle">
                    {localStorage.getItem("dark-mode") == "false" ? (
                        <FaRegMoon size={"2em"}></FaRegMoon>
                    ) : (
                        <FaSun size={"2em"}></FaSun>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Header