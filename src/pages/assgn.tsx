import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from "../components/sidebar";

interface UnsplashImage {
  urls: {
    small: string; 
  }
}

function Assgn() {
  const location = useLocation();
  const [index, setIndex] = useState<number | null>(null);
  const [images, setImages] = useState<UnsplashImage[]>([]); // Ensure images is initialized as an array
  const [currentPage, setCurrentPage] = useState<number>(1); // State to track current page number

  useEffect(() => {
    // Extract the query parameter "search"
    const queryParams = new URLSearchParams(location.search);
    const searchParam = queryParams.get('search');

    // Parse the query parameter if necessary (it's encoded JSON in this case)
    const parsedIndex = searchParam ? JSON.parse(decodeURIComponent(searchParam)) : null;
    setIndex(parsedIndex);
  
    // Fetch images from Unsplash API with the current page number
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${currentPage}&query=office&per_page=9&client_id=${ApnaAccessKeyDaalIdhar}`);
        const data = await response.json();
        console.log(data)
        setImages(data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [location.search, currentPage]); 

  useEffect(() => {
    // Change page number every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage % 1000) + 1); // Modulo 1000 ensures page number cycles from 1 to 1000
    }, 10000);

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <div className="adminContainer">
      <Sidebar />
      <main className='mainy'>
        <h3>Customer : {index != null ? index + 1 : ''} details here</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quod odit, exercitationem dignissimos sunt deleniti ipsa natus sit sint, hic tenetur! Quibusdam eum atque ad minus sapiente dolores sed fuga.</p>
        <div className="grid-container">
          {images.map((image, idx) => (
            <div className="grid-item" key={idx}>
              <img src={image.urls.small} alt={`Image ${idx}`} className='imgy'/>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Assgn;
