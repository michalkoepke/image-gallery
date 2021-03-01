const Footer = () => {
    return (




        <div>
            <footer className="bg-gray-800">

                <div className="container container-md mx-auto flex justify-between py-5 bg-gray-800 text-white">

                    <div className="bg-gray-500">



                        <h4 className="my-2 light-text-2">PIXY App</h4>

                        <p className="mt-5 light-text-1">A simple React app I have made in process
                        of learning JavaScript and React. Feel free to check
                        my other projects.</p>

                    </div>

                    <div className="bg-red-400">

                        <div className="bg-gray-500 mt-2">
                            <h5 className="mb-5 light-text-2">My other web projects:</h5>

                            <ul class="list-links mt-4">

                                <li className="mb-3"><a className="special-link" href="https://michalkoepke.github.io/devlogy/index.html">Devlogy
                                        website</a></li>
                                <li className="mb-3"><a className="special-link" href="https://michalkoepke.github.io/BlueQuiz/index.html">Blue
                                        Quiz</a></li>
                                <li className="mb-3"><a className="special-link" href="https://michalkoepke.github.io/simple-todo-list/">ToDo
                                        App</a></li>


                                <li className="mb-3"><a className="special-link"
                                    href="https://michalkoepke.github.io/devlogy/index.html">Interactive chat</a></li>


                            </ul>

                        </div>

                        <div className="bg-gray-400">
                            <h5 className="mb-5 light-text-2">My graphic design:</h5>

                            <ul className="list-links">
                                <li className="mb-3"><a className="special-link" href="https://www.deviantart.com/michalkoepke/gallery">Graphic
              design portfolio</a></li>

                            </ul>

                        </div>

                    </div>

                </div>

            </footer>
        </div>
    );
}

export default Footer;