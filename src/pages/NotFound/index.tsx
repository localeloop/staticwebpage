import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error404 = styled.div`
  height: 50vh;
  width: 100vw;
  text-align: center;
  padding-top: 10%;

  h1, p, a {
    font-weight: bolder;
    color: #111;
  }

  p, a {

    font-size: 1.5rem;
  }

  a {
    color: rgb(26, 77, 46);
    text-decoration: underline;
  }
`;

const NotFound = () => (
  <Error404>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p>Let's go <Link to="/">somewhere safe</Link></p>
  </Error404>
);

export default NotFound;