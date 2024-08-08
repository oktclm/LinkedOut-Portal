import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const navItems = [
        {path: "/", title: "Start a search"},
        {path: "/my-job", title: "My Jobs"},
        {path: "/post-job", title: "Post A Job"},
    ]

    return (
        <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <nav className='flex justify-between items-center py-6'>
                <a href='/' className='flex items-center gap-2 text-2xl text-black'>
                    <img src='images/LinkedOut.png' width={200}></img>
                    <span>Student Job Portal</span>
                </a>

                {/* nav items for large devices */}
                <ul className='hidden md:flex gap-12'>
                    {
                        navItems.map(({ path, title }) => (
                            <li key={path} className='text-base text-primary'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "active"
                                            : ""
                                    }
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>


                {/* mobile menu */}
                <div className='md:hidden block'>
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                        }
                    </button>
                </div>
            </nav>
            {/* navitems for mobile */}
            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul>
                {
                        navItems.map(({ path, title }) => (
                            <li key={path} className='text-base text-white first:text-white py-1'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "active"
                                            : ""
                                    }
                                >
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                    <li className='text-white py-1'><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar