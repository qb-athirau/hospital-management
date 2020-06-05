import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const DepartmentLayout = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
export const DepartmentSection = styled.section`
  position: relative;
  .plus-icon {
    font-size: 25px;
    color: ${(props) => props.theme.veryLightGrey};
    position: absolute;
    right: 1rem;
    top: 2rem;
    cursor: pointer;
    ${media.mediumScreen} {
      right: 10rem;
    }
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