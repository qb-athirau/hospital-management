import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const DashboardLayout = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const DashboardSection = styled.section`
  margin: 10px 0;
`;
export const ItemWrap = styled.a`
  width: 130px;
  height: 130px;
  margin: 10px;
  text-decoration: none;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: normal;
  ${media.mediumScreen} {
  justify-content: space-around;
  }
`;
