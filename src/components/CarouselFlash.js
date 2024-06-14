import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function CarouselFlash({ props }) {
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
    <div>
      <h2> Image Carousel </h2>
      <Slider {...settings}>
        {props.images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={200}
              height={200}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
