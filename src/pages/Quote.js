import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { CgQuoteO } from 'react-icons/cg';

const Quote = () => (
  <div className="quoteWrap">

    <h3 className="quote">
      <h1 className="title">
        <CgQuoteO />
        {' '}
        Today&#39;s Quote
      </h1>
      <FaQuoteLeft />
      {' '}
      Mathematics is not about numbers,equations,computations,or algorithms its about understanding
      {' '}
      <FaQuoteRight />
      {' '}
      -William Paul Thurston
    </h3>
  </div>
);
export default Quote;
