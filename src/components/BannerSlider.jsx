import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// components
import Banner from './Banner';
import Loader from './Loader';


const SliderWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .slick-dots {
    bottom: 10px; /* Adjust position if needed */
  }

  .slick-dots li button:before {
    color: white; /* Dots color */
  }

  .slick-dots li.slick-active button:before {
    color: #ffc800; /* Active dot color (optional) */
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;  
  height: auto;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BannerSlider = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = "https://luffy-server-production.up.railway.app/banner";
      //const TEST_URL = "http://localhost:8080/banner";
      try {
        const response = await fetch(URL);
        const data = await response.json();
        if(!data.success){
          throw new Error(data.message);
        }
        setData(data.result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    arrows: false,
  };

  return (
    <SliderWrapper>
      {loading ? (
        <Loader height="100vh" width="100vw" type={"mutatingDots"} bgcolor={"#1C1E22"}/>
      ) : error ? (
        <p>Error</p>
      ) : data.length > 0 ? (
        <StyledSlider {...settings}>
          {data.map((item, index) => (
            <Banner key={index} data={item} />
          ))}
        </StyledSlider>
      ) : (
        <p>No Data Available</p>
      )}
    </SliderWrapper>
  );
};

export default BannerSlider;
