import React from "react";
import { mainCarouselData } from "./MainCaroselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCrosel = () => {
  const items = mainCarouselData.map((items) => (
    <img
      className="cursor-pointer -z-10"
      role="presentation"
      src={items.image}
      alt=""
    />
  ));

  return(
     <AliceCarousel 
     items={items}
     disableButtonsControls
     autoPlay
     autoPlayInterval={2000}
     infinite />
    );
};

export default MainCrosel;
