import React from 'react';
import { Link } from 'react-router-dom';

import PageNotFoundImage from '../../assets/images/page_not_found.png';
import { PageNotFoundLayout, Image, Error } from './style';

const PageNotFound = () => {
  return (
    <PageNotFoundLayout>
      <Image src={PageNotFoundImage} />
      <Error>We couldn&apos;t find the page.</Error>
      <Link to="/" className="linkHome">
        Back to Home
      </Link>
    </PageNotFoundLayout>
  );
};

export default PageNotFound;
