import React, { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import imag1 from "../src/assets/1521557364-Image_18.jpg";
import imag2 from "../src/assets/1594740512-hotel.jpg";
import imag3 from "../src/assets/1521554893-Image_09.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      // style={{ width: "807px", height: "498px" }}
      prevIcon={<FaArrowLeftLong />}
      nextIcon={<FaArrowRightLong />}
    >
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Image className="d-block w-100" src={imag1} alt="First slide" />
        <Carousel.Caption>
          <h5 className="  ">Induction of Cognitive Services</h5>
          <p className=" d-md-block d-none">
            New technologies inspire us. We have been pioneers in deploying face
            recognition systems to various business situations.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={imag2} alt="First slide" />
        <Carousel.Caption>
          <h5>Hospitality Solutions</h5>
          <p className=" d-md-block d-none">
            Our extensive and in-depth association working with several
            hospitality brands have given us the opportunity to evolve with very
            practical, useful, state of the art and cost-effective solutions for
            the hospitality industry.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={imag3} alt="First slide" />
        <Carousel.Caption>
          <h5>Research & Analytic Insights</h5>
          <p className=" d-md-block d-none">
            We offer end-to-end market research solutions tailored to the unique
            needs of clients across diverse sectors.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
