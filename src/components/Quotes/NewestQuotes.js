import { useSelector } from 'react-redux';

import Quote from './quote';

const NewestQuotes = () => {
  const quotes = useSelector((state) => state.quote.quotes);
  const quotesItems = quotes
    .slice(0, 4)
    .map((quote) => <Quote key={quote.id} quote={quote} />);

  return (
    <div>
      <h1>Newest Quotes</h1>
      {quotesItems}
    </div>
  );
};

export default NewestQuotes;
