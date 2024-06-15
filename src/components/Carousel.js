import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState } from "react";
export default function Carousel({ }) {
  const [images, setImages] = useState([
    {id: 1 ,image : 'https://cf.shopee.co.th/file/th-50009109-96ccd9c4dc80c25b6546ef522d21428a_xxhdpi'},
    {id: 2 ,image : 'https://cf.shopee.co.th/file/th-50009109-96ccd9c4dc80c25b6546ef522d21428a_xxhdpi'},
    {id: 3 ,image : 'https://cf.shopee.co.th/file/th-50009109-96ccd9c4dc80c25b6546ef522d21428a_xxhdpi'},
    {id: 4 ,image : 'https://cf.shopee.co.th/file/th-50009109-96ccd9c4dc80c25b6546ef522d21428a_xxhdpi'},
    {id: 5 ,image : 'https://cf.shopee.co.th/file/th-50009109-96ccd9c4dc80c25b6546ef522d21428a_xxhdpi'},
    {id: 6 ,image : 'https://cf.shopee.co.th/file/th-50009109-96ccd9c4dc80c25b6546ef522d21428a_xxhdpi'},
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-block">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.image}
              alt={`Slide ${index}`}
              width={750}
              height={200}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
