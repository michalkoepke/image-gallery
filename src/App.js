import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {

  // stany , hooki, itd

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [term, setTerm] = useState('');



  // wybrany obrazek, stan do modala:

  const [selectedImg, setSelectedImg] = useState(null);


  // useEffect czyli przeladuj strone jesli sie zmieni term(czyli fraza z wyszukiwania):

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)

      .then(res => res.json())

      .then(data => {

        // console.log(data);

        setImages(data.hits);
        setIsLoading(false);
      })

      .catch(err => console.log(err));



  }, [term]);





  return (





    <div>



      <Navbar />



      <div className="container mx-auto">


        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No images found.</h1>}

        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {images.map(image => (

              <ImageCard key={image.id} image={image} setSelectedImg={setSelectedImg} />

            ))}


          </div>
        }

        {/* modal */}

        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}

      </div>






    </div>



  );
}

export default App;
