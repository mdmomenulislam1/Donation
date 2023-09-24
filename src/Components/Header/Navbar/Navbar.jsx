import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-10 shadow-sm my-10" >
            <Logo></Logo>

            <nav>
                <ul className="flex gap-6">
                    <li className="p-5 font-bold">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 bg-slate-200 p-5 font-bold rounded-lg underline" : ""
                            }
                            >
                            Home
                        </NavLink>
                    </li>
                    <li className="p-5 font-bold">
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 bg-slate-200 p-5 font-bold rounded-lg underline" : ""
                            }
                            >
                            Donation
                        </NavLink>
                    </li>
                    <li className="p-5 font-bold">
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 bg-slate-200 p-5 font-bold rounded-lg underline" : ""
                            }
                            >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;