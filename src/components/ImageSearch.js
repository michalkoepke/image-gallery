import { useState } from "react";



const ImageSearch = ({ searchText }) => {


    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }


    return (

        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto px-4' id="search">

            <form onSubmit={handleSubmit} action="" className="w-full max-w-sm">


                <div className="flex items-center border-b-2 border-teal-500 py-2">

                    <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"


                        type="text" placeholder="Search for images..." />

                    <button className="flex-shrink-0 bg-custom-light hover:bg-custom border-custom-light hover:border-custom text-sm border-4 py-1 px-2 rounded text-white" type="Submit">Search</button>


                </div>

            </form>

        </div>


    );
}

export default ImageSearch;