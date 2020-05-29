import React from 'react';
import { TestimonialTemplate, Testimonial } from '../style';

const Testimonials = (props) => (
  <TestimonialTemplate>
    <TestimonialTemplate.Writeup>{props.item.writeup}</TestimonialTemplate.Writeup>
    <Testimonial.ProfileWraper>
      <TestimonialTemplate.ProfilePic
        className="image"
        picUrl={props.item.path}></TestimonialTemplate.ProfilePic>
      <Testimonial.ProfileInfo>
        <Testimonial.Name>{props.item.name}</Testimonial.Name>
        <Testimonial.Country>{props.item.country}</Testimonial.Country>
      </Testimonial.ProfileInfo>
    </Testimonial.ProfileWraper>
  </TestimonialTemplate>
);

export default Testimonials;
