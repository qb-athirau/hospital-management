import React from 'react';
import { FooterLayout, BookingSpan, AskDoc } from './style';

const Footer = () => {
  return (
    <FooterLayout>
      <BookingSpan>BOOK APPOINTMENT</BookingSpan>
      <AskDoc>ASK THE DOCTOR</AskDoc>
    </FooterLayout>
  );
};

export default Footer;
