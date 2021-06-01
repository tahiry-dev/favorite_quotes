import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loading from '../Loading';
import Error from '../Error';
import Quote from './quote';

import { getQuotes } from '../../apiCall/quoteSlice';

import { QuotesContainer, SliderPaginationContainer } from './QuoteStyles.styled';

const AllQuotes = () => {

  const loading = useSelector(state => state.quote.loaders.loadingQuotes);
  const error = useSelector(state => state.quote.errors.loadingQuotes);
  const quotes = useSelector(state => state.quote.quotes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);


  const quoteItems = [...quotes].map(quote => <Quote key={quote.id} quote={quote} />);

  return (
    <QuotesContainer>
      {loading ? <Loading /> : null}
      {error ? <Error errors={error} /> : null}
      <div className="slider">
        {quoteItems.length === 0 && !loading && !error ? (
          <p className="text-center">No quotes in the database.</p>
        ) : (
          quoteItems
        )}
      </div>
      <SliderPaginationContainer>
        Total:
        {quoteItems.length}
      </SliderPaginationContainer>
    </QuotesContainer>
  );
};

export default AllQuotes;