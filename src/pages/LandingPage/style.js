import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const LandingPageLayout = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
export const CarouselWraper = styled.section`
  width: 100%;
  height: 100%;
`;
export const Heading = styled.span`
  font-family: Gilroy-Semibold;
  font-size: 25px;
  color: ${(props) => props.theme.flatBlue};
  display: flex;
  justify-content: center;
`;
export const FeedbackSection = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-bottom: 17rem;
  ${media.mediumScreen} {
    // flex-direction: row;
    height: auto;
    margin-bottom: 1rem;
    align-items: center;
  }
`;
export const Testimonial = styled.span`
  width: 100%;
  text-align: center;
  margin-top: 10px;
  ${media.mediumScreen} {
    width: 50%;
    text-align: left;
  }
`;
export const NewsFeed = styled.span`
  width: 100%;
  overflow: hidden;
  ${media.mediumScreen} {
    // width: 50%;
    margin-right: 20px;
  }
`;
export const TestimonialTemplate = styled.span`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.snow};
  border: 5px solid ${(props) => props.theme.whisperTint};
  padding: 20px;
`;
TestimonialTemplate.Writeup = styled.p`
  height: 145px;
  white-space: normal;
  text-align: left;
  border-bottom: 1px solid ${(props) => props.theme.whisperTint};
  padding-bottom: 10px;
  color: ${(props) => props.theme.veryDarkGrey};
  ${media.mediumScreen} {
    height: 93px;
  }
`;
Testimonial.ProfileWraper = styled.div`
  display: flex;
  align-items: center;
`;
TestimonialTemplate.ProfilePic = styled.span`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-block;
  background: url(${(props) => `${process.env.PUBLIC_URL}${props.picUrl}`}) center center/cover
    no-repeat;
  ${media.mediumScreen} {
    height: 60px;
  }
`;
Testimonial.ProfileInfo = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
`;
Testimonial.Name = styled.label`
  font-family: Gilroy-Bold;
  font-size: 20px;
`;
Testimonial.Country = styled.label``;
