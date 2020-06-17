import React from 'react';
import { FooterLayout, BookingSpan, AskDoc } from './style';

const Footer = () => {
  return (
    <FooterLayout>
      <a href="/departments">
        <BookingSpan>BOOK APPOINTMENT</BookingSpan>
      </a>
      <a href="/doctors">
        <AskDoc>ASK THE DOCTOR</AskDoc>
      </a>
    </FooterLayout>
  );
};

export default Footer;
