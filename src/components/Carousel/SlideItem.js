import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Slide, SliderImage } from './style';
import { sliderConst } from '../../configs/constants';

const SlideItem = (props) => {
  const slideRef = useRef(null);

  const touchStart = (e) => {
    const touchBbj = e.changedTouches[0];
    sliderConst.startX = touchBbj.pageX;
    sliderConst.startY = touchBbj.pageY;
    sliderConst.startTime = new Date().getTime();
  };

  const touchEnd = (e) => {
    const touchBbj = e.changedTouches[0];
    sliderConst.distX = touchBbj.pageX - sliderConst.startX;
    sliderConst.distY = touchBbj.pageY - sliderConst.startY;
    sliderConst.elapsedTime = new Date().getTime() - sliderConst.startTime;
    if (sliderConst.elapsedTime <= sliderConst.allowedTime) {
      if (
        Math.abs(sliderConst.distX) >= sliderConst.threshold &&
        Math.abs(sliderConst.distY) <= sliderConst.restraint
      ) {
        if (sliderConst.distX < 0) {
          props.goToNextSlide();
        } else {
          props.goToPrevSlide();
        }
      }
      // for up and down - Math.abs(distY) >= threshold && Math.abs(distX) <= restraint
    }
  };

  useEffect(() => {
    slideRef.current.addEventListener('touchstart', touchStart);
    slideRef.current.addEventListener('touchend', touchEnd);
    return () => {
      slideRef.current.removeEventListener('touchstart', touchStart);
      slideRef.current.removeEventListener('touchend', touchEnd);
    };
  }, []);

  const getSlide = () => {
    return (
      <Slide
        ref={slideRef}
        key={props.index}
        className={`slide ${props.currentIndex === props.index ? 'active' : 'disabled'}`}>
        <div className="contanier-wrap">
          {props.getComponent(props.item)}
        </div>
      </Slide>
    );
  };

  return <React.Fragment>{getSlide()}</React.Fragment>;
};

SlideItem.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
  goToPrevSlide: PropTypes.func.isRequired,
  translateValue: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default SlideItem;
