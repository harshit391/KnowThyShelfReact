import React, { useEffect , useRef} from "react";

/* Script for Carousel */
import { animate,move } from "../assets/scripts/carl";

/* Images */
import comic from '../images/comic.jpg';
import fiction from '../images/fiction.jpg';
import horror from '../images/horror.jpg';
import manga from '../images/manga.jpg';
import mystery from '../images/mystery.jpg';
import poetry from '../images/poetry.jpg';
import psychology from '../images/psychology.jpg';
import scifi from '../images/scifi.jpg';
import selfHelp from '../images/self-help.jpg';
import thriller from '../images/thriller.jpg';

/* Components */
import CarlItem from "./CarouselItem/CarouselItem";
import Top from "./CarouselItem/Top";


const Carl = () => {
  const carouselItemsRef = useRef(null);

  useEffect(() => {
    const carItems = document.querySelectorAll('.carousel-item');
    carouselItemsRef.current = carItems;
    animate(carouselItemsRef.current);
    move(carouselItemsRef.current);
  }, []);
  
  

  return (
      <section className="carl">
        <div className="carousel">
          <CarlItem title = "Comic" number = "01" source = {comic}></CarlItem>
          <CarlItem title = "Fiction" number = "02" source = {fiction}></CarlItem>
          <CarlItem title = "Horror" number = "03" source = {horror}></CarlItem>
          <CarlItem title = "Manga" number = "04" source = {manga}></CarlItem>
          <CarlItem title = "Mystery" number = "05" source = {mystery}></CarlItem>
          <CarlItem title = "Poetry" number = "06" source = {poetry}></CarlItem>
          <CarlItem title = "Psychology" number = "07" source = {psychology}></CarlItem>
          <CarlItem title = "Sci-Fi" number = "08" source = {scifi}></CarlItem>
          <CarlItem title = "Self-Help" number = "09" source = {selfHelp}></CarlItem>
          <CarlItem title = "Thriller" number = "10" source = {thriller}></CarlItem>
          <Top></Top>
        </div>
      </section>
  );
}

export default Carl;
  

