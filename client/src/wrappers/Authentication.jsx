import React from 'react';
import withAuth from '../Auth/withAuth';

const Authentication = ({ children }) => {
  return <div className="inner-page">{children}</div>;
};

export default withAuth(Authentication);
