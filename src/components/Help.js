import React from 'react';
import { QuotesContainer, Button } from './Quotes/QuoteStyles.styled';

const Help = () => (
  <QuotesContainer>
    <div className="slider">
      <div className="no-quotes">
        <p>Page currently under construction.</p>
        <Button to="/"> Go home</Button>
      </div>
    </div>
  </QuotesContainer>
);

export default Help;
