import React, { useState } from "react";
import { Form, Formik } from "formik";
import Button from '../../../components/Button';
import {ButtonWrap} from '../style';

export const Wizard = ({ children, initialValues, onSubmit, isSubmitting, values }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = values => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = values => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step.props.onSubmit) {
      step.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values);
    } else {
      next(values);
    }
  };

  return (
        <Form onSubmit={handleSubmit}>
          {step}
          <ButtonWrap>
            {stepNumber > 0 && (
              <Button onClick={() => previous(values)} type="button" >
                Back
              </Button>
            )}
              <Button primary={true} disabled={isSubmitting} type="submit">
                {isLastStep ? "Submit" : "Next"}
              </Button>
          </ButtonWrap>
        </Form>
  );
};

export const WizardStep = ({ children }) => children;

