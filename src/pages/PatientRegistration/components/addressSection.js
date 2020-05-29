import React from 'react';
import { ErrorMessage } from 'formik';
import {
  SectionWrap,
  TextInputWraper,
  Label,
  FieldsWrapper,
  FlexColumnWrap,
  FlexWrap,
  InputLabel,
  StyledInlineErrorMessage,
} from '../style';
import FormikField from '../../../components/FormikField';
import FormikSelect from '../../../components/FormikSelect';
import PhoneNumberField from '../../../components/PhoneNumberField';
import { maritalDetails, country } from '../../../configs/constants';

export const AddressSection = ({ errors, touched, validateForm, validatePhoneNumber }) => (
  <SectionWrap className="address-section">
    <FieldsWrapper>
      <FlexWrap>
        <FlexColumnWrap>
          <FormikField
            name="areaCode"
            className="areacode"
            label="AreaCode"
            type="number"
            autoComplete="off"
            required
          />
        </FlexColumnWrap>
        <FlexColumnWrap>
          <PhoneNumberField
            name="phoneNumber"
            label="Phone Number"
            type="text"
            className="phone-number"
            autoComplete="off"
            autoCorrect="off"
            required
            onBlur={(e) => {
              validatePhoneNumber(e, validateForm);
            }}
          />
        </FlexColumnWrap>
      </FlexWrap>
    </FieldsWrapper>
    {/* <FieldsWrapper className="marital-stat">
      <FormikSelect
        name="maritalStatus"
        items={maritalDetails}
        type="text"
        label="Marital Status"
        autoCapitalize="off"
        fullwidth
        autoCorrect="off"
        placeholder=""
      />
    </FieldsWrapper> */}
    <FlexColumnWrap>
      <FormikField
        name="streetAddOne"
        className="address"
        label="Street Address"
        type="text"
        autoComplete="off"
      />
      <FormikField
        name="streetAddTwo"
        label="Street Address Line 2"
        type="text"
        className="address"
        fullwidth
        autoComplete="off"
      />
      <FieldsWrapper>
        <FlexColumnWrap>
          <FormikField name="city" label="City" type="text" autoComplete="off" />
        </FlexColumnWrap>
        <FlexColumnWrap>
          <FormikField name="state" label="State/Province" type="text" autoComplete="off" />
        </FlexColumnWrap>
      </FieldsWrapper>
      <FieldsWrapper className="country-width">
          <FormikField name="zipCode" label="Postal / Zipcode" type="text" autoComplete="off" required/>
          <FormikSelect
            items={country}
            type="text"
            name="country"
            label="Country"
            fullwidth
            autoCapitalize="off"
            autoCorrect="off"
            placeholder=""
            required
          />
      </FieldsWrapper>
    </FlexColumnWrap>
  </SectionWrap>
);
