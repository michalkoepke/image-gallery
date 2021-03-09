import { useState } from "react";
import '../assets/style.css';

import logo from '../pixy-logo-color.svg';
import burger from '../burger.svg';
import burgerClose from '../burger-close.svg';

import { motion, AnimatePresence } from "framer-motion";

import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';



const menu = {


    hidden: {

        // y: -"100vh",
        overflow: "hidden",
        height: "0px",
        opacity: 0
        // transition: { delay: 0.5 }

    },

    visible: {

        // y: "150px",
        height: "200px",
        opacity: 1


    }

}




const Navbar = () => {







    const [isOpen, setIsOpen] = useState(false);


    const handleNavCollapse = () => {


        // setIsNavCollapsed(!isNavCollapsed);

        // if (isOpen) {

        //     setIsOpen(false);



        // } else {

        //     setIsOpen(true);

        // }

        // powyzej dziala, nie kasowac!

        // ponizej to samo tylko sprytniej:

        setIsOpen(!isOpen);

        console.log("button clicked");
        console.log(isOpen);

    }

    return (

        <div className="from-custom to-custom-light bg-gradient-to-r mt-0 sticky top-0 z-30">







            <div className="container mx-auto mt-0  text-white">




                <nav className="flex flex-wrap items-center justify-between p-5  text-white">

                    {/* logo */}

                    <div className="flex items-center">

                        <img src={logo} alt="LOGO" width="130" onClick={() => scroll.scrollToTop()} />
                        <p className="text-turkus-light ml-2 hidden md:block">Simple image viewer</p>

                    </div>



                    {/* hamburger menu */}

                    <div className="flex md:hidden">

                        {/* toggler button */}



                        <button onClick={handleNavCollapse} id="hamburger" className="outline-none">

                            {/* <img className="toggle block" src={burger} width="30" height="30" />
                            <img className="toggle hidden" src={burgerClose} width="30" height="30" /> */}

                            {/* eksperyment */}


                            <img className="toggle block outline-none" src={(isOpen ? burgerClose : burger)} width="30" height="30" />



                        </button>







                    </div>



                    {/* links */}


                    <ul className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 md:border-none">
                        <li className="block md:inline-block text-white hover:text-turkus-light px-6 py-3 md:border-none" onClick={() => scroll.scrollToTop()}>Home</li>
                        <li><Link to="footer" smooth={true} duration={1000} className="block md:inline-block text-white hover:text-turkus-light px-6 py-3 md:border-none">About</Link></li>
                        <li><Link to="footer" smooth={true} duration={1000} className="block md:inline-block text-white hover:text-turkus-light px-6 py-3 md:border-none">Contact</Link></li>

                    </ul>


                    {/* links - dropped down */}


                </nav>



                {/* menu rozwijane - framer motion! */}



                <AnimatePresence>


                    {isOpen && (



                        <motion.div

                            variants={menu}

                            initial="hidden"
                            animate="visible"
                            exit="hidden"



                        >

                            <ul className="px-4">


                                <li className="block md:inline-block text-gray-300 hover:text-white px-3 py-3 border-b-2 border-white border-opacity-30 md:border-none" onClick={() => scroll.scrollToTop()}>Home</li>
                                <li><Link to="footer" smooth={true} duration={1000} className="block md:inline-block text-gray-300 hover:text-white px-3 py-3 border-b-2 border-white border-opacity-30 md:border-none">About</Link></li>
                                <li><Link to="footer" smooth={true} duration={1000} className="block md:inline-block text-gray-300 hover:text-white px-3 py-3 md:border-none">Contact</Link></li>



                            </ul>


                        </motion.div>

                    )}



                </AnimatePresence>








            </div >


        </div>







    );
}


export default Navbar;