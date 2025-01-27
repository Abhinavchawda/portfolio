import React, { useRef } from 'react';
import bar_logo from '../assets/bar.svg';
import cross_logo from '../assets/cross.svg';
import home_logo from '../assets/home.svg';

const Navbar = () => {
    const btn_ref = useRef(null);
    const icon_ref = useRef(null);

    const toggleMenu = () => {
        const isMenuVisible = btn_ref.current.style.visibility === 'visible';
        btn_ref.current.style.visibility = isMenuVisible ? 'hidden' : 'visible';
        btn_ref.current.style.opacity = isMenuVisible ? '0' : '1';
        icon_ref.current.src = isMenuVisible ? bar_logo : cross_logo;
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900/70 via-black/70 to-gray-800/70 backdrop-blur-md shadow-lg">

            <div className="flex justify-between items-center py-4 px-5 md:hidden">
                <h1 className="text-2xl font-bold text-white">Abhinav Chawda</h1>
                <img
                    ref={icon_ref}
                    className="h-8 w-8 invert cursor-pointer"
                    src={bar_logo}
                    onClick={toggleMenu}
                    alt="menu"
                />
            </div>

            <ul
                ref={btn_ref}
                className="invisible opacity-0 transition-all duration-300 md:hidden fixed top-16 right-5 bg-gray-900 text-white rounded-xl p-5 shadow-lg space-y-3"
            >
                <li className="flex justify-center items-center bg-gray-800 hover:bg-gray-700 rounded-lg py-2 px-4 transition duration-300 cursor-pointer">
                    <a href="#home" className="flex items-center space-x-2">
                        <img className="h-5 invert" src={home_logo} alt="Home" />
                        <span>Home</span>
                    </a>
                </li>
                <li className="bg-gray-800 hover:bg-gray-700 rounded-lg py-2 px-4 text-center transition duration-300 cursor-pointer">
                    <a href="#education">Education</a>
                </li>
                <li className="bg-gray-800 hover:bg-gray-700 rounded-lg py-2 px-4 text-center transition duration-300 cursor-pointer">
                    <a href="#projects">Projects</a>
                </li>
                <li className="bg-gray-800 hover:bg-gray-700 rounded-lg py-2 px-4 text-center transition duration-300 cursor-pointer">
                    <a href="#skills">Skills</a>
                </li>
                <li className="bg-gray-800 hover:bg-gray-700 rounded-lg py-2 px-4 text-center transition duration-300 cursor-pointer">
                    <a href="#footer">Contact</a>
                </li>
            </ul>

            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center py-4 px-10">
                <h1 className="text-3xl font-bold text-white">Abhinav Chawda</h1>
                <ul className="flex items-center space-x-6">
                    <li>
                        <a href="#home" className='rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 text-white transition duration-300'>Home</a>
                    </li>
                    <li>
                        <a href="#education" className='rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 text-white transition duration-300'>Education</a>
                    </li>
                    <li>
                        <a href="#projects" className='rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 text-white transition duration-300'>Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className='rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 text-white transition duration-300'>Skills</a>
                    </li>
                    <li>
                        <a href="#footer" className='rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2 text-white transition duration-300'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;