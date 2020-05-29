import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';
import { Label } from '../PatientRegistration/style';

export const LoginLayout = styled.section`
  margin: 9%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h2`
  text-align: center;
  ${media.mediumScreen} {
    text-align: left;
  }
`;
export const LoginLabel = styled(Label)`
  ${media.mediumScreen} {
    width: 100px;
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
