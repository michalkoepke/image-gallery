import { motion } from 'framer-motion';


const ImageCard = ({ image, setSelectedImg }) => {


    // zamieniamy string z tagami na array

    const tags = image.tags.split(',');

    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg"

            // poniezej eksperymen z modalem:

            onClick={() => setSelectedImg(image.webformatURL)}

        >





            <div className="opacity-80">








                <img src={image.webformatURL} alt="" className="w-full opacity-80" />


                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">

                        Photo by {image.user}

                    </div>

                    <ul>
                        <li>
                            <strong>Vievs:</strong> {image.views}
                        </li>
                        <li>
                            <strong>Downloads:</strong> {image.downloads}
                        </li>
                        <li>
                            <strong>Likes:</strong> {image.likes}
                        </li>
                    </ul>
                </div>

                <div className="px-6 py-4">

                    {tags.map((tag, index) => (

                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
                            #{tag}

                        </span>

                    ))}














                </div>

            </div>


        </div>

    );
}

export default ImageCard;