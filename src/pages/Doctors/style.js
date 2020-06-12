import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const DoctorLayout = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  ${media.mediumScreen} {
    margin-left: 0;
    margin-right: 0;
  }
  .dots-icon {
    font-size: 15px;
    position: absolute;
    right: 9px;
    bottom: 47px;
    ${media.mediumScreen} {
      bottom: 70px;
    }
  }
  .popper {
    position: absolute !important;
    left: 15rem !important;
    top: 1rem !important;
    ${media.mediumScreen} {
      left: 11rem !important;
    }
    right: 0;
    .MuiMenuItem-root {
      font-family: Gilroy;
      font-size: 0.6rem;
      min-height: 26px !important;
    }
  }
`;
export const DoctorSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  .plus-icon {
    font-size: 35px;
    color: ${(props) => props.theme.speechBlue};
    position: absolute;
    right: 1rem;
    top: 2rem;
    cursor: pointer;
  }
  .card {
    width: 100%;
    justify-content: flex-start;
    ${media.mediumScreen} {
      width: 24%;
    }
  }
  .wrap {
    margin-top: 5rem;
    justify-content: space-between;
  }
`;
export const ButtonWrap = styled.div`
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
  ${media.mediumScreen} {
    margin: 0 auto !important;
    width: 60px;
    text-align: inherit;
  }
  button {
    ${media.mobileScreen} {
      width:100%;
  }
`;
export const AddDepartment = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Heading = styled.h2`
  text-align: center;
  ${media.mediumScreen} {
    text-align: left;
  }
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  ${media.mediumScreen} {
    width: 50px;
    height: 50px;
  }
`;
DoctorSection.DetailsWrap = styled.span`
  display: flex;
  flex-direction: rows;
  padding: 5px;
`;
DoctorSection.Info = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
DoctorSection.Name = styled.span`
  color: ${(props) => props.theme.astronautBlue};
  font-size: 18px;
`;
DoctorSection.Department = styled.span`
  color: ${(props) => props.theme.blondBlue};
  text-transform: uppercase;
  font-size: 11px;
`;
DoctorSection.Qualification = styled.span`
  color: ${(props) => props.theme.lightGrey};
  font-size: 10px;
  line-height: 1.5rem;
`;
