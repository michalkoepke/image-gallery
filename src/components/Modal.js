import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {


    const handleClick = (e) => {

        if (e.target.classList.contains('backdrop')) {

            setSelectedImg(null);

        }




    }




    return (

        <motion.div onClick={handleClick} className="fixed w-full h-full bg-black bg-opacity-50 top-0 left-0 backdrop"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}


        >

            <motion.img className="block max-w-screen-lg max-h-full my-40 m-auto shadow border-2 border-white" src={selectedImg} alt="enlarged pic"

                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}

            />
        </motion.div>

    );
}

export default Modal;