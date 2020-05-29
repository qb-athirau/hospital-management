import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useMedia } from '../../utils/domUtils';
import SlideItem from './SlideItem';
import { Layout, Slider, SlideWrapper } from './style';

const Carousel = (props) => {
  const isMobile = useMedia('(max-width: 1279px)');
  const curIndex = useRef(0);
  const tValue = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = goToNextSlide;
  });
  useEffect(() => {
    if(props.autoPlay) {
      const play = () => {
        autoPlayRef.current();
      };
  
      const interval = setInterval(play, props.autoPlay * 1000);
      return () => clearInterval(interval);
    }
  }, []);

  const goToPrevSlide = () => {
    if (curIndex.current === 0) return;
    curIndex.current -= 1;
    setCurrentIndex(curIndex.current);
  };

  const goToNextSlide = () => {
    if (curIndex.current < props.data.length - 1) {
      curIndex.current += 1;
      setCurrentIndex(curIndex.current);
    } else if (curIndex.current === props.data.length - 1 && props.autoPlay) {
      curIndex.current = 0;
      setCurrentIndex(curIndex.current);
    }
  };

  const keyPress = (event) => {
    if (event.keyCode === 39) {
      goToNextSlide();
    } else if (event.keyCode === 37) {
      goToPrevSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', keyPress);
    return () => {
      window.removeEventListener('keyup', keyPress);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    curIndex.current = 0;
    setTranslateValue(0);
    tValue.current = 0;
  }, [isMobile]);

  const getSlide = (item, index) => {
    return (
      <SlideItem
        key={index}
        currentIndex={currentIndex}
        getComponent={props.getComponent}
        index={index}
        item={item}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        translateValue={translateValue}
        data={props.data}
      />
    );
  };

  return (
    <Layout className="slider-layout">
      <Slider className="slider-container">
        <SlideWrapper translateValue={translateValue} className="slider-wrapper">
          {props.data.map((item, index) => getSlide(item, index))}
        </SlideWrapper>
        {currentIndex !== 0 && props.arrow && (
          <FontAwesomeIcon
            className="backArrow arrow-slider"
            icon={faAngleLeft}
            onClick={goToPrevSlide}
          />
        )}
        {currentIndex < props.data.length - 1 && props.arrow && (
          <FontAwesomeIcon
            className="nextArrow arrow-slider"
            icon={faAngleRight}
            onClick={goToNextSlide}
          />
        )}
      </Slider>
    </Layout>
  );
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  getComponent: PropTypes.func.isRequired,
};
export default Carousel;
