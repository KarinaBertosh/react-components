import React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';

function ErrorPage() {
  return (
    <Container className="not-found-page">
      <h2>Page not found</h2>
    </Container>
  );
}

export default ErrorPage;
