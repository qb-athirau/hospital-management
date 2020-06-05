import React from 'react';
import { Link } from 'react-router-dom';
import { UnAuthorisedLayout, Image, Error } from './style';

const UnAuthorised = (props) => {
  return (
    <UnAuthorisedLayout>
      <Image src={`${process.env.PUBLIC_URL}/images/common/unauthorised.jpg`} />
      <Error>{props.location.state.message}</Error>
      <Link to="/" className="linkHome">
        Back to Home
      </Link>
    </UnAuthorisedLayout>
  );
};

export default UnAuthorised;
