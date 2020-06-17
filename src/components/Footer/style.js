import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const FooterLayout = styled.section`
  height: 8rem;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  ${media.mobileScreen} {
    flex-direction: column;
    height: 16rem;
  }
  a {
    width: 100%;
    text-decoration: none;
  }
`;

export const BookingSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.pureWhite};
  background-color: ${(props) => props.theme.darkBlue};
  // width: 50%;
  height: 8rem;
  ${media.mobileScreen} {
    width: 100%;
  }
`;

export const AskDoc = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.pureWhite};
  background-color: ${(props) => props.theme.pomagranate};
  // width: 50%;
  height: 8rem;
  ${media.mobileScreen} {
    width: 100%;
  }
`;
