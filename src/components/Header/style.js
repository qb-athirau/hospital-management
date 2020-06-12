import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const HeaderSection = styled.section`
  padding: 10px 0;
  height: 35px;
  display: flex;
  flex-direction: row;
  ${media.mediumScreen} {
    padding: 10px 20px;
    height: 90px;
    flex-direction: column;
  }
`;

HeaderSection.HeaderWrap = styled.span`
  width: 60%;
  display: flex;
  justify-content: space-between;
  ${media.mediumScreen} {
    width: 100%;
  }
`;
export const Image = styled.img`
  height: 18px;
  width: 18px;
  cursor: pointer;
  ${media.mediumScreen} {
    height: 40px;
    width: 40px;
  }
`;

HeaderSection.MainHeader = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  ${media.mediumScreen} {
    justify-content: flex-end;
    padding: 0.75rem 0 0.75rem 0;
    border-bottom: 1px solid ${(props) => props.theme.veryLightGrey};
  }
`;
HeaderSection.SubHeader = styled.span`
  ${media.mediumScreen} {
    margin: 0.75rem 0;
    border-bottom: 1px solid ${(props) => props.theme.veryLightGrey};
  }
`;
HeaderSection.NavigationListWrapper = styled.span`
  position: fixed;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  top: 56px;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.pureWhite};
  z-index: 6;
  ${media.mediumScreen} {
    position: static;
  }
`;
HeaderSection.NavigationList = styled.ul`
  padding: 10px 0;
  padding-top: 25px;
  overflow: auto;
  height: 100%;
  color: ${(props) => props.theme.flatBlue};
  ${media.mediumScreen} {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0;
    max-width: 1246px;
    margin: 0 auto;
    justify-content: center;
    padding-bottom: 20px;
  }
  a {
    color: ${(props) => props.theme.flatBlue};
    text-decoration: none;
  }
`;
HeaderSection.NavItem = styled.li`
  font-family: Gilroy-Medium;
  font-size: 21px;
  line-height: 46px;
  padding-left: ${(props) => (props.selected ? `13px` : '18px')};
  cursor: pointer;
  position: relative;
  color: ${(props) => (props.selected ? props.theme.flatBlue : props.theme.brownGrey)};
  border-left: ${(props) => (props.selected ? `5px solid ${props.theme.flatBlue}` : 'none')};
  text-align: left;
  list-style-type: none;
  &:hover {
    border-left: ${(props) => `5px solid ${props.theme.flatBlue}`};
    color: ${(props) => props.theme.flatBlue};
    background-color: #ccc;
    padding: 10px;
    border-radius: 5px;
  }
  ${media.mediumScreen} {
    font-family: Gilroy-Semibold;
    line-height: 38px;
    padding: 10px;
    margin-left: 32px;
    border-left: 0 none;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      border-left: 0 none;
    }
    &:before {
      content: attr(data-value);
      color: transparent;
    }
    .category-label {
      font-family: ${(props) => (props.selected ? 'Gilroy-Bold' : 'Gilroy-Medium')};
      font-size: ${(props) => (props.selected ? '20px' : '16px')};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      &:hover {
        font-family: Gilroy-Bold;
        font-size: 20px;
        border: none;
        color: ${(props) => props.theme.flatBlue};
      }
    }
  }
  ${media.mediumScreen} {
    line-height: 18px;
  }
`;
HeaderSection.Menu = styled.span``;

HeaderSection.HeaderRight = styled.div`
  display: flex;
  visibility: visible;
  position: relative;
  z-index: 1;
  margin-top: 2px;
  ${media.mediumScreen} {
    justify-content: space-between;
    visibility: visible;
    .popper {
      position: relative !important;
    }
  }
`;
HeaderSection.MobileLink = styled.span`
  margin-right: 5px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.flatBlue};
  }
`;
export const SignupBtnWraper = styled.span`
  button {
    background: ${(props) => props.theme.pureWhite};
    border: 1px solid ${(props) => props.theme.flatBlue};
    font-family: Gilroy-Bold;
    font-size: 14px;
    color: #2f839d;
    margin-right: 10px;
    min-width: 100px;
    min-height: 30px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
  }
`;
