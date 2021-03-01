import { useState } from "react";
import { motion } from 'framer-motion';

import logo from '../logo_photo.svg';

const Navbar = () => {


    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }



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


        <div className="container mx-auto mt-4">




            <nav className="flex flex-wrap items-center justify-between p-5 bg-white">

                {/* logo */}

                <div className="flex items-center">

                    <img src={logo} alt="ACME" width="40" />
                    <h1 className="font-bold text-3xl ml-2">PIXY</h1>

                </div>



                {/* hamburger menu */}

                <div className="flex md:hidden">

                    {/* toggler button */}



                    <button onClick={handleNavCollapse} id="hamburger">
                        <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                        <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                    </button>



                </div>



                {/* links */}


                <ul className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
                    <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a></li>
                    <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products</a></li>
                    <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Pricing</a></li>
                    <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</a></li>
                </ul>


                {/* links - dropped down */}

                {isOpen &&


                    <motion.ul

                        animate={isOpen ? "open" : "closed"}
                        variants={variants}
                        className="md:hidden w-full text-center text-bold mt-10 border-t-2 border-blue-900 md:border-none md-hidden">


                        <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a></li>
                        <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products</a></li>
                        <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Pricing</a></li>
                        <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</a></li>


                    </motion.ul>


                }










            </nav>


        </div>





    );
}

export default Navbar;