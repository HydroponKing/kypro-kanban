// src/components/NotFound/NotFound.jsx
import React from 'react';
import { NotFoundContainer, NotFoundTitle, NotFoundText, NotFoundLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundText>Sorry, the page you are looking for does not exist.</NotFoundText>
      <NotFoundLink to="/">Go to Home</NotFoundLink>
    </NotFoundContainer>
  );
};

export default NotFound;
