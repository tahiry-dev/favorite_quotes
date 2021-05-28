import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Quote from './quote';

import { getQuotes } from '../../apiCall/quoteSlice';

const FavoritedQuotes = () => {

    const quotes = useSelector(state => state.quote.quotes);

    const dispatch = useDispatch();
    useEffect(() => {
        if (quotes.length === 0) dispatch(getQuotes());
    }, [dispatch, quotes]);

    const quotesItems = [...quotes]
        .sort((quoteA, quoteB) => quoteB.favorited_by.length - quoteA.favorited_by.length)
        .slice(0, 4)
        .map(quote => <Quote key={quote.id} quote={quote} />);

    return (
        <div>
            <h1>Most favorited</h1>
            {quotesItems}
        </div>
    );
};

export default FavoritedQuotes;