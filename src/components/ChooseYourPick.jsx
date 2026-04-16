import React, { useEffect, useRef } from "react";
import Slide from "./ChooseYourPick/Slide";
import Book from "./ChooseYourPick/Book";
import Swiper from "swiper";
import { Autoplay, EffectCube, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ChooseYourPick = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        swiperRef.current = new Swiper('.sample-slider', {
          modules: [Autoplay, EffectCube, Pagination, Navigation],
          loop: true,
          effect: "cube",
          cubeEffect: {},
          grabCursor: true,
          speed: 1500,
          autoplay: {
              delay: 3000,
          },
          pagination: {
              el: '.swiper-pagination',
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          },
        });

        return () => {
          if (swiperRef.current) {
            swiperRef.current.destroy(true, true);
          }
        };
      },[])


    return (
        <section className="section-2">
        <div className="section-genres">
            <div className="genre-elements">
                <div className="genre-head">
                    <h1>
                        Choose your pick
                    </h1>
                </div>
                <div className="hero-element">
                    <div className="swiper-hero">
                        <div className="swiper sample-slider">
                            <div className="swiper-wrapper">
                                <Slide name="ROMANCE" slideClass= "slide1" />
                                <Slide name="HORROR" slideClass= "slide2" />
                                <Slide name="POETRY" slideClass= "slide3" />
                                <Slide name="THRILLER" slideClass= "slide4" />
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <Book bookClass="book1" />
                    <Book bookClass="book2" />
                    <Book bookClass="book3" />
                    <Book bookClass="book4" />
                    <Book bookClass="book5" />
                    <div className="genre-quote">
                        <p>"He is more myself than I am. Whatever our souls are made of his and mine are the same"</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )

}

export default ChooseYourPick;