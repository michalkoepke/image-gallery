import '../assets/style.css';
import logo from '../pixy-logo-color.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (




        <div className="mt-20">
            <footer className="from-custom to-custom-light bg-gradient-to-r" id="footer">

                <div className="container w-5/6 md:w-3/4  mx-auto flex flex-row flex-wrap justify-between py-20 text-white">


                    {/* lewwy box */}




                    <div className="max-w-md mb-10">


                        <img src={logo} alt="LOGO" width="130" className="hidden md:block" />



                        {/* <h1 className="my-2 text-2xl">PIXY App</h1> */}

                        <p className="mt-10 light-text-1 text-gray-300">Pixy - simple React app I have made in process
                        of learning JavaScript, React and Tailwind Css.
                        Backend provided by Pixabay.

                        Feel free to check my other projects.</p>

                    </div>



                    {/* prawy box */}

                    <div className="flex flex-row flex-wrap">



                        <div className="mt-1 mx-2 md:mx-8 mb-10">

                            <h1 className="mb-5  text-2xl text-white">Contact</h1>

                            <div className="flex flex-row items-center mt-12">

                                <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-turkus-light" />
                                <p className="text-gray-300 ml-4">michalkoepke@gmail.com</p>

                            </div>




                            <a href="https://www.linkedin.com/in/michał-koepke-30021233/">


                                <div className="flex flex-row items-center mt-4">

                                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-turkus-light" />
                                    <p className="text-gray-300 ml-5">LinkedIn</p>

                                </div>

                            </a>



                        </div>



                        <div className="mt-1 mx-2 md:mx-8 mb-10">
                            <h1 className="mb-5  text-2xl">My other web projects:</h1>

                            <ul class="list-links mt-12 text-gray-300">

                                <li className="mb-6"><a className="special-link px-3 py-2" href="https://michalkoepke.github.io/devlogy/index.html">Devlogy
                                        website</a></li>
                                <li className="mb-6"><a className="special-link px-3 py-2" href="https://michalkoepke.github.io/simple-weather-app/">Weather App</a></li>



                                <li className="mb-6"><a className="special-link px-3 py-2" href="https://michalkoepke.github.io/simple-todo-list/">ToDo App</a></li>

                                <li className="mb-6"><a className="special-link px-3 py-2" href="https://michalkoepke.github.io/BlueQuiz/index.html">Blue
                                        Quiz</a></li>


                                {/* <li className="mb-3"><a className="special-link"
                                    href="https://michalkoepke.github.io/devlogy/index.html">Interactive chat</a></li> */}


                            </ul>

                        </div>




                        <div className="mt-1 mx-2 md:mx-8 mb-10">
                            <h1 className="mb-5 text-2xl">My graphic design:</h1>

                            <ul className="list-links text-gray-300 mt-12">
                                <li className="mb-6"><a className="special-link px-3 py-2" href="https://www.deviantart.com/michalkoepke/gallery">Graphic
                                     design portfolio</a></li>

                            </ul>

                        </div>







                    </div>

                </div>

            </footer>


            <div className="bg-custom-dark text-gray-500" >


                <div className="container container-sm mx-auto py-4 text-center">

                    Michał Koepke@2021


                </div>








            </div>




        </div>
    );
}

export default Footer;