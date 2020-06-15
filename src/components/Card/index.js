import React, { useState, useEffect } from 'react';
import { StyledCard } from './style';

const Card = (props) => {
  const [animated, setAnimated] = useState(false);
  const { delay = 0, noAnimation, primary, noMargin, big, ...prop } = props;

  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, props.delay);
  }, []);

  return (
    <StyledCard
      animated={animated}
      delay={delay}
      primary={primary}
      noAnimation={noAnimation}
      big={big}
      noMargin={noMargin}
      {...prop}
    />
  );
};

export default Card;
