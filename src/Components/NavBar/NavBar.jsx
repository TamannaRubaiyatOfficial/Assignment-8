import React from 'react';
import { NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import headerLogo from '../../assets/header-logo.svg'
import './NavBar.css'

const NavBar = () => {
    const menuLinks =
        <>
            <NavLink to='/'>
                {
                    ({ isActive }) => <li className={`${isActive ? "active" : ""} header-menu`}>home</li>
                }
            </NavLink>
            <NavLink to='/apps'>
                {
                    ({ isActive }) => (<li className={`${isActive ? "active" : ""} header-menu`}>apps</li>)
                }
            </NavLink>
            <NavLink to='/installation'>
                {
                    ({ isActive }) => (<li className={`${isActive ? "active" : ""} header-menu`}>installation</li>)
                }
            </NavLink>

        </>
    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    {/* Navbar */}
                    <div className="header px-5 py-2 md:px-[30px] md:py-[10px] lg:px-[50px] lg:py-[16px] xl:px-20 xl:py-[18px] flex justify-between items-center bg-white border-b-[1.5px] border-b-[#E9E9E9] box-border ">

                        <div className='flex justify-start items-center gap-0 sm:gap-2'>
                            {/* offcanvas icon */}
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000000e6"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </label>
                            </div>

                            {/* header logo */}
                            <div>
                                <NavLink to='/'>
                                    <img className='w-full' src={headerLogo} alt="Hero IO Logo" />
                                </NavLink>
                            </div>
                        </div>

                        {/* header menu */}
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal p-0 gap-6">
                                {/* Navbar menu content here */}

                                {menuLinks}
                            </ul>
                        </div>

                        {/* header button */}
                        <a href="https://github.com/TamannaRubaiyatOfficial" target="_blank" rel="noopener noreferrer">
                            <button className='px-3 py-2 md:px-4 md:py-3 rounded bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white text-base font-semibold capitalize cursor-pointer'>
                                <FontAwesomeIcon className='text-[20px]' icon={faGithub} />
                                <span className='header-btn ml-[10px]'>contribute</span>
                            </button>
                        </a>


                    </div>
                </div>

                {/* offcanvas menu */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu bg-base-200 min-h-full w-80 p-4">
                        <div className='w-[60%]'>
                            <NavLink to='/'>
                                <img className='w-full' src={headerLogo} alt="Hero IO Logo" />
                            </NavLink>
                        </div>
                        <ul className='mt-7'>
                            {/* Sidebar content here */}
                            {menuLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;