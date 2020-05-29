import styled from 'styled-components';
import { media } from '../../configs/styles/mediaQueries';

export const RegistrationLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  .medicine {
    width: 93%;
    line-height: 2rem;
    ${media.mediumScreen} {
      width: 50%;
    }
  }
  .country-state-inputs-margin {
    ${media.mediumScreen} {
      margin-left: 10px;
    }
  }
  section:last-of-type {
    border-bottom: 0;
  }
  section:first-of-type {
    border-top: 1px solid ${(props) => props.theme.veryLightGrey};
  }
  .text-input-select {
    width: 256px;
  }
  .flex-wrap-padding {
    padding: 12px;
    margin-right: 0;
    ${media.mobileScreen} {
      align-items: center;
    }
  }
  .align-address {
    ${media.mediumScreen} {
      align-items: inherit;
    }
  }
  .address-line {
    ${media.mediumScreen} {
      width: 516px;
    }
  }
  .phone-number {
    margin: 5px;
    ${media.mediumScreen} {
      margin: 10px;
    }
  }
  .address-section {
    display: flex;
    align-items: flex-start;
  }
`;

export const Heading = styled.h2`
  text-align: center;
  ${media.mediumScreen} {
    text-align: left;
  }
`;

Heading.SubHeading = styled.h3`
  font-size: 17px;
  font-weight: inherit;
  text-align: center;
  ${media.mediumScreen} {
    text-align: left;
  }
`;
Heading.Wrap = styled.section`
  display: flex;
  width: 100%;
`;
Heading.Left = styled.span``;
Heading.Right = styled.span`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  height: 18px;
  width: 18px;
  ${media.mediumScreen} {
    height: 40px;
    width: 40px;
  }
`;
export const StyledInlineErrorMessage = styled.div`
  background-color: ${(props) => props.theme.ligntPink};
  color: ${(props) => props.theme.errorBrown};
  display: block;
  padding: 0.3rem 0.75rem;
  margin-left: 0.5rem;
  white-space: pre-line;
  ${media.mobileScreen} {
    margin-top: 0.5rem;
  }
`;

export const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.veryLightGrey};
  padding: 8%;
  ${media.mediumScreen} {
    padding: 2%;
  }
  .genderWidth,
  .marital-stat,
  .country-width {
    .MuiFormControl-root {
      width: 200px;
    }
  }
  .address {
    width: 100%;
  }
`;
export const FlexColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FlexWrap = styled.div`
  display: flex;
`;
export const TextInputWraper = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  ${media.mediumScreen} {
    padding: 12px;
  }
`;
export const Label = styled.label`
  text-align: center;
  font-weight: bold;
  padding: 3px;
  white-space: normal;
  word-break: break-word;
  ${media.mediumScreen} {
    text-align: left;
    flex-direction: row;
    width: 250px;
  }
`;
export const InputLabel = styled.label`
  text-align: left;
  color: ${(props) => props.theme.lightGrey};
  font-size: 0.786em;
  margin-top: 3px;
  padding-bottom: 15px;
  ${media.mobileScreen} {
    text-align: center;
  }
`;
export const FieldsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  ${media.mediumScreen} {
    flex-direction: row;
    margin-bottom: 10px;
  }
  .areacode {
    width: 80px;
    margin-right: 5px;
  }
  .datepicker {
    width: 230px;
  }
  .switch {
    .MuiSwitch-colorSecondary.Mui-checked {
      color: ${(props) => props.theme.speechBlue};
    }
    .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
      background-color: ${(props) => props.theme.speechBlue};
    }
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
  ${media.mobileScreen} {
    flex-direction: column;
  }
  button {
    margin: 10px;
    ${media.mobileScreen} {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
