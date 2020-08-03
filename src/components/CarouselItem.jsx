import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';


const CarouselItem = ({ cover, tittle, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={tittle} /> alt=""&gt;
    <div className="carousel-item__details">
      <img src={playIcon} alt="Play" />
      <img src={plusIcon} alt="Plus" />
    </div>
    <p className="carousel-item__details--tittle">{tittle}</p>
    <p className="carousel-item__details--subtittle">
      {`${year} ${contentRating} ${duration}`}
    </p>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  tittle: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

export default CarouselItem;
