import React from 'react';
import { MarqueeLayout, Date, Item, Details } from './style';

const Marquee = (props) => (
  <MarqueeLayout>
    {props.newsFeedData && props.newsFeedData.map((item) => (
      <Item>
        <Date>{item.date}</Date>
        <Details>{item.article}</Details>
      </Item>
    ))}
  </MarqueeLayout>
);

export default Marquee;
