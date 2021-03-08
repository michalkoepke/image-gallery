import { useState } from "react";
import '../assets/style.css';

import logo from '../pixy-logo-white.svg';

import { motion, AnimatePresence } from "framer-motion";



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

        <div className="bg-custom-light mt-0">







            <div className="container mx-auto mt-0 bg-custom-light text-white">




                <nav className="flex flex-wrap items-center justify-between p-5 bg-custom-light text-white">

                    {/* logo */}

                    <div className="flex items-center">

                        <img src={logo} alt="LOGO" width="150" />
                        {/* <h1 className="font-bold text-3xl ml-2">PIXY</h1> */}

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
                        <li><a href="#" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a></li>
                        <li><a href="#" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products</a></li>
                        <li><a href="#" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Pricing</a></li>
                        <li><a href="#" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</a></li>
                    </ul>


                    {/* links - dropped down */}



                    {/* ponizej wyprobuj set timeout! */}















                </nav>

                {/* oryginal */}
                {/* <div className={isOpen ? "pokaz" : "zchowaj"}></div> */}





                {/* ponizej nie kasowac - to wersja ze zmianami klas */}


                {/* <div className={isOpen ? "pokaz" : "zchowaj block self-end"} >
                




                <ul>


                    <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a></li>
                    <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products</a></li>
                    <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Pricing</a></li>
                    <li><a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</a></li>


                </ul>


            </div> */}

                {/* aternatuwna wersja z conditional rendering: */}



                <AnimatePresence>


                    {isOpen && (



                        <motion.div

                            variants={menu}

                            initial="hidden"
                            animate="visible"
                            exit="hidden"



                        >

                            <ul className="px-4">


                                <li><a href="#" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">Home</a></li>
                                <li><a href="#" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">Products</a></li>
                                <li><a href="#" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">Pricing</a></li>
                                <li><a href="#" className="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-white md:border-none">Contact</a></li>


                            </ul>


                        </motion.div>

                    )}



                </AnimatePresence>








            </div >


        </div>







    );
}


export default Navbar;