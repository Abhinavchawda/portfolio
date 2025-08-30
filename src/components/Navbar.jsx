import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Name */}
                    <div className="flex items-center">
                        <a href="#home" className="flex items-center space-x-2">
                            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text whitespace-nowrap">
                                Abhinav Chawda
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#education">Education</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#achievements">Achievements</NavLink>
                        <NavLink href="#footer">Contact</NavLink>
                        
                        {/* Social Links */}
                        <div className="flex items-center space-x-3 ml-4 border-l border-gray-600 pl-4">
                            <a href="https://github.com/Abhinavchawda" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/abhinav-chawda" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                        ? 'opacity-100 max-h-screen p-4 border-t border-gray-700 mt-2 bg-gray-900/95 backdrop-blur-md shadow-lg' 
                        : 'opacity-0 max-h-0 pointer-events-none'
                }`}>
                    <div className="flex flex-col space-y-2">
                        <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
                            <FaHome className="mr-2" />Home
                        </MobileNavLink>
                        <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</MobileNavLink>
                        <MobileNavLink href="#education" onClick={() => setIsMenuOpen(false)}>Education</MobileNavLink>
                        <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</MobileNavLink>
                        <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
                        <MobileNavLink href="#achievements" onClick={() => setIsMenuOpen(false)}>Achievements</MobileNavLink>
                        <MobileNavLink href="#footer" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                        
                        {/* Mobile Social Links */}
                        <div className="flex items-center space-x-4 pt-2 border-t border-gray-700">
                            <a href="https://github.com/Abhinavchawda" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/abhinav-chawda" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// NavLink component for desktop navigation
const NavLink = ({ href, children }) => (
    <a
        href={href}
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
    >
        {children}
    </a>
);

// NavLink component for mobile navigation
const MobileNavLink = ({ href, children, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
    >
        {children}
    </a>
);

export default Navbar;