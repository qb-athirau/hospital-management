import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const Layout = styled.section`
  position: relative;
  width: 100%;
  ${media.mediumScreen} {
    width: 100%;
  }
  margin: 0;
`;

export const Slider = styled.section`
  width: 100%;
  ${media.mediumScreen} {
    width: 100%;
    position: relative;
  }
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;

  .slide {
    display: none;
    height: 100%;
    width: 100%;
    background: 100% / cover no-repeat;
  }

  .arrow-slider {
    font-size: 40px;
    cursor: pointer;
    color: ${(props) => props.theme.flatBlue};
    transform: translateY(-50%);
    top: 50%;
    z-index: 5;
    position: absolute;
  }

  .nextArrow {
    right: 19px;
    ${media.mediumScreen} {
      right: 118px;
    }
    ${media.smallScreen} {
      right: -20px;
    }
  }

  .backArrow {
    left: 5px;
    ${media.mediumScreen} {
      left: 118px;
    }
    ${media.smallScreen} {
      left: -20px;
    }
  }
  .active {
    display: block;
    transform: scale(1);
    opacity: 1;
    transition: transform ease-out 0.45s;
  }
  .disabled {
    display: none;
    transform: scale(0.8);
    opacity: 0.4;
    transition: transform ease-out 0.45s;
  }
`;
export const SliderImage = styled.span`
  width: 100%;
  height: 340px;
  display: inline-block;
  background: url(${(props) => `${process.env.PUBLIC_URL}${props.imageUrl}`}) center center/cover
    no-repeat;
  ${media.mediumScreen} {
    width: 100%;
    height: 350px;
  }
`;
export const SlideWrapper = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  padding: 0;
  ${media.mediumScreen} {
    width: 100%;
    height: 380px;
  }
  transform: ${(props) => props.translateValue && `translateX(${props.translateValue}px)`};
  transition: transform ease-out 0.45s;
`;

export const Slide = styled.li``;
