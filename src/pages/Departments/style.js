import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const DepartmentLayout = styled.div`
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
    right: 0;
    ${media.mediumScreen} {
      left: 20rem !important;
    }
    .MuiMenuItem-root {
      min-height: 30px !important;
    }
  }
`;
export const DepartmentSection = styled.section`
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
    height: auto;
    max-height: 60px;
    overflow: hidden;
    justify-content: left;
    ${media.mediumScreen} {
      width: 24rem;
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
  margin: auto;
  padding-right: 10px;

  ${media.mediumScreen} {
    width: 50px;
    height: 50px;
  }
`;
DepartmentSection.DetailsWrap = styled.span`
  display: flex;
  flex-direction: rows;
  padding: 5px;
`;
DepartmentSection.Info = styled.span`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
DepartmentSection.Name = styled.span`
  text-transform: capitalize;
  font-size: 17px;
`;
DepartmentSection.Description = styled.span`
  color: ${(props) => props.theme.astronautBlue};
  opacity: 0.6;
  ${media.mediumScreen} {
    width: 24rem;
  }
`;

export const Preview = styled.img`
  width: 25px;
  height: 25px;
`;
