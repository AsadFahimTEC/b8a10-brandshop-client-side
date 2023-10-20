import  { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: 'https://i.ibb.co/mGFgcN8/coc4.png',
      title: 'Coca-Cola',
      description: 'Coca-Cola is a renowned beverage company with a diverse portfolio of brands.Coca-Colas flagship product, also known as Coke, is a carbonated soft drink with a unique and secret recipe that dates back to 1886.It is recognized worldwide for its iconic taste and is available in various sizes and packaging options.',
    },
    {
      image: 'https://i.ibb.co/3MZtQXs/fries2.jpg',
      title: 'McDonalds',
      description: 'McDonalds is one of the world most recognizable and iconic fast-food restaurant chains known for its distinctive golden arches and a global presence.It is a multinational fast-food corporation that was founded in 1955 by Ray Kroc in Des Plaines, Illinois, USA.The companies mission is to "make delicious feel-good moments easy for everyone',
    },
    {
      image: 'https://i.ibb.co/kJG3vZN/photo-1592321675774-3de57f3ee0dc-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg',
      title: 'Starbucks',
      description: 'Starbucks is a global coffeehouse chain and one of the most recognizable brands in the world, known for its premium coffee, tea, and café experience.Starbucks is renowned for its commitment to sourcing and roasting the finest coffee beans from around the world.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container ml-6 mr-6 flex flex-col md:flex-row">
  <div className="slider-content w-full md:w-3/4">
    <Slider {...settings} afterChange={handleSlideChange}>
      {slides.map((slide, index) => (
        <div key={index} className="slider-slide">
          <img
            src={slide.image}
            alt={`Slide ${index}`}
            className="slider-image"
          />
        </div>
      ))}
    </Slider>
  </div>
  <div className="slider-details w-full md:w-1/4  p-6">
    <div className="slider-details-inner">
      <h2 className="text-4xl font-bold mb-4 text-white">
        {slides[currentSlide].title}
      </h2>
      <p className="text-lg text-white font-montserrat font-bold mb-8">{slides[currentSlide].description}</p>
      <button className="ml-2 bg-[#F9A51A] text-[#000] font-medium text-sm px-6 py-3 rounded-md transition duration-300 hover:bg-blue-600">
        BUY NOW
      </button>
    </div>
  </div>
</div>

  

  );
};

export default Sliders;
