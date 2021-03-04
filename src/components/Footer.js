import '../assets/style.css';


const Footer = () => {
    return (




        <div className="mt-20">
            <footer className="bg-gray-700">

                <div className="container w-5/6 md:w-3/4  mx-auto flex flex-row flex-wrap justify-between py-20 text-white">


                    {/* lewwy box */}




                    <div className="max-w-md mb-10">



                        <h1 className="my-2 text-2xl">PIXY App</h1>

                        <p className="mt-5 light-text-1 text-gray-400">A simple React app I have made in process
                        of learning JavaScript and React.  Feel free to check
                        my other projects.</p>

                    </div>



                    {/* prawy box */}

                    <div className="flex flex-row flex-wrap">



                        <div className="mt-1 mx-4 mb-10">
                            <h1 className="mb-5  text-2xl">My other web projects:</h1>

                            <ul class="list-links mt-4 text-gray-400">

                                <li className="mb-6"><a className="special-link" href="https://michalkoepke.github.io/devlogy/index.html">Devlogy
                                        website</a></li>
                                <li className="mb-6"><a className="special-link" href="https://michalkoepke.github.io/simple-weather-app/">Weather App</a></li>



                                <li className="mb-6"><a className="special-link" href="https://michalkoepke.github.io/simple-todo-list/">ToDo App</a></li>

                                <li className="mb-6"><a className="special-link" href="https://michalkoepke.github.io/BlueQuiz/index.html">Blue
                                        Quiz</a></li>


                                {/* <li className="mb-3"><a className="special-link"
                                    href="https://michalkoepke.github.io/devlogy/index.html">Interactive chat</a></li> */}


                            </ul>

                        </div>




                        <div className="mt-1 mx-4 mb-10">
                            <h1 className="mb-5 text-2xl">My graphic design:</h1>

                            <ul className="list-links text-gray-400">
                                <li className="mb-6"><a className="special-link" href="https://www.deviantart.com/michalkoepke/gallery">Graphic
              design portfolio</a></li>

                            </ul>

                        </div>

                    </div>

                </div>

            </footer>


            <div className="bg-gray-900 text-gray-500" >


                <div className="container container-sm mx-auto py-4 text-center">

                    Michał Koepke@2021




            </div>




            </div>




        </div>
    );
}

export default Footer;