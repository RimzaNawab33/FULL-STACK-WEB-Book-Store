import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';

const FreeBook = () => {
    const [book, setBook] = useState([])
  useEffect(()=> {
    const getBook = async () =>{
      try {
        const res =  await axios.get("http://localhost:4001/book");
        
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook();
  },[])
  
    // console.log(FilterData);
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='container px-4 mx-auto max-w-screen-2xl md:px-20'>
        <div>
            <h1 className='pb-2 text-xl font-semibold'>Free Offered Book</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias 
        pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>
        </div>
      
      <div>
        <Slider {...settings}>
            {book.map((item) => (
                <Cards items={item} key={item.id} />
            ))}
     
      </Slider>
      </div>
      </div>
    </>
  )
}

export default FreeBook;
