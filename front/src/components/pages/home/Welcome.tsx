"use client";

import scss from "./Welcome.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import game1 from "../../../../public/COD.jpg";
import game2 from "../../../../public/DotA.jpg";
import game3 from "../../../../public/Grant.jpg";
import game4 from "../../../../public/Gta.jpg";
import game5 from "../../../../public/Horizon.jpg";
import game6 from "../../../../public/Mafia2definitiveedition.jpg";
import game7 from "../../../../public/Mafia3.jpg";
import { useState } from "react";

const Welcome = () => {
  const slides = [
    { id: 1, image: game1 },
    { id: 2, image: game2 },
    { id: 3, image: game3 },
    { id: 4, image: game4 },
    { id: 5, image: game5 },
    { id: 6, image: game6 },
    { id: 7, image: game7 },
  ];

  const [bgImage, setBgImage] = useState(slides[0].image);

  const settings: any = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    afterChange: (index: number) => setBgImage(slides[index].image),
  };

  return (
    <section
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        transition: "background-image 0.8s ease",
      }}
      className={scss.Welcome}
    >
      <div className="container">
        <div className={scss.content}>
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className={scss.slide}></div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
