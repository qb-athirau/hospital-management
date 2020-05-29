import React, { useEffect, useState } from 'react';
import {
  LandingPageLayout,
  Heading,
  CarouselWraper,
  FeedbackSection,
  Testimonial,
  NewsFeed,
} from './style';
import Header from '../../components/Header';
import { headerList, imageList, TestimonialInfoList } from '../../configs/constants';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import Testimonials from './components/testimonial';
import { SliderImage } from '../../components/Carousel/style';
import Marquee from '../../components/Marquee';

export const LandingPage = (props) => {
  const [newsFeedData, setNewsFeedData] = useState(props.newsDetails ?? []);

  useEffect(() => {
    props.newsFeedData();
  }, []);
  useEffect(() => {
    setNewsFeedData(props.newsDetails);
  }, [props.newsDetails]);

  const getTemplate = (item) => {
    return (
      <React.Fragment>
        <SliderImage className="img-back" imageUrl={item}></SliderImage>
      </React.Fragment>
    );
  };
  const getTestimonialTemplate = (item) => <Testimonials item={item} />;

  return (
    <LandingPageLayout>
      <Header navigationList={headerList} history={props.history} />
      <CarouselWraper>
        <Carousel getComponent={getTemplate} data={imageList} arrow></Carousel>
      </CarouselWraper>
      <FeedbackSection>
        <NewsFeed>
          <Heading> Wecare in the News</Heading>
          <Marquee newsFeedData={newsFeedData} />
        </NewsFeed>
        <Testimonial>
          <Heading> Our Heroes Speak</Heading>
          <Carousel getComponent={getTestimonialTemplate} autoPlay={3} data={TestimonialInfoList} />
        </Testimonial>
      </FeedbackSection>
      <Footer />
    </LandingPageLayout>
  );
};
