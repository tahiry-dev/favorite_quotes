import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../Loading';
import Error from '../Error';
import Quote from './quote';
import { getQuotes } from '../../apiCall/quoteSlice';
import { QuotesContainer, SliderPaginationContainer, Button } from './QuoteStyles.styled';

const UserFavorites = () => {
  const currentUser = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.quote.loaders.loadingQuotes);
  const error = useSelector((state) => state.quote.errors.loadingQuotes);
  const quotes = useSelector((state) => state.quote.quotes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  const quoteItemsLength = useSelector((state) => state.quote.quote.favorited_by
    .some((favorite) => favorite.id === currentUser.id));
  const quoteItems = [...quotes]
    .map((quote) => <Quote key={quote.id} quote={quote} />);

  return (
    <QuotesContainer>
      {loading ? <Loading /> : null}
      {error ? <Error errors={error} /> : null}
      <div className="slider">
        {quoteItemsLength.length === 0 && !loading && !error ? (
          <div className="no-quotes">
            <p>No quotes favorited by you.</p>
            <Button to="/quotes"> Browse quotes</Button>
          </div>
        ) : (
          quoteItems
        )}
      </div>

      <SliderPaginationContainer>
        Total:
        {quoteItemsLength.length}
      </SliderPaginationContainer>
    </QuotesContainer>
  );
};

export default UserFavorites;
